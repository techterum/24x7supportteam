
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://newsroom.aboutrobinhood.com/wp-content/uploads/sites/2/2022/07/Logo-Nov-8-2021.png"
              alt="Robinhood"
              className="h-6 w-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-500">
              © 2025 Robinhood. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Disclosures
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
