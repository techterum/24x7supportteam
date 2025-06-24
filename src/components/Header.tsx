
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Robinhood</h1>
            </div>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Invest</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Learn</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Snacks</a>
              <a href="#" className="text-green-600 hover:text-green-700 transition-colors font-medium">Support</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-500 hover:text-gray-900">
              Log In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
