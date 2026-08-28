import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../app/page';
import InvestmentPage from '../app/investment-page';
import '../app/globals.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Elemento #root não encontrado.');
}

const normalizedPathname = window.location.pathname.toLowerCase().replace(/\/+$/, '');
const isInvestmentPage = normalizedPathname.endsWith('/usinas-solares-investimento');

createRoot(root).render(
  <StrictMode>
    {isInvestmentPage ? <InvestmentPage /> : <Home />}
  </StrictMode>,
);
