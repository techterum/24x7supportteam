
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";

const SupportOptions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get immediate assistance
          </h2>
          <p className="text-lg text-gray-600">
            Our support team is available to help you with any questions or issues you may have.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                24/7 Phone Support
              </h3>
              <p className="text-gray-600 mb-6">
                Call us anytime at 1-805-706-6693 for immediate assistance.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="pt-6">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Live Chat
              </h3>
              <p className="text-gray-600 mb-6">
                Chat with a support representative during business hours.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 1-805-706-6693
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
