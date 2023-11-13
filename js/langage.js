// Seleciona o elemento de botão de alternância
const languageToggle = document.getElementById('languageToggle');

// Adiciona um ouvinte de clique ao botão
languageToggle.addEventListener('click', function() {
  // Verifica se o botão está marcado (checked)
  if (languageToggle.checked) {
    // Se está marcado, definimos o idioma como inglês
    alterarIdioma('en');
  } else {
    // Se não está marcado, definimos o idioma como português
    alterarIdioma('pt');
  }
});

// Função para alternar idiomas
function alterarIdioma(idioma) {
  // Código para alterar os textos da sua aplicação com base no idioma selecionado
  // Exemplo: você pode ter uma lógica aqui para alterar os textos da interface
  // Pode envolver a troca de classes, atualização de conteúdo, etc.
    const traducoes={
        'pt': {
            'txtQuem': 'Quem sou eu!',
            'txtDesi': 'Designer | Front-Ender | Fullstack | Marketing',
            'txtSeja': 'Seja bem-vindo ao meu portifólio online, onde transformamos empresas com marketing digital! Estamos aqui para levar sua marca às alturas inexploradas e além. Prepare-se para uma jornada que o levará a novos horizontes de sucesso online.',
            'txtProf': 'Profissional com foco no resultado!',
            'txtSati': 'Satisfação garantida com trabalhos realizados de excelente qualidade. Que geraram satisfação aos clientes e principlamente retorno do investimento aplicado nos projetos!',
            'txtServ':'Serviços',
            'txtMark': 'Marketing Online',
            'txtMarke':'Impulsione sua marca para o espaço digital com nosso Marketing Online personalizado. 🚀',
            'txtCria': 'Criação de Redes Sociais',
            "txtCriac": 'Construa comunidades estelares! Deixe-nos criar e gerenciar suas redes sociais com impacto.',
            'txtCust': 'Customização de Site',
            'txtCusto': 'Sites únicos, como estrelas no céu. Personalizamos sua presença online para brilhar',
            'txtSsl': 'SSL - Segurança',
            'txtSsls':'Navegue com segurança intergaláctica! Protegemos seu site com SSL de última geração.',
            'txtGoog': 'Google Ads',
            'txtGoogl':'Destaque-se na galáxia do Google! Aumente sua visibilidade com anúncios eficazes',
            'txtGooga': 'Google Analytics',
            'txtGoogan': 'Decifre o universo de dados! Analise seu desempenho online com Google Analytics.',
            'txtTag': 'Google Tag Manager',
            'txtTage': 'Controle total da navegação! Simplificamos com o Google Tag Manager.',
            'txtMid': 'Mídia Impressas',
            'txtMidi':'Comunicados intergalácticos!',
            'txtGal': 'Galeria',
            'txtIden': 'Identidade Visual',
            'txtMap':  'Criação de Mapas',
            'txtRed': 'Rede Social',
            'txtEmb': 'Embalagens',
            'txtEbo': 'Ebooks',
            'txtLog': 'Logo Marca',
            'txtPan': 'Panfletos',
            'txtPpt': 'Criação de ppt',
            'txtEnt': 'Entrar em contato!',
            'txtCop': 'Copyright - Paulo Júnior Marketing Online | Marketing e Publicidade Online', 

        },
        'en':{
            'txtQuem': 'Who am I!',
            'txtDesi': 'Designer | Front-End | Fullstack | Marketing',
            'txtSeja': 'Welcome to my online portfolio, where we transform companies with digital marketing! We are here to take your brand to unexplored heights and beyond. Get ready for a journey that will lead you to new horizons of online success.',
            'txtProf': 'Professional with a focus on results!',
            'txtSati': 'Satisfaction guaranteed with work of excellent quality. Resulting in satisfaction for clients and, especially, a return on investment applied to projects!',
            'txtServ': 'Services',
            'txtMark': 'Online Marketing',
            'txtMarke': 'Boost your brand into the digital space with our personalized Online Marketing. 🚀',
            'txtCria': 'Creation of Social Networks',
            'txtCriac': 'Build stellar communities! Let us create and manage your social networks with impact.',
            'txtCust': 'Site Customization',
            'txtCusto': 'Unique sites, like stars in the sky. We customize your online presence to shine.',
            'txtSsl': 'SSL - Security',
            'txtSsls': 'Browse with intergalactic security! We protect your site with state-of-the-art SSL.',
            'txtGoog': 'Google Ads',
            'txtGoogl': 'Stand out in the Google galaxy! Increase your visibility with effective ads.',
            'txtGooga': 'Google Analytics',
            'txtGoogan': 'Decipher the universe of data! Analyze your online performance with Google Analytics.',
            'txtTag': 'Google Tag Manager',
            'txtTage': 'Total control of navigation! We simplify with Google Tag Manager.',
            'txtMid': 'Print Media',
            'txtMidi': 'Intergalactic communications!',
            'txtGal': 'Gallery',
            'txtIden': 'Visual Identity',
            'txtMap': 'Creation of Maps',
            'txtRed': 'Social Network',
            'txtEmb': 'Packaging',
            'txtEbo': 'Ebooks',
            'txtLog': 'Logo',
            'txtPan': 'Pamphlets',
            'txtPpt': 'Creation of PPT',
            'txtEnt': 'Contact Us!',
            'txtCop': 'Copyright - Paulo Júnior Online Marketing | Online Marketing and Advertising'
        }

    }

  console.log(`Idioma alterado para: ${idioma}`);
    // Adicione aqui a lógica para atualizar os textos na sua aplicação
        // Obtém todas as chaves de tradução para o idioma selecionado
    const chavesTraducao = Object.keys(traducoes[idioma]);

    // Itera sobre as chaves e atualiza o texto de cada elemento
    chavesTraducao.forEach(chave => {
        const elemento = document.getElementById(chave);
        if (elemento) {
            elemento.textContent = traducoes[idioma][chave];
        }
    });





}
