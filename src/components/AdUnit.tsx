import React from 'react';

interface AdUnitProps {
  className?: string;
  slot?: string;
  isLandingPage?: boolean;
  isQuizAd?: boolean;
}

export default function AdUnit({ className = '', slot = '', isLandingPage = false, isQuizAd = false }: AdUnitProps) {
  const adRef = React.useRef<HTMLDivElement>(null);
  const isInitializedRef = React.useRef(false);
  const resizeObserverRef = React.useRef<ResizeObserver | null>(null);

  React.useEffect(() => {
    // Function to check if the container has width
    const hasWidth = () => {
      return adRef.current && adRef.current.offsetWidth > 0;
    };

    // Function to initialize the ad
    const initializeAd = () => {
      if (!isInitializedRef.current && adRef.current && hasWidth()) {
        try {
          // Initialize adsbygoogle if it hasn't been initialized yet
          if (!window.adsbygoogle) {
            window.adsbygoogle = [];
          }

          // Only push new ads if the element hasn't been initialized
          if (adRef.current.firstChild === null) {
            const adElement = document.createElement('ins');
            adElement.className = 'adsbygoogle';
            adElement.style.display = 'block';
            adElement.style.width = '100%';
            adElement.style.height = '100%';
            adElement.setAttribute('data-ad-client', 'ca-pub-7371589468101799');
            
            // Set the appropriate ad slot based on the type
            if (isLandingPage) {
              adElement.setAttribute('data-ad-slot', '9864665158');
            } else if (isQuizAd) {
              adElement.setAttribute('data-ad-slot', '2330059566');
            } else {
              adElement.setAttribute('data-ad-slot', slot);
            }
            
            adElement.setAttribute('data-ad-format', 'auto');
            adElement.setAttribute('data-full-width-responsive', 'true');
            
            // Clear any existing content and append the new ad
            adRef.current.innerHTML = '';
            adRef.current.appendChild(adElement);
            
            // Push the ad
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isInitializedRef.current = true;
          }
        } catch (err) {
          console.error('Error initializing ad:', err);
        }
      }
    };

    // Create ResizeObserver to monitor container size changes
    resizeObserverRef.current = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && !isInitializedRef.current) {
          initializeAd();
        }
      }
    });

    if (adRef.current) {
      resizeObserverRef.current.observe(adRef.current);
      
      // Also try to initialize immediately if the container already has width
      if (hasWidth()) {
        initializeAd();
      }
    }

    // Cleanup function
    return () => {
      if (resizeObserverRef.current && adRef.current) {
        resizeObserverRef.current.unobserve(adRef.current);
        resizeObserverRef.current.disconnect();
      }
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
      isInitializedRef.current = false;
    };
  }, [slot, isLandingPage, isQuizAd]); // Include isQuizAd in dependencies

  return (
    <div 
      ref={adRef} 
      className={`ad-container ${className}`}
      style={{ minWidth: '160px', minHeight: '90px' }} // Ensure minimum dimensions
    />
  );
}