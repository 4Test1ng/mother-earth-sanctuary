import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl, title = "Our Story" }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-background border-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        
        <div className="relative bg-gradient-to-br from-teal/20 to-accent/20 aspect-video">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-foreground rounded-full"
          >
            <X className="h-4 w-4" />
          </Button>

          {videoUrl ? (
            /* Actual Video */
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              src={videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            /* Placeholder */
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
              <div className="mb-6">
                <div className="w-20 h-20 bg-teal/20 rounded-full flex items-center justify-center mb-4">
                  <Play className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {title}
                </h3>
                <p className="font-body text-muted-foreground max-w-md">
                  Video content will be available once connected to backend. This is where your 
                  sanctuary story, testimonials, or healing journey videos will be displayed.
                </p>
              </div>
              
              <div className="bg-card/80 p-6 rounded-lg max-w-md">
                <h4 className="font-heading font-semibold text-foreground mb-3">Coming Soon:</h4>
                <ul className="font-body text-sm text-muted-foreground text-left space-y-2">
                  <li>• Sanctuary tour and facilities</li>
                  <li>• Healing testimonials from clients</li>
                  <li>• Yves Urbain's wellness philosophy</li>
                  <li>• Meditation and breathing exercises</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;