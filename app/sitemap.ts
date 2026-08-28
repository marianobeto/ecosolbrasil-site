import type { MetadataRoute } from 'next';

const baseUrl = 'https://ecosolbrasil.com.br';
const routes = ['', '/energia-solar', '/energia-solar-residencial', '/energia-solar-empresarial', '/energia-solar-condominios', '/carregadores-veiculos-eletricos', '/wallbox-residencial', '/carregadores-condominios', '/gerenciamento-de-carga', '/usinas-solares-investimento', '/projetos', '/sobre', '/contato'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: 'monthly', priority: route === '' ? 1 : .75 }));
}
