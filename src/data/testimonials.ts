export interface Testimonial {
  text: string;
  author: string;
  source: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    text: 'Atendimento profissional, ambiente acolhedor e cortes sempre impecáveis.',
    author: 'Clinica Florescer',
    source: 'Google',
    initials: 'C',
  },
  {
    text: 'Atendimento excepcional, boa conversa, ótima estrutura!',
    author: 'Lucas Pagani',
    source: 'Google',
    initials: 'L',
  },
  {
    text: 'Barbearia top, climatizada, tratamento vip.',
    author: 'Alaur de Paula',
    source: 'Google',
    initials: 'A',
  },
];

export const rating = {
  value: '4.8',
  count: '114',
  stars: 5,
};
