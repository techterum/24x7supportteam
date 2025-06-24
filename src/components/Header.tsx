
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
      <a aria-label="Robinhood Logo" href="/" style="display: inline-block;">
  <svg id="Layer_1" viewBox="0 0 781.7 149.53" width="136px" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        .cls-1 {
          fill: #FFF;
          stroke-width: 0px;
        }
      </style>
    </defs>
    
    <!-- SVG Path Data -->
    <path class="cls-1" d="m275.4,52.23c-20.4,0-32.9,13.2-32.9,36.4s12.5,36.3,32.9,36.3,32.8-13.2,32.8-36.3-12.2-36.4-32.8-36.4Zm0,62.1c-12.9,0-18.1-10.6-18.1-25.6.1-15.2,5.2-25.7,18.1-25.7s18.1,10.5,18.1,25.6-5.2,25.7-18.1,25.7Z"/>
    <path class="cls-1" d="m462.3,52.23c-10.1,0-16,4.6-20.4,10.5-.6.7-1.1,1.4-2.1,1.4s-1.8-.7-1.8-2.1v-8.4h-13.2v70h14v-38.6c0-12.5,6.7-21.4,17.2-21.4,9.9,0,14.8,5.7,14.8,18.1v41.9h14v-45.6c0-16.1-7.3-25.8-22.5-25.8Z"/>
    <path class="cls-1" d="m537.1,52.23c-9.4,0-15.5,4.2-19.6,9.5-.6.7-1.1,1.4-2.1,1.4s-1.8-.7-1.8-2.1V23.43h-14v100.2h14v-38.6c0-12.5,6.7-21.4,17.2-21.4,9.9,0,14.8,5.7,14.8,18.1v41.9h14v-45.6c0-16.1-7.3-25.8-22.5-25.8Z"/>
    <path class="cls-1" d="m603.3,52.23c-20.4,0-32.9,13.2-32.9,36.4s12.5,36.3,32.9,36.3,32.8-13.2,32.8-36.3c-.1-23.2-12.2-36.4-32.8-36.4Zm0,62.1c-12.9,0-18.1-10.6-18.1-25.6s5.2-25.6,18.1-25.6s18.1,10.5,18.1,25.6c-.1,14.9-5.2,25.6-18.1,25.6Z"/>
    <path class="cls-1" d="m676.7,52.23c-20.4,0-32.9,13.2-32.9,36.4s12.5,36.3,32.9,36.3,32.8-13.2,32.8-36.3-12.2-36.4-32.8-36.4Zm0,62.1c-12.9,0-18.1-10.6-18.1-25.6s5.2-25.6,18.1-25.6s18.1,10.5,18.1,25.6-5.2,25.6-18.1,25.6Z"/>
    <rect class="cls-1" height="70" width="14" x="395.6" y="53.63"/>
    <rect class="cls-1" height="16" width="15" x="395" y="23.43"/>
    <path class="cls-1" d="m767.7,23.43v35.8c0,1.4-.8,2.1-1.8,2.1-.7,0-1.7-.7-2.1-1.1-5-5.3-10.4-8-18.9-8-15.1,0-27.4,11.6-27.4,36.4s12.3,36.3,27.4,36.3c8.8,0,14.3-3.4,19.6-8.7.8-.8,1.4-1.3,2.1-1.3,1,0,1.8.7,1.8,2.1v6.6h13.3V23.43h-14Zm-17.5,90.8c-12.9.1-18.1-10.6-18.1-25.6s5.2-25.6,18.1-25.6s18.1,10.5,18.1,25.6-5,25.6-18.1,25.6Z"/>
    <path class="cls-1" d="m356.6,52.23c-8.5,0-13.9,2.7-18.9,8-.4.4-1.4,1.1-2.1,1.1-1,0-1.8-.7-1.8-2.1V23.43h-14v100.2h13.2v-6.6c0-1.4.8-2.1.8-2.1.7,0,1.3.4,2.1,1.3,5.3,5.3,10.8,8.7,19.6,8.7,15.1,0,27.5-11.5,27.5-36.3s-12.3-36.4-27.4-36.4Zm-5.4,62.1c-13,0-18.1-10.6-18.1-25.6s5-25.6,18.1-25.6s18.1,10.5,18.1,25.6c0,14.9-5.2,25.6-18.1,25.6Z"/>
    <path class="cls-1" d="m220.5,79.03c-1.1-.4-1.5-1.1-1.5-2,0-1,.4-1.4,1.7-2.1,7.6-3.6,12.2-10.8,12.2-20.6,0-17.2-10.8-27.6-32.5-27.6h-37.4v96.9h14.8v-40h23.9c11.3,0,15.1,4.8,15.4,12.6l1.4,27.4h14.6l-1.5-28.4c-.6-9.4-4.3-13.7-11.1-16.2Zm-21.1-6.9h-21.6v-33.6h21.6c11.2,0,18.1,5.5,18.1,16.8s-6.9,16.8-18.1,16.8Z"/>
    <path class="cls-1" d="m73.96,33.73h-30.4c-1.1,0-2.03.44-2.8,1.4l-21.8,27c-3.2,4-4,7.7-4,13v27.6C7.86,122.63,3.36,136.13.06,148.33c-.2.78.1,1.2.8,1.2h3.3c.6,0,1.2-.3,1.4-.8C30.46,85.33,57.56,53.93,74.56,35.13c.7-.8.4-1.4-.6-1.4Z"/>
    <path class="cls-1" d="m74.86,2.63c-2.04.79-4,2.13-4.9,2.9-9,7.7-15,13.8-20.7,19.8-.7.7-.4,1.4.6,1.4h33.7c3.1,0,4.9,1.8,4.9,4.9v38c0,1,.8,1.3,1.4.4l20.3-26.5c3.3-4.3,4.3-5.6,5.2-11.6,1.2-8.8.5-22.3-4.8-27.9-4.7-5-25.9-5.2-35.7-1.4Z"/>
    <path class="cls-1" d="m79.96,41.33c-20.9,23.3-37.2,47.8-52.3,77.3-.38.74.1,1.4,1,1.1l31.2-9.6c3.52-1.08,5.5-2.5,7.2-5.3l13.9-22.9c.3-.6.4-1.3.4-1.8v-38.2c0-1-.7-1.4-1.4-.6Z"/>
  </svg>
</a>
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
