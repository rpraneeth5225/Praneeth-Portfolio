import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './components/Home';
import { Playground } from './components/Playground';
import { PlaygroundButton } from './components/PlaygroundButton';
import { Loader } from './components/Loader';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import GoogleAnalytics from './components/GoogleAnalytics';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      <AnimatePresence>
        {!isLoading && (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playground" element={<Playground />} />
            </Routes>
            <PlaygroundButton />
            <Analytics />
            <SpeedInsights />
            <GoogleAnalytics />
          </>
        )}
      </AnimatePresence>
    </Router>
  );
}