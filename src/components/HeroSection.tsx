
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          We're here to help
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Get the support you need with your Robinhood account
        </p>
        <Button 
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call (+1)-877 (419)-2930
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
