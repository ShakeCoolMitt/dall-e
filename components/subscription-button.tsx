"use client";

import { KeyRoundIcon } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.error(error, "Error subscribing to Pro, billing");
    }
    setLoading(false);
  };

  return (
    <Button disabled={loading} onClick={onClick}>
      {isPro ? "Manage Subscription" : "Upgrade to Pro"}
      {!isPro && <KeyRoundIcon className="w-4 h-4 ml-2" />}
    </Button>
  );
};
