function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Foto de Raphael Moura sorrido levemente com um fundo escuro cujo as cores são verde, azul e preto com linhas brancas.')
    } else {
        img.setAttribute('src', './assets/avatar-light.png');
        img.setAttribute('alt', 'Foto de Raphael Moura sorrido levemente com um fundo claro cujo as cores são verde, azul e preto com linhas brancas.')
    }
}