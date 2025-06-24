
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email."
    },
    {
      question: "How do I deposit funds into my account?",
      answer: "You can deposit funds by linking your bank account and initiating a transfer through the app or website. Deposits typically take 1-3 business days to process."
    },
    {
      question: "How long do transfers take?",
      answer: "Standard transfers typically take 1-3 business days. Instant deposits are available for eligible accounts and can be processed immediately up to certain limits."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our support team through phone (1-805-706-6693), email, or live chat. Our phone support is available 24/7, while chat support is available during business hours."
    },
    {
      question: "Is my money insured?",
      answer: "Yes, your account is protected by SIPC insurance up to $500,000, which includes up to $250,000 for cash. Additionally, we work with program banks to provide FDIC insurance for cash deposits."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about your Robinhood account.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 hover:text-green-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Support: 1-805-706-6693
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
