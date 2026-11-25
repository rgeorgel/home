// Spanish overrides for projects/data.js, merged by I18N.project().
// Any field left out falls back to English. `alts` follows the order of `shots`.
window.PROJECTS_I18N = window.PROJECTS_I18N || {};
window.PROJECTS_I18N.es = {
  causify: {
    category: 'Legal',
    tagline: 'Gestión para despachos de abogados, con casos, plazos, registro de horas, facturación y portal del cliente.',
    description: [
      'Causify es una plataforma integral de gestión para despachos de abogados en Brasil. Casos, plazos, clientes, tareas y finanzas viven en una sola aplicación web, así el despacho lleva su día a día sin hacer malabares con hojas de cálculo y agendas.',
      'Se ocupa de los detalles que importan a los abogados en Brasil: plazos contados en días hábiles con feriados nacionales y recesos judiciales, honorarios según las tablas de la OAB y calculadoras de pensión alimenticia, laborales, FGTS, alquiler y bancarias con índices del Banco Central.',
    ],
    features: [
      'Gestión de casos con seguimiento automático de actuaciones',
      'Registro de horas con temporizador integrado',
      'Portal para que el cliente siga sus propios casos',
      'Tareas y agenda con vista Kanban',
      'Honorarios, gastos y cobros por PIX en cada caso',
      'Datos cifrados, conforme a la LGPD y con copias diarias',
    ],
    facts: [['Mercado', 'Brasil'], ['Plataforma', 'Web, en cualquier dispositivo'], ['Precio', 'Plan gratuito + planes de pago']],
    alts: ['Página de inicio de Causify', 'Panel y módulos de Causify', 'Causify en el móvil'],
  },
  contratos: {
    category: 'Firma electrónica',
    tagline: 'De la plantilla al PDF firmado. Envía contratos por e-mail, WhatsApp o SMS y sigue a cada firmante.',
    description: [
      'Contratos lleva un contrato de la plantilla al PDF firmado. El equipo escribe la plantilla una vez, marca lo que cambia con variables tipadas (texto, fecha, moneda, CPF/CNPJ) y genera en minutos un documento listo para firmar a partir de un formulario validado.',
      'Los firmantes reciben un enlace por e-mail, WhatsApp o SMS y no necesitan cuenta. El panel muestra quién abrió, firmó o rechazó y destaca los contratos estancados. Cuando todos firman, el PDF queda archivado con el historial completo del contrato.',
    ],
    features: [
      'Plantillas con variables tipadas',
      'Orden de firma y rol de cada firmante',
      'Envío por e-mail, WhatsApp o SMS',
      'Estado de cada contrato en tiempo real',
      'Equipo con perfiles de acceso',
      'Historial de auditoría completo',
    ],
    facts: [['Mercado', 'Brasil'], ['Plataforma', 'Web'], ['Precio', '3 contratos gratis para probar']],
    alts: ['Página de inicio de Contratos con un contrato en firma', 'Flujo en cuatro pasos y seguimiento del estado', 'Contratos en el móvil'],
  },
  'educa-game': {
    category: 'Educación',
    tagline: 'Juego gratuito de matemáticas y lógica para niños que se adapta al nivel de cada uno.',
    description: [
      'Educa Game convierte la práctica de matemáticas y lógica en una expedición. Los desafíos cortos se ajustan al nivel de cada niño, desde el primer “¿cuánto es 3 + 4?” hasta ecuaciones y acertijos de lógica. Hay dos rutas y cuatro niveles, de Principiante a Experto.',
      'Sin prisa y sin vidas que perder: un error se convierte en una pista y en un problema parecido para volver a intentarlo. El progreso desbloquea nuevas regiones del mapa, y padres y profesores pueden seguir la semana de cada niño y ver qué necesita más práctica.',
    ],
    features: [
      'Dificultad que se adapta a cada habilidad',
      'Los errores se convierten en explicaciones',
      'Desafío diario con XP doble',
      'Medallas y avatar desbloqueable',
      'Lectura en voz alta, texto grande y modo oscuro',
      'Panel para padres y clases con código',
    ],
    facts: [['Mercado', 'Brasil'], ['Edades', 'De 7 a 99 años'], ['Precio', 'Gratis, sin anuncios ni registro']],
    alts: ['Página de inicio de Educa Game con un desafío de multiplicar', 'Niveles de Educa Game, de Principiante a Experto', 'Educa Game en el móvil'],
  },
  'portfolio-balancer': {
    category: 'Finanzas',
    tagline: 'Sigue y rebalancea tus inversiones para mantener la asignación que elegiste.',
    description: [
      'Portfolio Balancer mantiene tus inversiones alineadas con la asignación que elegiste. Define un peso objetivo para cada activo, registra tus posiciones y ve de un vistazo dónde se ha desviado la cartera.',
      'En lugar de rehacer la misma hoja de cálculo cada mes, ves con claridad qué comprar o reducir para volver al objetivo.',
    ],
    features: [
      'Asignación objetivo por activo',
      'Posiciones en un solo lugar',
      'Desviación del objetivo de un vistazo',
      'Guía para rebalancear',
    ],
    facts: [['Plataforma', 'Web'], ['Acceso', 'Cuenta personal']],
    alts: ['Inicio de sesión de Portfolio Balancer', 'Portfolio Balancer en el móvil'],
  },
  'what-to-eat': {
    category: 'Comida',
    tagline: 'Descubre restaurantes en Toronto y Vancouver cuando no logras decidir.',
    description: [
      'What to Eat es un buscador de restaurantes en Toronto y Vancouver con más de 4.000 lugares. Busca por nombre, filtra por ciudad, categoría, cocina y distancia, y mira los resultados en lista o en el mapa.',
      'Cuando nadie se decide, pulsa “Decide for me” y deja que elija por ti. Con una cuenta puedes guardar listas, planear rutas gastronómicas, seguir guías y ver lo que otras personas están descubriendo.',
    ],
    features: [
      'Más de 4.000 lugares en dos ciudades',
      'Filtros por categoría, cocina y radio',
      'Lista, mapa y “Near me”',
      'Elección al azar con “Decide for me”',
      'Listas, rutas y guías personales',
    ],
    facts: [['Ciudades', 'Toronto · Vancouver'], ['Plataforma', 'Web, adaptada al móvil']],
    alts: ['Buscador de What to Eat', 'Resultados de restaurantes de What to Eat', 'What to Eat en el móvil'],
  },
  'json-formatter': {
    category: 'Herramientas',
    tagline: 'Pega JSON sin formato y obtenlo formateado y validado al instante.',
    description: [
      'Un formateador y validador de JSON sin complicaciones. Pega lo que sea y te indica qué está mal, con un mensaje de error útil, o lo formatea con sangría y resaltado de sintaxis.',
      'Los arrays de objetos se convierten a CSV para hojas de cálculo con un clic. Todo se ejecuta en el navegador, así que tus datos nunca salen de tu equipo.',
    ],
    features: [
      'Validación con errores detallados',
      'Formato y resaltado de sintaxis',
      'Conversión de array JSON → CSV',
      'Copiar con un clic',
      '100% en el navegador',
    ],
    facts: [['Plataforma', 'Web'], ['Privacidad', 'Ningún dato sale del navegador']],
    alts: ['Editor de JSON Formatter', 'JSON Formatter en el móvil'],
  },
  'url-shortener': {
    category: 'Herramientas',
    tagline: 'Convierte URLs largas en enlaces cortos y fáciles de compartir.',
    description: [
      'Un acortador de URLs que pone la privacidad primero. Crea un enlace corto de forma anónima en un segundo, sin registro y sin recopilar datos personales.',
      'Si quieres saber cómo funciona un enlace, crea una cuenta para tener tus enlaces en un solo lugar y ver los clics y las fuentes de cada uno.',
    ],
    features: [
      'Enlaces cortos anónimos',
      'Sin recopilación de datos personales',
      'Estadísticas de clics y fuentes',
      'Panel “My URLs”',
    ],
    facts: [['Plataforma', 'Web'], ['Cuenta', 'Opcional']],
    alts: ['Inicio de URL Shortener', 'URL Shortener en el móvil'],
  },
  'circus-runner': {
    category: 'Juego',
    tagline: 'Un juego de navegador trepidante. Esquiva obstáculos y corre todo lo lejos que puedas.',
    description: [
      'Circus Runner es un endless runner de estilo arcade que se juega directamente en el navegador. Toca o haz clic para saltar, vuelve a tocar para el doble salto, aterriza en plataformas y recoge monedas mientras el ritmo no deja de subir.',
      'Está pensado para partidas rápidas en el móvil o el ordenador, y cuando superas tu récord puedes compartir una tarjeta con tu puntuación.',
    ],
    features: [
      'Control de un botón con doble salto',
      'Plataformas y monedas para recoger',
      'Funciona en móvil y ordenador',
      'Tarjeta de puntuación para compartir',
    ],
    facts: [['Plataforma', 'Navegador'], ['Controles', 'Toque / clic']],
    alts: ['Pantalla de inicio de Circus Runner', 'Circus Runner en el móvil'],
  },
};
