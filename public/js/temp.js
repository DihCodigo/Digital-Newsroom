const noticias = [

    { id: 1, titulo: 'teste 1', conteudo: 'aqui teste 1', categoria: 'destaque', img: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/presocracolandia.png?w=390&h=219&crop=1' },
    { id: 2, titulo: 'teste 2', conteudo: 'aqui teste 2', categoria: 'politica', img: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportBusinessNews/tagreuters.com2024binary_LYNXMPEK5C0LL-FILEDIMAGE.jpg?w=390&h=220&crop=1' },
    { id: 3, titulo: 'teste 3', conteudo: 'aqui teste 3', categoria: 'esporte', img: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/anderson-julio.jpg?w=390&h=219&crop=1' }

]


const containerNoticia = document.getElementById('noticia-container')

noticias.forEach(noticia => {
    const card = document.createElement('div');
    card.className = `card`;

    const categoriaDiv = document.createElement('div');
    categoriaDiv.className = `categoria-${noticia.categoria}`;
    categoriaDiv.textContent = noticia.categoria;
    card.appendChild(categoriaDiv);

    const img = document.createElement('img');
    img.src = noticia.img;
    img.alt = noticia.titulo;
    card.appendChild(img);

    const titulo = document.createElement('h3');
    titulo.className = 'titulo-card';
    titulo.textContent = noticia.titulo;
    card.appendChild(titulo);

    containerNoticia.appendChild(card);
})