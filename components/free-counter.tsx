"use client";

import { use, useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_USES } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { KeyRoundIcon } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

export const FreeCounter = ({
  isPro = false,
  apiLimitCount = 0,
}: {
  isPro: boolean;
  apiLimitCount: number;
}) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_USES} Free Uses
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_USES) * 100}
            />
          </div>
          <Button
            onClick={proModal.onOpen}
            className="w-full bg-gradient-to-br from-cyan-400 to-cyan-600"
          >
            <KeyRoundIcon className="w-4 h-4 mr-2" />
            Upgrade to Pro
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
