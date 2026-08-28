import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ecosolbrasilenergia.com.br'),
  title: {
    default: 'EcoSol Brasil Energia | Energia solar e mobilidade elétrica',
    template: '%s | EcoSol Brasil Energia',
  },
  description: 'Soluções em energia solar fotovoltaica, carregadores para veículos elétricos e gerenciamento de carga em todo o Brasil.',
  keywords: ['energia solar Brasil', 'instalação de energia solar', 'wallbox Brasil', 'carregadores para condomínios', 'investir em energia solar', 'usina solar para investimento', 'projeto de usina solar'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'EcoSol Brasil Energia | Energia inteligente para o seu futuro',
    description: 'Projetos de energia solar, infraestrutura elétrica e mobilidade elétrica para residências, empresas e condomínios.',
    url: 'https://www.ecosolbrasilenergia.com.br',
    siteName: 'EcoSol Brasil Energia',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoSol Brasil Energia',
    description: 'Energia solar e mobilidade elétrica em todo o Brasil.',
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '64x64' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
