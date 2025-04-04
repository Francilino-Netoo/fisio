import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/base.css';
import './styles/components/navigation.css';
import './styles/components/buttons.css';
import './styles/sections/hero.css';
import './styles/sections/services.css';
import './styles/sections/testimonials.css';
import './styles/sections/contact.css';
import './styles/sections/footer.css';
import './styles/forms.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);