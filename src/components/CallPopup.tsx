
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Phone } from "lucide-react";

interface CallPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallPopup = ({ isOpen, onClose }: CallPopupProps) => {
  const handleCall = () => {
    window.location.href = "tel:(+1)-877 (419)-2930";
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-gray-900">
            Call Support
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Our support team is ready to help you. Click the button below to call us directly.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900">
              (+1)-877 (419)-2930
            </p>
            <p className="text-sm text-gray-500">
              Available 24/7
            </p>
          </div>
          <Button 
            onClick={handleCall}
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallPopup;
