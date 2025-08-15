// Google Analytics Configuration
export const ANALYTICS_CONFIG = {
  GA_MEASUREMENT_ID: 'G-WH40WCB6JR',
  
  ENABLED: true,
  
  DEBUG: false,
  
  CUSTOM_DIMENSIONS: {
    USER_TYPE: 'user_type',
    PAGE_SECTION: 'page_section',
  },
  
  EVENT_CATEGORIES: {
    ENGAGEMENT: 'engagement',
    NAVIGATION: 'navigation',
    DOWNLOAD: 'download',
    FORM: 'form',
    BUTTON: 'button',
    SCROLL: 'scroll',
  },
  

  EVENT_ACTIONS: {
    CLICK: 'click',
    VIEW: 'view',
    DOWNLOAD: 'download',
    SUBMIT: 'submit',
    SCROLL: 'scroll',
    HOVER: 'hover',
  },
};

export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

export const shouldEnableAnalytics = () => {
  return ANALYTICS_CONFIG.ENABLED && (isProduction() || ANALYTICS_CONFIG.DEBUG);
};
