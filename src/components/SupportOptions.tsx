
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const SupportOptions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get immediate assistance
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is available to help you with any questions or issues you may have.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Phone Support
                </h3>
                <p className="text-gray-600 mb-3">
                  Call us anytime at (+1)-877 (419)-2930 for immediate assistance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 mb-3">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-6">
                  Chat with a support representative during business hours.
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (+1)-877 (419)-2930
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Customer support representative"
                className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
              />
              <div className="absolute inset-0 bg-green-600 bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
