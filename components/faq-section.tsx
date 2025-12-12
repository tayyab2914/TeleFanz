"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Is Telefanz free to use?",
    answer:
      "Yes! Telefanz is completely free to download and use. You can watch videos, chat with friends, and create content without paying anything. We offer optional premium plans for creators who want advanced features.",
  },
  {
    question: "How do I earn money on Telefanz?",
    answer:
      "Creators can earn through multiple ways: receiving virtual gifts during live streams, brand partnerships, and our creator fund. Once you reach certain milestones, you can withdraw your earnings directly to your bank account.",
  },
  {
    question: "Is my data safe on Telefanz?",
    answer:
      "Absolutely. We use industry-leading encryption and security measures to protect your data. We never sell your personal information to third parties, and you have full control over your privacy settings.",
  },
  {
    question: "Can I use music in my videos?",
    answer:
      "Yes! We have a vast library of licensed music and sounds that you can use in your videos for free. Premium users get access to an even larger collection of trending tracks.",
  },
  {
    question: "How do I become a verified creator?",
    answer:
      "Verified badges are available for Creator and Pro subscribers. You'll also need to meet our community guidelines and have an established presence on the platform. Apply through your account settings.",
  },
  {
    question: "What devices is Telefanz available on?",
    answer:
      "Telefanz is available on iOS (iPhone and iPad) and Android devices. You can download it for free from the App Store or Google Play Store.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#1a0a2e_0%,_#0d0015_100%)]" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-white/50 mt-6 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, reach out to our
            support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 data-[state=open]:border-purple-500/40 transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-base sm:text-lg font-medium [&[data-state=open]]:text-purple-300 hover:text-purple-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
