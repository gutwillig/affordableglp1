"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface NewsletterProps {
  variant?: "default" | "minimal" | "hero";
  className?: string;
}

export function Newsletter({ variant = "default", className }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={status === "loading" || status === "success"}
        />
        <Button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="bg-forest hover:bg-forest-light"
        >
          {status === "loading"
            ? "..."
            : status === "success"
              ? "Subscribed!"
              : "Subscribe"}
        </Button>
      </form>
    );
  }

  if (variant === "hero") {
    return (
      <div
        className={cn(
          "bg-gradient-to-r from-midnight to-ink text-white rounded-2xl p-8 md:p-12",
          className
        )}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Stay Updated on GLP-1 News
          </h2>
          <p className="text-soft mb-6">
            Get weekly updates on pricing changes, FDA announcements, and new
            provider reviews. No spam, unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="bg-forest/20 text-forest-light rounded-lg p-4">
              <p className="font-medium">
                Thanks for subscribing! Check your inbox to confirm.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-forest hover:bg-forest-light text-white"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="text-coral-light text-sm mt-3">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="text-xs text-muted mt-4">
            By subscribing, you agree to our{" "}
            <a href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("bg-cloud rounded-lg p-6 md:p-8", className)}>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold text-midnight mb-2">
            Get GLP-1 Updates
          </h3>
          <p className="text-slate text-sm">
            Weekly pricing updates, FDA news, and new provider reviews delivered
            to your inbox.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-forest/10 text-forest rounded-lg px-4 py-3">
            <p className="font-medium">Subscribed! Check your inbox.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-64"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-forest hover:bg-forest-light"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </Button>
          </form>
        )}
      </div>

      {status === "error" && (
        <p className="text-coral text-sm mt-3">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
