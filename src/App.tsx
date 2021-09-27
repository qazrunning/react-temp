import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import RouteConfig from '@/routes';//路由配置
function App() {
  return (
    <HelmetProvider>
      <RouteConfig></RouteConfig>
    </HelmetProvider>
  );
}

export default App;
