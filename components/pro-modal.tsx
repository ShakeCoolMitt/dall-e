import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, HelpCircle, Infinity } from "lucide-react";

const ProModal = () => {
  const proModal = useProModal();
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 py-1 font-bold">
              Upgrade to
              <Badge className="text-sm uppercase py-1 bg-cyan-600">Pro</Badge>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div>
              <div className="max-w-2xl p-6 space-y-6">
                <div>
                  <div>Pro Features</div>
                  <div>
                    Unlock additional features with the Pro version of the AI
                    icon generator.
                  </div>
                </div>
                <div>
                  <div className="space-y-6">
                    <div className="flex space-x-4 items-start">
                      <Infinity className="flex-shrink-0 h-6 w-6" />
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-medium leading-none">
                          Unlimited Generation
                        </h3>
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                          Generate icons without any limits.
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4 items-start">
                      <Clock className="flex-shrink-0 h-6 w-6" />
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-medium leading-none">
                          Access to Past Icons
                        </h3>
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                          View and download previously generated icons.
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4 items-start">
                      <HelpCircle className="flex-shrink-0 h-6 w-6" />
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-medium leading-none">
                          Priority Support
                        </h3>
                        <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                          Get help faster with priority support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-4 pt-5">
                  <Button variant="outline">Cancel</Button>
                  <Button>Upgrade to Pro</Button>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
