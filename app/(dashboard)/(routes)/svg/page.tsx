"use client";

import * as z from "zod";

import axios from "axios";

import {
  Download,
  ImageIcon,
  MessageCircle,
  MessageSquare,
  Palette,
  Scaling,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";

import {
  amountOptions,
  formSchema,
  resOptions,
  styleOptions,
} from "./constants";

import { Empty } from "@/components/ui/Empty";
import { Loader } from "@/components/ui/loader";
import { UserAvatar } from "@/components/ui/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import ColorPicker from "@/components/ColorPicker";
import { colorOptions } from "./constants";
import { useProModal } from "@/hooks/use-pro-modal";
import { PaintBrushIcon } from "@heroicons/react/24/outline";

const ImagePage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [images, setImages] = useState<string[]>([]);
  const [color, setColor] = useState("");
  const [style, setStyleOptions] = useState(styleOptions[2].value);
  const [urls, setUrls] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
      styleOptions: styleOptions[2].value,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const updatedPrompt = `${color} ${values.styleOptions} ${values.prompt}`;
      const updatedValues = { ...values, prompt: updatedPrompt };

      const response = await axios.post("/api/svg", updatedValues);

      const urls = response.data;
      setImages(urls);
      const response2 = await axios.post("/api/icons", urls);
      setUrls(response2.data);

      console.log(urls);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Generate images from text prompts."
        icon={ImageIcon}
        iconColor="text-pink-500"
        bgColor="bg-pink-500/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <div className="rounded-md p-4 ">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Create Your Icon
            </h2>
            <p className="text-gray-700 mb-3">
              Your icon outcomes might differ as we continue refining the
              styles. Below are a few tips to help you create more effective
              icons:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Keep your prompts simple for optimal results.</li>
              <li>
                Avoid including text or characters; AI struggles with rendering
                these accurately.
              </li>
              <li>
                Once you find an icon you like, try using variations of it.
              </li>
              <li>
                Incorporate descriptive words like happy or vibrant to refine
                your results.
              </li>
            </ul>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-1
                gap-2
                
                
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <div className="text-xl text-primary font-semibold">
                      1. Describe your new icon using a noun and adjective
                      <MessageSquare className="w-6 h-6 mr-2" />
                    </div>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Example: happy cat"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <div className="text-xl text-primary font-semibold">
                        2. How many images do you want to generate?
                        <ImageIcon className="w-6 h-6 mr-2" />
                      </div>
                      <FormControl className="m-0 p-2">
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="text-xl text-primary font-semibold">
                      3. Choose a color for your icon
                    </div>
                    <PaintBrushIcon className="w-6 h-6 mr-2" />
                  </FormItem>
                )}
              />

              <div>
                <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                  {colorOptions.map((option) => (
                    <ColorPicker
                      key={option}
                      option={option}
                      color={color}
                      setColor={setColor}
                    />
                  ))}
                </div>
              </div>

              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <div className="text-xl text-primary font-semibold">
                        4. What would you like the resolution of the images to
                        be?
                        <Scaling className="w-6 h-6 mr-2" />
                      </div>

                      <FormControl className="m-0 p-2">
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="styleOptions"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6 pb-10">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <div className="text-xl text-primary font-semibold">
                        5. Choose a style for your icon
                        <Palette className="w-6 h-6 mr-2" />
                      </div>
                      <FormControl className="m-0 p-2 h-full">
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {styleOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                            <Image
                              className="rounded-md "
                              src={option.imageSrc}
                              alt={option.label}
                              width={150}
                              height={150}
                            />
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className="py-10">
                <Button
                  className=" w-full py-4 "
                  type="submit"
                  disabled={isLoading}
                  size="icon"
                >
                  Generate
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label="No images generated." />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-md overflow-hidden">
                <div className="relative aspect-square">
                  <Image src={src} fill alt="Generated Image" />
                </div>
                <CardFooter className="p-2" />
                <Button onClick={() => window.open(src)} className="w-full">
                  <Download className="w-6 h-6 mr-3" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
