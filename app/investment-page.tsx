'use client';

import { FormEvent, useState } from 'react';

const whatsappNumber = '5571992877538';
const investmentMessage = 'Olá! Conheci a solução de usinas solares para investimento da EcoSol Brasil e gostaria de entender a viabilidade de um projeto.';

function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function ArrowIcon() {
  return <span className="arrow-icon" aria-hidden="true">↗</span>;
}

function InvestmentButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <button className={`button button-primary ${className}`} type="button" onClick={() => window.open(whatsappUrl(investmentMessage), '_blank', 'noopener,noreferrer')}>{children}<ArrowIcon /></button>;
}

const faqs = [
  ['O que é uma usina solar para investimento?', 'É uma infraestrutura de geração de energia estruturada a partir de estudos técnicos e econômicos, com potencial de se tornar um ativo de longo prazo.'],
  ['Como uma usina solar pode gerar receita?', 'A energia produzida pode integrar modelos comerciais permitidos pela regulamentação aplicável. A viabilidade depende das características técnicas, financeiras, comerciais e regulatórias de cada projeto.'],
  ['Qual o valor mínimo necessário para iniciar um projeto?', 'Não existe um valor único. O porte da usina, a área, a conexão e o modelo comercial definem o investimento necessário.'],
  ['Quanto uma usina solar pode render?', 'A receita é estimada caso a caso, considerando geração, tarifas, custos, contratos e condições do projeto.'],
  ['Em quanto tempo o investimento pode retornar?', 'O payback é projetado no estudo de viabilidade e pode variar conforme implantação, operação, financiamento e modelo comercial.'],
  ['Preciso ter um terreno?', 'Não necessariamente. Se você já possui uma área, a EcoSol pode analisar preliminarmente o potencial do local.'],
  ['A EcoSol encontra locais para implantação?', 'Podemos orientar a análise inicial de áreas e dos requisitos técnicos, sempre condicionada à viabilidade do projeto.'],
  ['Quem pode investir em uma usina solar?', 'Empresários, investidores, produtores rurais, proprietários de terrenos e grupos que buscam projetos de infraestrutura energética.'],
  ['Quais são os custos de operação?', 'Manutenção, monitoramento, seguros, conexão e outros custos são levantados e considerados na modelagem econômica.'],
  ['Como acompanho a produção da usina?', 'O projeto pode prever monitoramento da geração e indicadores de desempenho adequados à operação.'],
  ['A receita é garantida?', 'Não. Como qualquer empreendimento, os resultados dependem das características técnicas, financeiras, comerciais e regulatórias de cada projeto. Por isso a EcoSol realiza um estudo de viabilidade antes da implantação.'],
  ['Existe risco no investimento?', 'Todo projeto possui riscos e variáveis. A análise técnica e econômica ajuda a identificar premissas, cenários, custos e pontos de atenção antes da decisão.'],
];

const processSteps = [
  ['01', 'Análise da oportunidade', 'Entendemos o objetivo do investidor, capital disponível e características do projeto.'],
  ['02', 'Estudo de viabilidade', 'Analisamos localização, potencial de geração, custos e condições técnicas.'],
  ['03', 'Modelagem econômica', 'Construímos cenários de investimento, geração, despesas e receita estimada.'],
  ['04', 'Engenharia', 'Desenvolvemos o dimensionamento e projeto técnico da usina.'],
  ['05', 'Implantação', 'Coordenamos o fornecimento e instalação da infraestrutura necessária.'],
  ['06', 'Geração', 'A usina entra em operação e começa a produzir energia.'],
  ['07', 'Acompanhamento', 'A geração pode ser monitorada para acompanhar o desempenho do ativo.'],
];

const benefits = [
  ['ATIVO FÍSICO', 'O investimento está associado a uma infraestrutura real de geração de energia.'],
  ['GERAÇÃO DE LONGO PRAZO', 'Sistemas fotovoltaicos são projetados para operar durante muitos anos.'],
  ['DEMANDA POR ENERGIA', 'A energia elétrica permanece um recurso essencial para residências e empresas.'],
  ['PREVISIBILIDADE', 'Um estudo adequado permite construir projeções de geração, custos e receitas.'],
  ['ESCALABILIDADE', 'Projetos podem ser estruturados em diferentes portes de acordo com capital, terreno e oportunidade.'],
  ['SUSTENTABILIDADE', 'O investimento está associado à produção de energia renovável.'],
];

