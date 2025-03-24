"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail } from "lucide-react";

export default function Helpcenter() {
  const faqItems = [
    {
      question: "What are the key differences between each pricing plan?",
      answer:
        "Each plan varies in features, benefits, and pricing. The Free plan offers basic features at no cost, while higher-tier plans provide more advanced features, increased usage limits, and dedicated support.",
    },
    {
      question: "How do I choose the right pricing plan for my business?",
      answer:
        "Consider your business needs, expected usage volume, and required features. Small businesses may start with a basic plan, while enterprises might need advanced features and higher usage limits. You can always upgrade as your needs grow.",
    },
    {
      question: "Can I switch between pricing plans later on?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be available immediately. When downgrading, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Are there any hidden fees or additional charges?",
      answer:
        "No, all costs are clearly listed in our pricing page. The only additional charges would be for exceeding usage limits on your chosen plan, which would be clearly communicated before they occur.",
    },
    {
      question: "Is there a minimum contract period for the paid plans?",
      answer:
        "Monthly plans can be canceled anytime. Annual plans offer a discount but require a 12-month commitment. Enterprise plans may have custom contract terms based on your specific needs.",
    },
    {
      question: "Can I try out the paid plans before committing?",
      answer:
        "Yes, we offer a 14-day free trial on all paid plans. This allows you to test all features without any commitment. No credit card is required for the trial period.",
    },
  ];

  return (
    <div className="min-h-screen bg-white ">
      <div className="lg:col-span-2 space-y-8">
        {/* FAQ Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-4 b">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className=" rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 data-[state=open]:bg-gray-50">
                  <span className="text-left font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Technical Support Section */}
        <div>
          <Card className=" bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                If you have some additional question, please contact our Help
                Center
              </p>
              <Button className="bg-orange hover:bg-orange text-white rounded-3xl">
                Email <Mail className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
