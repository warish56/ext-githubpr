import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AppTheme } from './services/theme.ts';
import { ThemeProvider } from '@mui/material/styles';


const root = document.createElement('div');
root.id = "app_root";
document.body.appendChild(root);

createRoot(root).render(
  <StrictMode>
    <ThemeProvider theme={AppTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
