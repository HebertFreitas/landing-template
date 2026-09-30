/*
 * SITE: everything that changes from one landing page to the next lives here.
 * Components only read from this file (and theme.css), so screens, actions and
 * animations stay identical across projects.
 * Images go in /public: logo, /gallery/*, /team/*, /app-screens/*.
 * Every value below is a placeholder: replace all of them for a new client.
 */

export const brand = {
  name: 'Lumen',
  kind: 'Estúdio',                   // small word under the logo (the niche)
  fullName: 'Estúdio Lumen',
  logo: '/logo.svg',
  tagline: 'Vem pro Lumen',          // big line at the top of the footer
}

// Used by vite.config.js to fill index.html (title, meta, fonts, preload).
export const seo = {
  title: 'Estúdio Lumen | Cidade, UF',
  description: 'Estúdio Lumen: descrição curta do negócio, do serviço principal e da cidade, em até 160 caracteres.',
  ogTitle: 'Estúdio Lumen | Cidade, UF',
  ogDescription: 'Frase de venda para quando o link for compartilhado no WhatsApp e nas redes.',
  ogImage: '/gallery/foto-03.svg',   // use a real .jpg for social previews
  themeColor: '#111519',             // keep equal to --dark in theme.css
  fontsUrl: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..600;1,6..96,400..500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap',
}

// Turn whole sections on or off. The menu hides the links of disabled sections.
export const sections = {
  intro: true,      // numbers + "como funciona"
  features: true,   // bento of highlights
  team: true,
  pricing: true,
  ambient: true,    // photo mosaic
  reviews: true,
  app: true,        // app section with phones (only makes sense with booking.mode 'app')
  visit: true,      // address, hours and map
}

// What every "Agendar" button does:
//   'app'      opens the modal with the App Store / Google Play buttons (uses `apps`)
//   'whatsapp' opens contact.whatsapp
//   'link'     opens booking.url (e.g. an external booking system)
export const booking = {
  mode: 'app',
  url: '',
}

// Every piece of copy shown on the page, grouped by section.
export const copy = {
  cta: 'Agendar horário',
  ctaShort: 'Agendar agora',
  hero: {
    line1: 'Sua promessa.',
    line2: 'Em duas linhas.',
    text: 'Uma ou duas frases dizendo o que o cliente ganha, por que escolher o Lumen e o que o torna diferente dos outros.',
    link: 'Conheça o Lumen',
    slidesLabel: 'Fotos do espaço',
  },
  intro: {
    first: 'Mais que um serviço.',
    second: 'Uma experiência.',
    text: 'Parágrafo de apresentação: quem somos, onde estamos e o sentimento que o cliente leva ao sair.',
    stepsLabel: 'Como funciona',
  },
  features: { first: 'O que nos torna', second: 'diferentes', action: 'Ver todos os serviços' },
  team: { label: 'Nossa equipe', title: 'Quem cuida de você', photoAlt: 'Profissional da equipe' },
  pricing: { title: 'Valores' },
  ambient: { first: 'Nosso', second: 'espaço' },
  reviews: { label: 'Depoimentos', title: 'O que dizem sobre nós', source: 'no Google' },
  app: {
    first: 'Agende pelo',
    second: 'app Lumen',
    text: 'Seu próximo horário a poucos toques. O app é gratuito para Android e iPhone.',
    screens: ['/app-screens/tela-1.svg', '/app-screens/tela-2.svg'], // rear, front
    modalTitle: 'Baixe o app Lumen',
    modalText: 'Agende seu horário com o profissional que preferir e receba lembretes direto no celular.',
    footerText: 'Baixe o app e agende pelo celular',
  },
  visit: { first: 'Venha nos', second: 'visitar', mapsAction: 'Abrir no Google Maps' },
}

export const contact = {
  phoneLabel: '(00) 00000-0000',
  phoneHref: 'tel:+5500000000000',
  whatsapp: 'https://wa.me/5500000000000?text=Ol%C3%A1!%20Vi%20o%20site%20e%20gostaria%20de%20agendar.',
  instagram: 'https://www.instagram.com/',
  address: ['Rua Exemplo, nº 100', 'Bairro, Cidade — UF', '00000-000'],
  mapsEmbed: 'https://www.google.com/maps?q=Pra%C3%A7a+da+S%C3%A9,+S%C3%A3o+Paulo&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+da+S%C3%A9+S%C3%A3o+Paulo',
}

export const apps = {
  ios: 'https://apps.apple.com/',
  android: 'https://play.google.com/store',
}

export const hours = [
  ['Segunda', 'Fechado'],
  ['Terça a sexta', '09h às 19h'],
  ['Sábado', '08h às 18h'],
  ['Domingo', 'Fechado'],
]

