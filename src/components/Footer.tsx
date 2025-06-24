
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="https://play-lh.googleusercontent.com/gdh_yiRr-u_xS1o76iOBpDp5-6l_qnvAAmD_Ft3KUFPSYdYZNEQT-rmPcFV2YaPSEhE"
              alt="Robinhood"
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
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
