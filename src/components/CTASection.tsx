
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-green-600 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to get help?
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Our support team is available 24/7 to assist you with any questions or issues.
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call 1-805-706-6693
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
