import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Layouts from '@/components/layout'
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layouts></Layouts>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
