let text = document.getElementById('text');
let castle = document.getElementById('castle');
let fox = document.getElementById('fox');
let mermaid = document.getElementById('mermaid');
let fairy = document.getElementById('fairy');
let witch = document.getElementById('witch');
let bird = document.getElementById('bird');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 0.7 + 'px';
    castle.style.marginTop = value * 0.2 + 'px';
    fox.style.marginRight = value * 0.5 + 'px';
    fox.style.marginTop = value * 0.05 + 'px';
    mermaid.style.marginTop = value * 0.1 + 'px';
    fairy.style.marginRight = value * 0.025 + 'px';
    fairy.style.marginTop = value * 0.025 + 'px';
    witch.style.marginLeft = value * 0.025 + 'px';
    witch.style.marginBottom = value * 0.025 + 'px';
    mermaid.style.marginLeft = value * 0.025 + 'px';
    bird.style.marginBottom = value * 0.025 + 'px';

});
