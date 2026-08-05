import { BUSINESS } from './site';

export interface ServiceSection {
  h2: string;
  paragraphs: string[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  offer: string;
  icon: string;
  benefits: string[];
  idealFor: string[];
  sections: ServiceSection[];
  faq: ServiceFaq[];
  whatsappKey: string;
  related: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'protese-capilar-presidente-epitacio',
    title: 'Prótese Capilar em Presidente Epitácio',
    h1: 'Prótese Capilar em Presidente Epitácio',
    description:
      'Prótese capilar masculina em Presidente Epitácio com resultado natural, aplicação personalizada e manutenção especializada. Agende sua avaliação gratuita na Figaro’s Barbearia.',
    intro:
      'Você recupera o cabelo no mesmo dia, com fios naturais fixados sobre uma base ultrafina. Sem cirurgia, sem dor e com um resultado natural e discreto, pronto para o dia a dia.',
    offer: 'Avaliação gratuita com o especialista',
    icon: '💇',
    benefits: [
      'Resultado natural e discreto',
      'Sem cirurgia, sem cortes e sem cicatrizes',
      'Aplicação na mesma sessão',
      'Fios naturais e personalizados',
      'Manutenção mensal disponível',
      'Ambiente climatizado e acolhedor',
    ],
    idealFor: [
      'Homens com entradas ou calvície avançada',
      'Quem sofre com queda de cabelo',
      'Quem busca resultado imediato, sem cirurgia',
      'Quem já testou tratamentos sem resultado',
      'Quem busca um visual mais jovem e renovado',
    ],
    sections: [
      {
        h2: 'Como funciona a prótese capilar',
        paragraphs: [
          'A prótese capilar usa fios naturais aplicados sobre uma base ultrafina, fixada no couro cabeludo e finalizada com um corte personalizado. O resultado acompanha o formato do seu rosto, a cor dos seus fios e o seu estilo.',
          'Na Figaro’s Barbearia, em Presidente Epitácio, todo o processo é conduzido por Wagner Pires, especialista em prótese capilar masculina. Você chega com a área de queda exposta e sai com o cabelo completo, ainda na mesma sessão.',
        ],
      },
      {
        h2: 'Vantagens de fazer em Presidente Epitácio',
        paragraphs: [
          'Fazer a prótese capilar aqui significa ter acompanhamento próximo e manutenção sem deslocamento. Você não precisa viajar para cuidar do cabelo: a manutenção é feita na R. Maceió, 1274, no centro da cidade.',
          'Além disso, o atendimento é próximo e sem pressa. Você entende o processo, tira todas as dúvidas e só então decide o que é melhor para o seu caso.',
        ],
      },
      {
        h2: 'Para quem é a prótese capilar masculina',
        paragraphs: [
          'A prótese capilar masculina atende desde as primeiras entradas até a calvície avançada. Quanto antes você procurar, mais fácil preservar o couro cabeludo e escolher a técnica ideal.',
          'Na avaliação gratuita, o especialista analisa o seu caso, conversa sobre as suas expectativas e explica as opções de base, fio e manutenção, sem compromisso.',
        ],
      },
      {
        h2: 'O que muda no seu dia a dia',
        paragraphs: [
          'Você volta a passar a mão no cabelo, usar cortes que antes ficavam expostos e a se olhar no espelho com confiança. A manutenção é rápida, mensal, e acontece em Presidente Epitácio.',
        ],
      },
    ],
    faq: [
      {
        q: 'A prótese capilar fica natural?',
        a: 'Sim. Quando bem escolhida, personalizada e aplicada, uma prótese capilar pode oferecer um resultado muito natural e discreto. Com fios naturais, base ultrafina e corte personalizado, ela se harmoniza com o seu visual.',
      },
      {
        q: 'Quanto custa uma prótese capilar em Presidente Epitácio?',
        a: 'O valor depende do tipo de prótese, da qualidade dos fios e da técnica de aplicação. O ideal é fazer uma avaliação gratuita para receber um orçamento exato para o seu caso.',
      },
      {
        q: 'Preciso raspar a cabeça para usar prótese capilar?',
        a: 'Em muitos casos, a área de aplicação é preparada para receber a prótese. Tudo é definido na avaliação, de acordo com a extensão da queda.',
      },
      {
        q: 'A prótese capilar masculina estraga o cabelo que ainda tenho?',
        a: 'Não. Com a preparação e a manutenção corretas, o couro cabeludo permanece saudável. O acompanhamento mensal garante que tudo continue em ordem.',
      },
      {
        q: 'Posso lavar e pentear a prótese normalmente?',
        a: 'Sim. Após a aplicação você recebe as orientações de lavagem e cuidado. Com os produtos certos, ela mantém o aspecto natural por mais tempo.',
      },
    ],
    whatsappKey: 'service',
    related: ['manutencao-protese-capilar-presidente-epitacio', 'colocacao-protese-capilar-presidente-epitacio'],
  },
  {
    slug: 'hair-system-presidente-epitacio',
    title: 'Hair System em Presidente Epitácio',
    h1: 'Hair System em Presidente Epitácio',
    description:
      'Hair system (prótese capilar) em Presidente Epitácio com resultado natural. Aplicação na mesma sessão, sem cirurgia. Avaliação gratuita com especialista.',
    intro:
      'Hair system é o nome técnico da prótese capilar masculina moderna: uma base de trama ou filme com fios naturais, aplicada sobre a área de queda. O resultado é um cabelo completo, natural e seguro.',
    offer: 'Hair system sob medida para o seu caso',
    icon: '🧵',
    benefits: [
      'Base de aplicação moderna e confortável',
      'Fios naturais personalizados',
      'Fixação segura para o dia a dia',
      'Resultado imediato e natural',
      'Manutenção periódica acompanhada',
    ],
    idealFor: [
      'Quem quer o visual completo de volta',
      'Quem precisa de discrição e naturalidade',
      'Quem tem couro cabeludo sensível',
      'Quem busca uma técnica segura e reversível',
    ],
    sections: [
      {
        h2: 'O que é o hair system',
        paragraphs: [
          'O hair system é composto por fios naturais costurados ou colados em uma base ultrafina. Ele é produzido para imitar exatamente o seu cabelo: cor, textura, densidade e direção do crescimento.',
          'Na aplicação, a base é fixada na área de queda e o conjunto é cortado e modelado. O resultado acompanha o seu estilo e fica muito próximo do cabelo natural.',
        ],
      },
      {
        h2: 'Por que fazer em Presidente Epitácio',
        paragraphs: [
          'Você conta com um especialista que acompanha o seu hair system do início ao fim, incluindo a manutenção. Sem deslocamento, sem fila e com a conveniência de resolver tudo na mesma cidade.',
        ],
      },
    ],
    faq: [
      {
        q: 'Hair system é a mesma coisa que prótese capilar?',
        a: 'Sim. São termos para a mesma técnica: fios naturais aplicados sobre uma base no couro cabeludo. Na Figaro’s trabalhamos com hair system sob medida.',
      },
      {
        q: 'O hair system pode ser removido quando eu quiser?',
        a: 'Sim. É uma solução reversível. Se um dia você decidir parar, a prótese é removida e o couro cabeludo volta ao normal.',
      },
    ],
    whatsappKey: 'service',
    related: ['protese-capilar-presidente-epitacio', 'colocacao-protese-capilar-presidente-epitacio'],
  },
  {
    slug: 'manutencao-protese-capilar-presidente-epitacio',
    title: 'Manutenção de Prótese Capilar em Presidente Epitácio',
    h1: 'Manutenção de Prótese Capilar em Presidente Epitácio',
    description:
      'Manutenção mensal de prótese capilar em Presidente Epitácio: limpeza, higienização, recolagem e reestilização. Mantenha seu hair system impecável.',
    intro:
      'A manutenção é o que mantém a prótese capilar natural, confortável e durável. Higienização profunda, recolagem e novo corte fazem a diferença entre uma prótese bem cuidada e uma que denuncia.',
    offer: 'Manutenção mensal com acompanhamento completo',
    icon: '🧴',
    benefits: [
      'Limpeza e higienização profunda',
      'Recolagem e verificação da base',
      'Novo corte e finalização',
      'Aumento da durabilidade da prótese',
      'Conforto e fixação impecáveis',
    ],
    idealFor: [
      'Quem já usa prótese capilar',
      'Quem precisa de higienização profissional',
      'Quem quer prolongar a vida útil do hair system',
      'Quem busca um acabamento sempre novo',
    ],
    sections: [
      {
        h2: 'De quanto em quanto tempo fazer a manutenção',
        paragraphs: [
          'O recomendado é a manutenção a cada 15 a 30 dias, dependendo da base da prótese e da oleosidade do seu couro cabeludo. Na avaliação, você recebe um calendário de cuidados personalizado.',
        ],
      },
      {
        h2: 'O que está incluso',
        paragraphs: [
          'A manutenção inclui a remoção da prótese, higienização profunda da base e do couro cabeludo, recolagem, corte de acabamento e revisão da fixação. Você sai daqui com o visual renovado.',
        ],
      },
    ],
    faq: [
      {
        q: 'Quanto tempo dura a manutenção da prótese capilar?',
        a: 'A manutenção costuma levar cerca de 1 hora a 1h30, dependendo da técnica e do corte. É um cuidado simples e rápido, feito na própria barbearia.',
      },
      {
        q: 'Posso lavar a prótese em casa entre as manutenções?',
        a: 'Sim. Você recebe orientações e indicação de produtos. A manutenção profissional complementa os cuidados diários em casa.',
      },
    ],
    whatsappKey: 'manutencao',
    related: ['protese-capilar-presidente-epitacio', 'colocacao-protese-capilar-presidente-epitacio'],
  },
  {
    slug: 'colocacao-protese-capilar-presidente-epitacio',
    title: 'Colocação de Prótese Capilar em Presidente Epitácio',
    h1: 'Colocação de Prótese Capilar em Presidente Epitácio',
    description:
      'Colocação de prótese capilar em Presidente Epitácio com resultado na mesma sessão. Processo completo: avaliação, aplicação, corte e orientações. Sem cirurgia.',
    intro:
      'A colocação é a etapa que transforma a sua aparência. Em uma única sessão, o especialista aplica a prótese, ajusta a base, corta e finaliza, deixando tudo pronto para o seu dia a dia.',
    offer: 'Colocação completa em uma única sessão',
    icon: '✂️',
    benefits: [
      'Processo de 2 a 3 horas em média',
      'Aplicação e fixação profissionais',
      'Corte e finalização personalizados',
      'Orientação de cuidados inclusa',
      'Resultado imediato para sair usando',
    ],
    idealFor: [
      'Quem quer resultado no mesmo dia',
      'Quem prefere um procedimento não cirúrgico',
      'Quem busca um processo conduzido por especialista',
      'Quem quer orientação completa de cuidados',
    ],
    sections: [
      {
        h2: 'Como é feita a colocação',
        paragraphs: [
          'O processo começa com a avaliação do couro cabeludo e a escolha do modelo ideal. Em seguida vem a preparação da área, a fixação da prótese e o corte de acabamento.',
          'Ao final, você recebe todas as orientações de lavagem, manutenção e cuidados diários, para que o resultado dure e continue natural.',
        ],
      },
    ],
    faq: [
      {
        q: 'A colocação da prótese capilar dói?',
        a: 'Não. A aplicação é indolor e não usa cortes nem anestesia. Você fica confortável durante todo o processo.',
      },
      {
        q: 'Posso sair da barbearia e usar normalmente?',
        a: 'Sim. O resultado já sai pronto para uso. Você volta apenas para a manutenção mensal.',
      },
    ],
    whatsappKey: 'service',
    related: ['protese-capilar-presidente-epitacio', 'manutencao-protese-capilar-presidente-epitacio'],
  },
  {
    slug: 'solucao-para-calvicie-presidente-epitacio',
    title: 'Solução para Calvície em Presidente Epitácio',
    h1: 'Solução para Calvície em Presidente Epitácio',
    description:
      'Solução definitiva e sem cirurgia para calvície em Presidente Epitácio. Prótese capilar masculina com resultado natural no mesmo dia. Avaliação gratuita.',
    intro:
      'A calvície tem solução — e você não precisa passar por uma cirurgia para isso. Com a prótese capilar masculina, o resultado é imediato, natural e sem riscos.',
    offer: 'Conheça a solução ideal para o seu caso',
    icon: '🦱',
    benefits: [
      'Resultado imediato para calvície',
      'Sem cirurgia e sem período de recuperação',
      'Funciona para os estágios avançados',
      'Solução reversível e sem riscos',
      'Autoestima recuperada no mesmo dia',
    ],
    idealFor: [
      'Quem tem calvície avançada',
      'Quem não pode ou não quer operar',
      'Quem já tentou medicamentos sem efeito',
      'Quem quer uma resposta rápida e definitiva',
    ],
    sections: [
      {
        h2: 'A calvície tem solução sem cirurgia',
        paragraphs: [
          'Enquanto o transplante exige meses de resultado e nem sempre é indicado, a prótese capilar resolve o visual no mesmo dia, para qualquer grau de queda.',
          'A avaliação gratuita em Presidente Epitácio mostra exatamente como ficaria o resultado antes de você decidir qualquer coisa.',
        ],
      },
    ],
    faq: [
      {
        q: 'A prótese capilar serve para calvície avançada?',
        a: 'Sim. A técnica é indicada justamente para os casos avançados, onde o transplante teria mais limitações.',
      },
      {
        q: 'É melhor prótese ou transplante capilar?',
        a: 'Depende do caso. A prótese entrega resultado imediato, sem cirurgia e com custo mais acessível. O transplante é um procedimento cirúrgico, demorado e que nem todos podem fazer.',
      },
    ],
    whatsappKey: 'service',
    related: ['protese-capilar-presidente-epitacio', 'manutencao-protese-capilar-presidente-epitacio'],
  },
  {
    slug: 'barbearia-presidente-epitacio',
    title: 'Barbearia em Presidente Epitácio',
    h1: 'Barbearia em Presidente Epitácio',
    description:
      `Barbearia em Presidente Epitácio no centro da cidade. Corte masculino, barba, prótese capilar e manutenção. Atendimento premium com avaliação ${BUSINESS.rating.ratingValue} estrelas no Google.`,
    intro:
      'A Figaro’s é a barbearia de Presidente Epitácio para quem exige qualidade. Do corte de cabelo à prótese capilar, tudo é feito com técnica, cuidado e acabamento impecável.',
    offer: 'Atendimento premium no centro da cidade',
    icon: '💈',
    benefits: [
      'Localização central de fácil acesso',
      'Ambiente climatizado e acolhedor',
      'Profissionais especializados',
      'Corte, barba e prótese capilar',
      `Avaliação ${BUSINESS.rating.ratingValue} estrelas no Google`,
    ],
    idealFor: [
      'Moradores de Presidente Epitácio',
      'Quem busca atendimento de alto padrão',
      'Quem quer corte, barba e cabelo no mesmo lugar',
      'Quem busca uma barbearia de confiança',
    ],
    sections: [
      {
        h2: 'Uma barbearia completa no centro',
        paragraphs: [
          `Localizada na R. Maceió, 1274, no centro de Presidente Epitácio, a Figaro’s reúne serviços masculinos completos: corte, barba, pigmentação e prótese capilar, com +${BUSINESS.rating.ratingCount} avaliações positivas no Google.`,
        ],
      },
    ],
    faq: [
      {
        q: 'A barbearia atende sem agendamento?',
        a: 'O ideal é agendar pelo WhatsApp para não esperar. Para a prótese capilar, a avaliação gratuita precisa ser agendada.',
      },
      {
        q: 'Onde fica a barbearia em Presidente Epitácio?',
        a: 'R. Maceió, 1274, Centro, Presidente Epitácio (SP). Horário de segunda a sábado, das 9h às 18h.',
      },
    ],
    whatsappKey: 'avaliacao',
    related: ['corte-masculino-presidente-epitacio', 'barba-presidente-epitacio'],
  },
  {
    slug: 'corte-masculino-presidente-epitacio',
    title: 'Corte Masculino em Presidente Epitácio',
    h1: 'Corte Masculino em Presidente Epitácio',
    description:
      'Corte masculino moderno e tradicional em Presidente Epitácio. Acabamento profissional, máquina e tesoura. Agende seu horário pelo WhatsApp.',
    intro:
      'Um bom corte muda a forma como você se apresenta. Na Figaro’s, o corte masculino é feito com atenção ao formato do seu rosto, ao seu estilo e ao acabamento.',
    offer: 'Corte com acabamento impecável',
    icon: '✂️',
    benefits: [
      'Cortes modernos e tradicionais',
      'Máquina e tesoura com precisão',
      'Finalização com produtos de qualidade',
      'Atendimento sem pressa',
      'Ambiente climatizado',
    ],
    idealFor: [
      'Homens que valorizam o visual',
      'Quem busca um corte que combina com o rosto',
      'Quem quer um lugar fixo e de confiança',
      'Quem precisa de um corte rápido e bem feito',
    ],
    sections: [
      {
        h2: 'O corte certo para o seu estilo',
        paragraphs: [
          'O atendimento começa com uma conversa: como você usa o cabelo, qual o seu estilo no dia a dia, o que incomoda. A partir daí o corte é construído para valorizar o seu visual.',
        ],
      },
    ],
    faq: [
      {
        q: 'Qual o valor do corte masculino?',
        a: 'O corte masculino parte de R$ 50. O valor exato depende dos serviços incluídos, como barba e finalização.',
      },
      {
        q: 'Preciso agendar o corte?',
        a: 'Recomendamos agendar pelo WhatsApp para garantir o horário, principalmente nos fins de semana.',
      },
    ],
    whatsappKey: 'avaliacao',
    related: ['barbearia-presidente-epitacio', 'barba-presidente-epitacio'],
  },
  {
    slug: 'barba-presidente-epitacio',
    title: 'Barba em Presidente Epitácio',
    h1: 'Barba em Presidente Epitácio',
    description:
      'Barba modelada com navalha em Presidente Epitácio. Desenho, toalha quente e finalização premium na Figaro’s Barbearia. Agende pelo WhatsApp.',
    intro:
      'Barba bem feita é detalhe de quem se cuida. Com navalha, toalha quente e desenho preciso, o serviço de barba da Figaro’s valoriza o seu rosto do início ao fim.',
    offer: 'Barba modelada com técnica e cuidado',
    icon: '🪒',
    benefits: [
      'Modelagem e desenho profissional',
      'Toalha quente e conforto',
      'Acabamento de navalha',
      'Produtos de qualidade',
      'Resultado que dura',
    ],
    idealFor: [
      'Homens com barba cheia ou rala',
      'Quem busca um desenho definido',
      'Quem quer um momento de cuidado',
      'Quem combina barba e corte',
    ],
    sections: [
      {
        h2: 'Barba com acabamento premium',
        paragraphs: [
          'O serviço inclui limpeza, hidratação, desenho e finalização. Se você faz a barba junto com o corte, sai ainda melhor — e economiza tempo.',
        ],
      },
    ],
    faq: [
      {
        q: 'A barba é feita com navalha?',
        a: 'Sim, quando o cliente prefere. Trabalhamos com navalha para um acabamento rente e preciso, além de toalha quente para o conforto.',
      },
      {
        q: 'Posso fazer barba e corte juntos?',
        a: 'Sim. A combinação é a mais procurada e rende um resultado completo no mesmo horário.',
      },
    ],
    whatsappKey: 'avaliacao',
    related: ['corte-masculino-presidente-epitacio', 'barbearia-presidente-epitacio'],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}