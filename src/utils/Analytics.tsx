import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { SEO_OPTIONS } from './config';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(SEO_OPTIONS.GOOGLE_ANALYTICS_ID);
  }, []);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default Analytics;
