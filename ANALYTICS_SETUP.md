# Google Analytics Setup Guide

## 🚀 Quick Setup

### 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics Console](https://analytics.google.com/)
2. Sign in with your Google account
3. Create a new property or select an existing one
4. Go to **Admin** → **Data Streams** → **Web**
5. Copy the **Measurement ID** (starts with "G-")

### 2. Update Configuration Files

Replace `G-XXXXXXXXXX` with your actual Measurement ID in these files:

- `index.html` (line with gtag script)
- `src/config/analytics.ts` (GA_MEASUREMENT_ID)

### 3. Deploy and Test

- Build and deploy your website
- Check Google Analytics Real-Time reports to confirm tracking is working

## 📊 What's Tracked Automatically

- **Page Views**: Every route change in your React app
- **User Sessions**: Start/end of user visits
- **Traffic Sources**: How users find your site
- **Device Information**: Browser, OS, device type
- **Geographic Data**: User locations (country/city level)

## 🎯 Custom Event Tracking

### Button Clicks

```typescript
import { trackButtonClick } from './components/GoogleAnalytics';

// Track button clicks
<button onClick={() => trackButtonClick('hero_cta_button')}>
  Get Started
</button>
```

### Form Submissions

```typescript
import { trackFormSubmission } from './components/GoogleAnalytics';

// Track form submissions
<form onSubmit={() => trackFormSubmission('contact_form')}>
  {/* form content */}
</form>
```

### Downloads

```typescript
import { trackDownload } from './components/GoogleAnalytics';

// Track file downloads
<a onClick={() => trackDownload('resume', 'pdf')} href="/resume.pdf">
  Download Resume
</a>
```

### Custom Events

```typescript
import { trackEvent } from "./components/GoogleAnalytics";

// Track any custom event
trackEvent("video_play", "media", "hero_video", 1);
```

## ⚙️ Configuration Options

### Enable/Disable Analytics

```typescript
// In src/config/analytics.ts
export const ANALYTICS_CONFIG = {
  ENABLED: true, // Set to false to disable
  DEBUG: false, // Set to true for development
  // ... other config
};
```

### Custom Dimensions

```typescript
// Track user types or page sections
gtag("config", GA_MEASUREMENT_ID, {
  custom_map: {
    custom_dimension1: "user_type",
    custom_dimension2: "page_section",
  },
});
```

## 🔍 Debugging

### Enable Debug Mode

```typescript
// In src/config/analytics.ts
DEBUG: true;
```

### Check Console Logs

When debug mode is enabled, you'll see:

```
Google Analytics: Page view tracked: /playground
```

### Browser Extensions

- **Google Analytics Debugger** (Chrome)
- **Tag Assistant** (Chrome)

## 📱 Testing

### Local Development

- Analytics are disabled in development by default
- Set `DEBUG: true` to test locally
- Check browser console for tracking logs

### Production

- Analytics are automatically enabled
- Verify tracking in Google Analytics Real-Time reports
- Check for data in standard reports (24-48 hour delay)

## 🚨 Common Issues

### 1. No Data in Google Analytics

- Verify Measurement ID is correct
- Check if ad blockers are active
- Ensure website is deployed and accessible

### 2. Duplicate Page Views

- Check if React Router is configured correctly
- Verify GoogleAnalytics component is only mounted once

### 3. Events Not Tracking

- Check browser console for errors
- Verify gtag function is available
- Ensure analytics are enabled

## 📈 Advanced Features

### Enhanced Ecommerce

```typescript
// Track product views, add to cart, purchases
gtag("event", "view_item", {
  currency: "USD",
  value: 29.99,
  items: [
    {
      item_id: "SKU_12345",
      item_name: "Product Name",
      price: 29.99,
      quantity: 1,
    },
  ],
});
```

### User Properties

```typescript
// Set user properties for segmentation
gtag("config", GA_MEASUREMENT_ID, {
  user_properties: {
    user_type: "premium",
    subscription_level: "pro",
  },
});
```

## 🔒 Privacy & Compliance

### GDPR Compliance

- Consider implementing cookie consent
- Anonymize IP addresses if needed
- Provide opt-out mechanisms

### Data Retention

- Set appropriate data retention periods in GA4
- Review and clean up old data regularly

## 📚 Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Events Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [React Router Analytics](https://reactrouter.com/docs/en/v6/start/overview)

## 🆘 Support

If you encounter issues:

1. Check browser console for errors
2. Verify Measurement ID is correct
3. Test with Google Analytics Debugger extension
4. Check Google Analytics Real-Time reports
