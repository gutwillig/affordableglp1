"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ProviderCard } from "@/components/marketing/provider-card";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; description?: string }[];
}

const questions: Question[] = [
  {
    id: "goal",
    question: "What's your primary weight loss goal?",
    options: [
      { value: "significant", label: "Lose 50+ pounds", description: "Major weight loss transformation" },
      { value: "moderate", label: "Lose 20-50 pounds", description: "Moderate weight loss" },
      { value: "maintenance", label: "Lose under 20 pounds", description: "Minor adjustment or maintenance" },
    ],
  },
  {
    id: "budget",
    question: "What's your monthly budget for GLP-1 medication?",
    options: [
      { value: "budget", label: "Under $200/month", description: "Looking for most affordable options" },
      { value: "moderate", label: "$200-300/month", description: "Balanced value and quality" },
      { value: "premium", label: "Over $300/month", description: "Willing to pay for premium service" },
    ],
  },
  {
    id: "medication",
    question: "Do you prefer brand-name or compounded medication?",
    options: [
      { value: "brand", label: "Brand-name only", description: "FDA-approved Wegovy, Zepbound, etc." },
      { value: "compounded", label: "Compounded is fine", description: "Lower cost, same active ingredients" },
      { value: "either", label: "Either works", description: "Flexible on medication type" },
    ],
  },
  {
    id: "format",
    question: "How would you prefer to take your medication?",
    options: [
      { value: "injection", label: "Weekly injection", description: "Most common, highest effectiveness" },
      { value: "oral", label: "Daily oral pill", description: "If available, no needles" },
      { value: "either", label: "Either format", description: "Flexible on administration method" },
    ],
  },
  {
    id: "support",
    question: "How much support do you want from your provider?",
    options: [
      { value: "minimal", label: "Just the medication", description: "Simple prescription service" },
      { value: "moderate", label: "Some guidance", description: "Regular check-ins and support" },
      { value: "comprehensive", label: "Full program", description: "Coaching, nutrition, lifestyle support" },
    ],
  },
  {
    id: "speed",
    question: "How quickly do you want to get started?",
    options: [
      { value: "asap", label: "ASAP", description: "Want medication within a week" },
      { value: "soon", label: "Within 2 weeks", description: "Soon but not urgent" },
      { value: "flexible", label: "No rush", description: "Willing to wait for best option" },
    ],
  },
];

// Placeholder provider recommendations based on answers
const providerDatabase = [
  {
    _id: "1",
    _type: "provider" as const,
    name: "Hims/Hers",
    slug: { current: "hims", _type: "slug" as const },
    oneLineVerdict: "Best overall value with reliable service",
    fdaStatus: "both" as const,
    scores: { overall: 92, pricing: 90, medicalQuality: 88, userExperience: 95, customerSupport: 90 },
    pricing: { startingPrice: 199, consultationFee: 0, shippingFee: 0 },
    pros: ["Free consultation", "Fast turnaround", "Both medication types"],
    tags: ["moderate", "either", "speed:asap", "support:moderate"],
  },
  {
    _id: "2",
    _type: "provider" as const,
    name: "Henry Meds",
    slug: { current: "henry-meds", _type: "slug" as const },
    oneLineVerdict: "Most affordable compounded option",
    fdaStatus: "compounded" as const,
    scores: { overall: 86, pricing: 95, medicalQuality: 82, userExperience: 85, customerSupport: 84 },
    pricing: { startingPrice: 149, consultationFee: 0, shippingFee: 0 },
    pros: ["Lowest price", "Simple process", "Fast shipping"],
    tags: ["budget", "compounded", "support:minimal", "speed:asap"],
  },
  {
    _id: "3",
    _type: "provider" as const,
    name: "Ro",
    slug: { current: "ro", _type: "slug" as const },
    oneLineVerdict: "Comprehensive program with strong medical oversight",
    fdaStatus: "both" as const,
    scores: { overall: 89, pricing: 85, medicalQuality: 92, userExperience: 90, customerSupport: 88 },
    pricing: { startingPrice: 249, consultationFee: 0, shippingFee: 0 },
    pros: ["Strong medical team", "Insurance support", "Comprehensive care"],
    tags: ["moderate", "brand", "support:comprehensive", "goal:significant"],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  // Simple matching logic (would be more sophisticated in production)
  const getRecommendations = () => {
    // For demo, return top 3 providers with simple scoring
    return providerDatabase.slice(0, 3);
  };

  if (showResults) {
    const recommendations = getRecommendations();

    return (
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-medium text-forest uppercase tracking-wide mb-4">
                Your Results
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-midnight mb-4">
                Here Are Your Top Matches
              </h1>
              <p className="text-slate">
                Based on your answers, we&apos;ve identified the best GLP-1 providers
                for your needs.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {recommendations.map((provider, index) => (
                <div key={provider._id} className="relative">
                  {index === 0 && (
                    <div className="absolute -top-3 left-4 z-10">
                      <span className="bg-forest text-white text-xs font-medium px-3 py-1 rounded-full">
                        Best Match
                      </span>
                    </div>
                  )}
                  <ProviderCard
                    provider={provider}
                    rank={index + 1}
                    variant={index === 0 ? "featured" : "default"}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-forest hover:bg-forest-light">
                <Link href="/rankings">View All Providers</Link>
              </Button>
              <Button variant="outline" size="lg" onClick={handleRestart}>
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-midnight mb-2">
              Find Your Ideal GLP-1 Provider
            </h1>
            <p className="text-slate">
              Answer a few questions to get personalized recommendations.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <h2 className="font-display text-xl md:text-2xl font-semibold text-midnight mb-6">
                {currentQ.question}
              </h2>

              <RadioGroup
                value={answers[currentQ.id] || ""}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {currentQ.options.map((option) => (
                  <div
                    key={option.value}
                    className={`flex items-start space-x-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                      answers[currentQ.id] === option.value
                        ? "border-forest bg-forest/5"
                        : "hover:border-muted-foreground"
                    }`}
                    onClick={() => handleAnswer(option.value)}
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer"
                    >
                      <span className="font-medium text-midnight block">
                        {option.label}
                      </span>
                      {option.description && (
                        <span className="text-sm text-muted-foreground">
                          {option.description}
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentQuestion === 0}
            >
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[currentQ.id]}
              className="bg-forest hover:bg-forest-light"
            >
              {currentQuestion === questions.length - 1
                ? "See Results"
                : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
