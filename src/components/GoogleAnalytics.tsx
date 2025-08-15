import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ANALYTICS_CONFIG, shouldEnableAnalytics } from '../config/analytics';

// Initialize Google Analytics
export const initGA = () => {
  if (!shouldEnableAnalytics()) return;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      debug_mode: ANALYTICS_CONFIG.DEBUG,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (!shouldEnableAnalytics()) return;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!shouldEnableAnalytics()) return;
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent(
    ANALYTICS_CONFIG.EVENT_ACTIONS.CLICK,
    ANALYTICS_CONFIG.EVENT_CATEGORIES.BUTTON,
    buttonName
  );
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent(
    ANALYTICS_CONFIG.EVENT_ACTIONS.SUBMIT,
    ANALYTICS_CONFIG.EVENT_CATEGORIES.FORM,
    formName
  );
};

// Track downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent(
    ANALYTICS_CONFIG.EVENT_ACTIONS.DOWNLOAD,
    ANALYTICS_CONFIG.EVENT_CATEGORIES.DOWNLOAD,
    `${fileName}.${fileType}`
  );
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent(
    ANALYTICS_CONFIG.EVENT_ACTIONS.SCROLL,
    ANALYTICS_CONFIG.EVENT_CATEGORIES.SCROLL,
    `scroll_depth_${depth}%`,
    depth
  );
};

// Main Google Analytics component
export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!shouldEnableAnalytics()) return;
    
    // Track page views when route changes
    trackPageView(location.pathname);
    
    if (ANALYTICS_CONFIG.DEBUG) {
      console.log('Google Analytics: Page view tracked:', location.pathname);
    }
  }, [location]);

  // Don't render anything if analytics is disabled
  if (!shouldEnableAnalytics()) {
    return null;
  }

  return null; // This component doesn't render anything
};

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

export default GoogleAnalytics;
