import React, { useState, useEffect, useRef } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Pause, Play, ArrowUp, ArrowDown } from 'lucide-react';

const AutoScroll: React.FC = () => {
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isControlVisible, setIsControlVisible] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    
    const performScroll = () => {
      if (isScrolling && scrollContainerRef.current) {
        const scrollAmount = scrollSpeed / 10;
        scrollContainerRef.current.scrollTop += scrollAmount;
        
        animationFrameId = requestAnimationFrame(performScroll);
      }
    };

    if (isScrolling) {
      animationFrameId = requestAnimationFrame(performScroll);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isScrolling, scrollSpeed]);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  const handleSpeedChange = (value: number[]) => {
    setScrollSpeed(value[0]);
  };

  const toggleControlVisibility = () => {
    setIsControlVisible(!isControlVisible);
  };

  return (
    <div className="relative h-full w-full">
      <div 
        ref={scrollContainerRef} 
        onClick={toggleControlVisibility}
        className="h-screen overflow-y-auto"
      >
        {[...Array(20)].map((_, index) => (
          <div key={index} className="mb-4">
            <img 
              src={`/api/placeholder/800/400?text=Halaman+Komik+${index + 1}`} 
              alt={`Halaman Komik ${index + 1}`} 
              className="w-full mb-2"
            />
            <p>Deskripsi atau teks komik untuk halaman {index + 1}</p>
          </div>
        ))}
      </div>

      {isControlVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost"
              size="icon"
              onClick={toggleScrolling} 
              className="text-gray-700 hover:bg-gray-200"
            >
              {isScrolling ? <Pause /> : <Play />}
            </Button>

            <div className="flex items-center space-x-2">
              <ArrowDown className="text-gray-500" size={20} />
              <Slider
                defaultValue={[0]}
                max={100}
                step={1}
                value={[scrollSpeed]}
                onValueChange={handleSpeedChange}
                className="w-48"
              />
              <ArrowUp className="text-gray-500" size={20} />
            </div>
            
            <span className="text-sm text-gray-700 w-10 text-center">{scrollSpeed}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoScroll;
