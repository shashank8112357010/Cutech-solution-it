
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/PrivateRoutes'; 

hydrate(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('app')
);