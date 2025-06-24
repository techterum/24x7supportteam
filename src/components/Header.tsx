
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  const handleCall = () => {
    window.location.href = "tel:(+1)-877 (419)-2930";
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
      <img
                src="https://newsroom.aboutrobinhood.com/wp-content/uploads/sites/2/2022/07/Logo-Nov-8-2021.png"Add commentMore actions
                alt="Robinhood"
                className="h-8 w-8"
              />
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Invest</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Learn</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Snacks</a>
              <a href="#" className="text-green-600 hover:text-green-700 transition-colors font-medium">Support</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-500 hover:text-gray-900">
                Log In
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Sign Up
              </Button>
            </div>
            {/* Mobile button */}
            <div className="md:hidden">
              <Button 
                onClick={handleCall}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-2"
              >
                <Phone className="mr-1 h-4 w-4" />
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
