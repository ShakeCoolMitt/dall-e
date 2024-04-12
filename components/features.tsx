import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, InfinityIcon, Tally5 } from "lucide-react";

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlimited icons. Unlimited possibilities.
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choose the plan that is right for you. Whether you are a hobbyist or
            a professional, VectoAI has you covered.
          </p>
        </div>
        <div className="grid max-w-full mx-auto gap-4 lg:grid-cols-2">
          <Card className="border-2 border-gray-100 dark:border-gray-800">
            <CardHeader className="p-6 bg-gray-50 dark:bg-gray-950">
              <CardTitle className="text-center text-3xl font-bold">
                Free
              </CardTitle>
              <CardDescription className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                <Tally5 className="w-5 h-5 mr-2" />
                Limited
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 p-6 text-base">
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />5 Free Icon Generations
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Download Icons
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Try out the AI Generation
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Limited Support
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-6">
              <div className="text-2xl font-bold">$0/mo</div>
              <Button className="mx-auto" size="lg">
                Try for Free
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-2 border-gray-100 dark:border-gray-800">
            <CardHeader className="p-6 bg-gray-50 dark:bg-gray-950">
              <CardTitle className="text-center text-3xl font-bold">
                Pro
              </CardTitle>
              <CardDescription className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                <InfinityIcon className="w-5 h-5 mr-2" />
                Unlimited
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 p-6 text-base">
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Unlimited Generation
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Download Icons
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Access to Past Icons
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Priority Support
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-6">
              <div className="text-2xl font-bold">$20/mo</div>
              <Button className="mx-auto" size="lg">
                Upgrade to Pro
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
