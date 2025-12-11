"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap, Crown, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Unlimited video uploads",
      "Basic video editor",
      "Chat with friends",
      "Watch & discover content",
      "Standard music library",
    ],
    cta: "Download Free",
    popular: false,
    gradient: "from-gray-500 to-gray-600",
  },
  {
    name: "Creator",
    icon: Crown,
    price: "$9.99",
    period: "per month",
    description: "For serious content creators",
    features: [
      "Everything in Free",
      "Go Live with gifts",
      "Premium music library",
      "Advanced video editor",
      "Analytics dashboard",
      "Priority support",
      "Verified badge",
    ],
    cta: "Start Creating",
    popular: true,
    gradient: "from-primary to-accent",
  },
  {
    name: "Pro",
    icon: Rocket,
    price: "$24.99",
    period: "per month",
    description: "For professional creators",
    features: [
      "Everything in Creator",
      "Multi-stream to platforms",
      "Custom branding",
      "Revenue optimization",
      "Dedicated manager",
      "API access",
      "Early feature access",
    ],
    cta: "Go Pro",
    popular: false,
    gradient: "from-amber-500 to-orange-600",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Pricing Plans</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Choose Your <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-1",
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 via-background to-accent/10 border-2 border-primary/50 shadow-xl shadow-primary/10"
                  : "bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1 sm:py-1.5 bg-gradient-to-r from-primary to-accent text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6 sm:mb-8">
                <div
                  className={cn(
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-3 sm:mb-4",
                    plan.gradient,
                  )}
                >
                  <plan.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-3 sm:mt-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">/{plan.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                        plan.popular ? "bg-primary/20" : "bg-muted",
                      )}
                    >
                      <Check className={cn("w-3 h-3", plan.popular ? "text-primary" : "text-muted-foreground")} />
                    </div>
                    <span className="text-sm sm:text-base text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Button
                className={cn(
                  "w-full h-11 sm:h-12 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300",
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                    : "hover:bg-muted",
                )}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