export default function InvestmentPage() {
  const [openFaq, setOpenFaq] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      investmentMessage,
      `Nome: ${data.get('nome') || ''}`,
      `WhatsApp: ${data.get('whatsapp') || ''}`,
      `E-mail: ${data.get('email') || ''}`,
      `Cidade / Estado: ${data.get('cidade') || ''}`,
      `Quanto pretende investir: ${data.get('capital') || ''}`,
      `Possui terreno: ${data.get('terreno') || ''}`,
      `Objetivo: ${data.get('objetivo') || ''}`,
      `Mensagem: ${data.get('mensagem') || ''}`,
    ].join('\n');
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="investment-page">
      <header className="internal-header investment-header"><div className="container internal-header-inner"><a className="internal-logo" href="/#inicio"><img src="assets/ecosol-logo-horizontal.png" alt="EcoSol Brasil" /></a><nav><a href="/">Início</a><a href="/#solucoes">Energia solar</a><a href="/usinas-solares-investimento" aria-current="page">Investimento Solar</a><a href="/#mobilidade">Carregadores</a><a href="/#contato">Contato</a></nav><a className="internal-header-cta" href="#solicitar-estudo">Solicitar estudo ↗</a></div></header>

      <section className="investment-product-hero"><div className="investment-hero-glow" /><div className="container investment-hero-grid"><div className="investment-hero-copy"><a className="back-link" href="/">← voltar para a Home</a><p className="eyebrow eyebrow-bright">USINAS SOLARES PARA INVESTIMENTO</p><h1>Energia que <em>trabalha</em> para você.</h1><p>A EcoSol Brasil Energia estrutura projetos solares desde o estudo de viabilidade até a implantação da usina, permitindo avaliar oportunidades de geração de receita através da energia produzida.</p><div className="hero-actions"><InvestmentButton>Solicitar análise de investimento</InvestmentButton><a className="button button-ghost" href="#como-funciona-investimento">Entender como funciona <ArrowIcon /></a></div><small className="investment-disclaimer">Cenários e resultados dependem das características de cada projeto.</small></div><div className="investment-hero-image"><img src="assets/usinas-solares-investimento.png" alt="Usina solar de grande porte ao pôr do sol com indicadores de geração e receita projetada" /></div></div></section>

      <section className="section investment-model"><div className="container investment-model-grid"><div><p className="eyebrow">UM ATIVO DE INFRAESTRUTURA REAL</p><h2>Como uma usina solar pode <em>gerar receita?</em></h2><p>Uma usina solar é um ativo de geração de energia. A partir de um projeto tecnicamente e economicamente viável, a energia produzida pode integrar modelos comerciais permitidos pela regulamentação aplicável, criando potencial de geração de receita ao longo da operação do empreendimento.</p><p>A EcoSol Brasil auxilia o investidor a analisar a oportunidade antes da implantação.</p></div><div className="investment-flow" aria-label="Fluxo de uma usina solar para investimento"><div><b>01</b><strong>Capital</strong></div><span>↓</span><div><b>02</b><strong>Usina solar</strong></div><span>↓</span><div><b>03</b><strong>Geração de energia</strong></div><span>↓</span><div><b>04</b><strong>Modelo comercial</strong></div><span>↓</span><div className="investment-flow-final"><b>05</b><strong>Receita</strong></div></div></div></section>

      <section className="section investment-benefits"><div className="container"><div className="investment-section-heading"><p className="eyebrow">ECONOMIA REAL</p><h2>Um investimento ligado à <em>economia real.</em></h2><p>Projetos estruturados com clareza para que cada decisão considere o ativo, a operação e o horizonte de longo prazo.</p></div><div className="investment-benefits-grid">{benefits.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="como-funciona-investimento" className="section investment-analysis"><div className="container investment-analysis-grid"><div><p className="eyebrow eyebrow-bright">ANÁLISE ANTES DA DECISÃO</p><h2>Veja como analisamos uma <em>oportunidade.</em></h2><p>Cada projeto possui características próprias. Nossa equipe desenvolve um estudo individual de viabilidade técnica e econômica.</p><InvestmentButton>Solicitar meu estudo</InvestmentButton></div><div className="investment-metrics"><p>PAINEL DE VIABILIDADE</p>{['Capital disponível', 'Potência da usina', 'Localização', 'Irradiação solar', 'Custo de implantação', 'Produção estimada', 'Custos operacionais', 'Modelo comercial', 'Receita estimada', 'Payback projetado', 'ROI projetado'].map((label) => <div key={label}><span>{label}</span><strong>Sob análise</strong></div>)}</div></div></section>

      <section className="section investment-process"><div className="container"><div className="investment-section-heading"><p className="eyebrow">DO INVESTIMENTO À GERAÇÃO</p><h2>Um caminho claro para <em>estruturar o projeto.</em></h2></div><div className="investment-process-grid">{processSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="section investment-viability"><div className="container investment-viability-grid"><div><p className="eyebrow">ESTUDO DE VIABILIDADE</p><h2>Antes de investir, os números precisam <em>fazer sentido.</em></h2><p>Não começamos pelo equipamento. Começamos pela viabilidade. A EcoSol Brasil analisa os principais fatores técnicos e econômicos do projeto antes da decisão de implantação.</p></div><div className="viability-card"><span>ECOSOL / ESTUDO INICIAL</span><strong>Projeto sob análise</strong><div><i /><i /><i /><i /><i /></div><small>Geração, custos e receita serão projetados conforme os dados reais da oportunidade.</small></div></div></section>

      <section className="section investment-profile"><div className="container"><div className="investment-section-heading"><p className="eyebrow">PERFIL DO CLIENTE</p><h2>Para quem esse modelo pode <em>fazer sentido?</em></h2></div><div className="investment-profile-grid">{['Investidores', 'Empresários', 'Proprietários de terrenos', 'Produtores rurais', 'Empresas com capital para novos projetos', 'Grupos de investidores', 'Proprietários de imóveis ou áreas com potencial energético'].map((label, index) => <div key={label}><span>0{index + 1}</span><strong>{label}</strong></div>)}</div></div></section>

      <section className="investment-land"><div className="container investment-land-inner"><div><p className="eyebrow eyebrow-bright">TERRA E LOCALIZAÇÃO</p><h2>Já possui uma área para implantação?</h2><p>Se você já possui terreno ou área disponível, a EcoSol pode analisar preliminarmente o potencial do local para implantação de uma usina.</p></div><a className="button button-primary" href="#solicitar-estudo">Quero analisar meu terreno <ArrowIcon /></a></div></section>

      <section className="section investment-differential"><div className="container investment-differential-grid"><div><p className="eyebrow">O DIFERENCIAL ECOSOL</p><h2>Não vendemos apenas equipamentos. <em>Estruturamos projetos.</em></h2></div><div className="investment-differential-list"><span>Análise técnica</span><span>Estudo econômico</span><span>Dimensionamento</span><span>Engenharia</span><span>Implantação</span><span>Monitoramento</span><span>Visão de longo prazo</span></div></div></section>

      <section className="section investment-faq"><div className="container investment-faq-grid"><div><p className="eyebrow">DÚVIDAS SOBRE O MODELO</p><h2>Clareza para decidir <em>com responsabilidade.</em></h2><p>Uma conversa inicial ajuda a entender se existe uma oportunidade coerente com seus objetivos e recursos.</p><InvestmentButton>Falar com um especialista</InvestmentButton></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

      <section className="investment-final-cta"><div className="container"><p className="eyebrow eyebrow-bright">PRÓXIMO PASSO</p><h2>Quer descobrir se uma usina solar <em>faz sentido para você?</em></h2><p>Conte para nossa equipe quanto pretende investir ou apresente a área que possui. Vamos avaliar inicialmente a oportunidade e os próximos passos.</p><InvestmentButton>Falar com um especialista</InvestmentButton></div></section>

      <section id="solicitar-estudo" className="section investment-lead"><div className="container investment-lead-grid"><div><p className="eyebrow">SOLICITE UMA ANÁLISE</p><h2>Seu projeto começa com <em>dados reais.</em></h2><p>Envie algumas informações iniciais. Nossa equipe retorna pelo WhatsApp para entender a oportunidade.</p></div><form className="investment-form" onSubmit={handleSubmit}><div className="form-row"><label>Nome<input required name="nome" type="text" placeholder="Como podemos chamar você?" /></label><label>WhatsApp<input required name="whatsapp" type="tel" placeholder="(00) 00000-0000" /></label></div><div className="form-row"><label>E-mail<input required name="email" type="email" placeholder="seu@email.com" /></label><label>Cidade / Estado<input name="cidade" type="text" placeholder="Ex.: Salvador - BA" /></label></div><label>Quanto pretende investir?<select required name="capital" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Até R$ 50 mil</option><option>R$ 50 mil a R$ 100 mil</option><option>R$ 100 mil a R$ 250 mil</option><option>R$ 250 mil a R$ 500 mil</option><option>R$ 500 mil a R$ 1 milhão</option><option>Acima de R$ 1 milhão</option><option>Ainda não defini</option></select></label><div className="form-row"><label>Possui terreno?<select required name="terreno" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Sim</option><option>Não</option><option>Quero orientação</option></select></label><label>Objetivo<select required name="objetivo" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Renda através de geração de energia</option><option>Diversificação de investimentos</option><option>Aproveitamento de terreno</option><option>Projeto empresarial</option><option>Outro</option></select></label></div><label>Mensagem<textarea name="mensagem" rows={4} placeholder="Conte brevemente sobre o projeto (opcional)" /></label><button className="button button-dark form-submit" type="submit">Solicitar estudo <ArrowIcon /></button><p className="form-privacy">Os resultados dependem das características de cada projeto.</p></form></div></section>

      <footer className="internal-footer investment-footer"><div className="container"><a href="/"><img src="assets/ecosol-logo-horizontal-white.png" alt="EcoSol Brasil" /></a><span>EcoSol Brasil Energia — Projetos de energia para um futuro sustentável.</span><a href="/#contato">Contato ↗</a></div></footer>
    </main>
  );
}
