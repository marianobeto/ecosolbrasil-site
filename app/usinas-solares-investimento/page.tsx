import type { Metadata } from 'next';
import InvestmentPage from '../investment-page';

export const metadata: Metadata = {
  title: 'Usinas solares para investimento',
  description: 'Estruturação de projetos de usinas solares para investidores, do estudo de viabilidade à implantação e geração de energia.',
  keywords: ['investir em energia solar', 'usina solar para investimento', 'investimento em usina solar', 'projeto de usina solar', 'consultoria usina solar'],
  alternates: { canonical: '/usinas-solares-investimento' },
  openGraph: {
    title: 'Usinas solares para investimento | EcoSol Brasil Energia',
    description: 'Avalie projetos de geração solar com análise técnica, estudo econômico e visão de longo prazo.',
    url: 'https://ecosolbrasil.com.br/usinas-solares-investimento',
    type: 'website',
  },
};

export default function UsinasSolaresInvestimentoPage() {
  return <InvestmentPage />;
}
