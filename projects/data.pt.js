// Portuguese (Brazil) overrides for projects/data.js, merged by I18N.project().
// Any field left out falls back to English. `alts` follows the order of `shots`.
window.PROJECTS_I18N = window.PROJECTS_I18N || {};
window.PROJECTS_I18N.pt = {
  causify: {
    category: 'Jurídico',
    tagline: 'Gestão para escritórios de advocacia, com processos, prazos, timesheet, cobrança e portal do cliente.',
    description: [
      'O Causify é uma plataforma completa de gestão para escritórios de advocacia no Brasil. Processos, prazos, clientes, tarefas e finanças ficam num só sistema web, e o escritório toca o dia a dia sem se perder entre planilhas e agendas.',
      'Ele cuida dos detalhes que importam para quem advoga no Brasil: prazos contados em dias úteis com feriados nacionais e recessos forenses, honorários pelas tabelas da OAB e calculadoras de pensão alimentícia, trabalhista, FGTS, aluguel e bancárias com índices do Banco Central.',
    ],
    features: [
      'Gestão de processos com acompanhamento automático de andamentos',
      'Timesheet com timer integrado',
      'Portal para o cliente acompanhar os próprios processos',
      'Tarefas e agenda com visão Kanban',
      'Honorários, despesas e cobrança via PIX por processo',
      'Dados criptografados, LGPD e backup diário',
    ],
    facts: [['Mercado', 'Brasil'], ['Plataforma', 'Web, em qualquer dispositivo'], ['Preço', 'Plano grátis + planos pagos']],
    alts: ['Página inicial do Causify', 'Painel e módulos do Causify', 'Causify no celular'],
  },
  contratos: {
    category: 'Assinatura eletrônica',
    tagline: 'Do modelo ao PDF assinado. Envie contratos por e-mail, WhatsApp ou SMS e acompanhe cada signatário.',
    description: [
      'O Contratos leva um contrato do modelo ao PDF assinado. A equipe escreve o modelo uma vez, marca o que muda com variáveis tipadas (texto, data, moeda, CPF/CNPJ) e gera em minutos um documento pronto para assinar a partir de um formulário validado.',
      'Quem assina recebe um link por e-mail, WhatsApp ou SMS e não precisa criar conta. O painel mostra quem abriu, assinou ou recusou e destaca os contratos parados. Quando todos assinam, o PDF fica guardado junto com o histórico completo do contrato.',
    ],
    features: [
      'Modelos com variáveis tipadas',
      'Ordem de assinatura e papel de cada signatário',
      'Envio por e-mail, WhatsApp ou SMS',
      'Status de cada contrato em tempo real',
      'Equipe com perfis de acesso',
      'Histórico completo de auditoria',
    ],
    facts: [['Mercado', 'Brasil'], ['Plataforma', 'Web'], ['Preço', '3 contratos grátis para testar']],
    alts: ['Página inicial do Contratos com um contrato sendo assinado', 'Fluxo em quatro passos e acompanhamento de status', 'Contratos no celular'],
  },
  'educa-game': {
    category: 'Educação',
    tagline: 'Jogo grátis de matemática e lógica para crianças que se adapta ao nível de cada uma.',
    description: [
      'O Educa Game transforma o treino de matemática e lógica numa expedição. Desafios curtos se ajustam ao nível de cada criança, do primeiro “quanto é 3 + 4?” até equações e enigmas de lógica. São duas trilhas e quatro níveis, do Iniciante ao Expert.',
      'Sem pressa e sem vidas perdidas: errar vira dica e um novo problema parecido para tentar de novo. O progresso libera novas regiões do mapa, e pais e professores acompanham a semana de cada criança e veem o que pede mais prática.',
    ],
    features: [
      'Dificuldade que se adapta a cada habilidade',
      'Erros viram explicações',
      'Desafio do dia com XP em dobro',
      'Medalhas e avatar desbloqueável',
      'Leitura em voz alta, texto grande e tema escuro',
      'Área do responsável e turmas com código',
    ],
    facts: [['Mercado', 'Brasil'], ['Idades', '7 a 99 anos'], ['Preço', 'Grátis, sem anúncios e sem cadastro']],
    alts: ['Página inicial do Educa Game com um desafio de tabuada', 'Níveis do Educa Game, do Iniciante ao Expert', 'Educa Game no celular'],
  },
  'portfolio-balancer': {
    category: 'Finanças',
    tagline: 'Acompanhe e rebalanceie seus investimentos para manter a alocação que você definiu.',
    description: [
      'O Portfolio Balancer mantém seus investimentos alinhados com a alocação que você escolheu. Defina um peso-alvo para cada ativo, registre suas posições e veja num relance onde a carteira saiu do alvo.',
      'Em vez de refazer a mesma planilha todo mês, você vê com clareza o que comprar ou reduzir para voltar ao alvo.',
    ],
    features: [
      'Alocação-alvo por ativo',
      'Posições num só lugar',
      'Desvio do alvo num relance',
      'Orientação para rebalancear',
    ],
    facts: [['Plataforma', 'Web'], ['Acesso', 'Conta pessoal']],
    alts: ['Tela de login do Portfolio Balancer', 'Portfolio Balancer no celular'],
  },
  'what-to-eat': {
    category: 'Comida',
    tagline: 'Descubra restaurantes em Toronto e Vancouver quando você não consegue decidir.',
    description: [
      'O What to Eat é um buscador de restaurantes em Toronto e Vancouver com mais de 4.000 lugares. Busque pelo nome, filtre por cidade, categoria, culinária e distância, e veja os resultados em lista ou no mapa.',
      'Quando ninguém consegue decidir, toque em “Decide for me” e deixe o app escolher. Com uma conta dá para salvar listas, planejar roteiros gastronômicos, seguir guias e ver o que outras pessoas estão descobrindo.',
    ],
    features: [
      'Mais de 4.000 lugares em duas cidades',
      'Filtros por categoria, culinária e raio',
      'Lista, mapa e “Near me”',
      'Sorteio com “Decide for me”',
      'Listas, roteiros e guias pessoais',
    ],
    facts: [['Cidades', 'Toronto · Vancouver'], ['Plataforma', 'Web, pensado para o celular']],
    alts: ['Busca do What to Eat', 'Resultados de restaurantes do What to Eat', 'What to Eat no celular'],
  },
  'json-formatter': {
    category: 'Ferramentas',
    tagline: 'Cole um JSON cru e receba ele formatado e validado na hora.',
    description: [
      'Um formatador e validador de JSON direto ao ponto. Cole qualquer coisa e ele mostra o que está errado, com uma mensagem de erro útil, ou formata tudo com indentação e destaque de sintaxe.',
      'Arrays de objetos viram CSV para planilhas com um clique. Tudo roda no navegador, então seus dados nunca saem do seu computador.',
    ],
    features: [
      'Validação com erros detalhados',
      'Formatação e destaque de sintaxe',
      'Conversão de array JSON → CSV',
      'Copiar com um clique',
      '100% no navegador',
    ],
    facts: [['Plataforma', 'Web'], ['Privacidade', 'Nenhum dado sai do navegador']],
    alts: ['Editor do JSON Formatter', 'JSON Formatter no celular'],
  },
  'url-shortener': {
    category: 'Ferramentas',
    tagline: 'Transforme URLs longas em links curtos e fáceis de compartilhar.',
    description: [
      'Um encurtador de URLs que prioriza a privacidade. Crie um link curto de forma anônima em um segundo, sem cadastro e sem coleta de dados pessoais.',
      'Se quiser saber como um link está indo, crie uma conta para guardar seus links num só lugar e ver os cliques e as origens de cada um.',
    ],
    features: [
      'Links curtos anônimos',
      'Sem coleta de dados pessoais',
      'Estatísticas de cliques e origens',
      'Painel “My URLs”',
    ],
    facts: [['Plataforma', 'Web'], ['Conta', 'Opcional']],
    alts: ['Página inicial do URL Shortener', 'URL Shortener no celular'],
  },
  'circus-runner': {
    category: 'Jogo',
    tagline: 'Um jogo de navegador acelerado. Desvie dos obstáculos e corra o mais longe que conseguir.',
    description: [
      'O Circus Runner é um endless runner estilo arcade que roda direto no navegador. Toque ou clique para pular, toque de novo para o pulo duplo, caia nas plataformas e pegue moedas enquanto a velocidade só aumenta.',
      'Foi feito para partidas rápidas no celular ou no computador, e quando você bate seu recorde pode compartilhar um card com a pontuação.',
    ],
    features: [
      'Controle de um botão com pulo duplo',
      'Plataformas e moedas para coletar',
      'Funciona no celular e no computador',
      'Card de pontuação para compartilhar',
    ],
    facts: [['Plataforma', 'Navegador'], ['Controles', 'Toque / clique']],
    alts: ['Tela inicial do Circus Runner', 'Circus Runner no celular'],
  },
};