// [anchor id, label, section key]. Items whose section is disabled are hidden.
const navItems = [
  ['inicio', 'Início'],
  ['experiencia', 'Experiência', 'intro'],
  ['equipe', 'Equipe', 'team'],
  ['servicos', 'Valores', 'pricing'],
  ['ambiente', 'Espaço', 'ambient'],
  ['contato', 'Contato', 'visit'],
]
export const nav = navItems.filter(([, , section]) => !section || sections[section])

// width/height are the real pixel sizes, used for the lightbox aspect ratio.
const photo = (n, alt, width, height) => ({ src: `/gallery/foto-${n}.svg`, alt, width, height })

export const photos = {
  space: photo('03', 'Espaço principal', 1282, 1600),
  lounge: photo('01', 'Área de espera', 1600, 1072),
  work: photo('02', 'Profissional em atendimento', 1277, 1600),
  detail: photo('04', 'Detalhe da marca', 1273, 1600),
  bar: photo('05', 'Área de convivência', 1600, 1067),
  relax: photo('06', 'Detalhes da casa', 1277, 1600),
  product: photo('07', 'Produtos', 1279, 1600),
  facade: photo('08', 'Fachada', 1349, 1600),
  extra: photo('09', 'Ambiente', 1600, 1600),
}

export const heroSlides = [photos.space, photos.lounge, photos.facade]

export const stats = [
  { value: 10, suffix: '+', label: 'Anos de experiência' },
  { value: 4.9, decimals: 1, label: 'Nota no Google' },
  { value: 120, label: 'Avaliações no Google' },
]

export const process = [
  ['Agendamento', 'Como o cliente marca o horário e escolhe o serviço.'],
  ['Conversa', 'O primeiro contato para entender o que o cliente precisa.'],
  ['Execução', 'O serviço em si, com as técnicas e produtos que vocês usam.'],
  ['Finalização', 'O toque final que faz o cliente querer voltar.'],
]

// size: 'large' (2×2) or 'wide' (2×1); leave it out for a 1×1 tile.
export const features = [
  { photo: photos.work, tag: 'Serviço', title: 'Diferencial principal', text: 'Uma frase sobre o maior motivo para escolher vocês.', size: 'large' },
  { photo: photos.relax, tag: 'Conforto', title: 'Segundo diferencial', text: 'Uma frase curta sobre o conforto do espaço.' },
  { photo: photos.bar, tag: 'Experiência', title: 'Terceiro diferencial', text: 'Um mimo, uma bebida ou um detalhe da experiência.' },
  { photo: photos.lounge, tag: 'Ambiente', title: 'Quarto diferencial', text: 'O que torna cada visita especial.', size: 'wide' },
]

export const team = [
  { photo: '/team/pessoa-1.svg', name: 'Nome 1', role: 'Especialidade', text: 'Uma frase sobre o estilo deste profissional.' },
  { photo: '/team/pessoa-2.svg', name: 'Nome 2', role: 'Especialidade', text: 'Uma frase sobre o estilo deste profissional.' },
  { photo: '/team/pessoa-3.svg', name: 'Nome 3', role: 'Especialidade', text: 'Uma frase sobre o estilo deste profissional.' },
]

// featured: true highlights one row.
export const prices = [
  { name: 'Serviço 1', time: '30 min', price: 'R$ 00' },
  { name: 'Serviço 2', time: '30 min', price: 'R$ 00' },
  { name: 'Combo', time: '50 min', price: 'R$ 00', featured: true },
  { name: 'Serviço 3', time: '15 min', price: 'R$ 00' },
  { name: 'Serviço 4', time: '15 min', price: 'R$ 00' },
  { name: 'Serviço 5', time: '15 min', price: 'a partir de R$ 00' },
]

// The mosaic layout expects exactly 6 photos.
export const ambient = [photos.space, photos.bar, photos.detail, photos.product, photos.extra, photos.facade]

// Use real reviews (with permission), e.g. copied from Google.
export const reviews = [
  { name: 'Cliente 1', when: '2 meses atrás', text: 'Depoimento real de um cliente, de preferência falando do atendimento e do resultado.' },
  { name: 'Cliente 2', when: '6 meses atrás', text: 'Outro depoimento, de preferência citando um diferencial do negócio.' },
  { name: 'Cliente 3', when: '1 ano atrás', text: 'Um depoimento curto também funciona bem no carrossel.' },
]

export const appPerks = [
  'Escolha o profissional e o horário',
  'Receba lembretes do seu agendamento',
  'Acompanhe seu histórico e as promoções',
]
