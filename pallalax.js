let text = document.getElementById('text');
let castle = document.getElementById('castle');
let fox = document.getElementById('fox');
let mermaid = document.getElementById('mermaid');
let fairy = document.getElementById('fairy');
let witch = document.getElementById('witch');
let bird = document.getElementById('bird');
let arrow =  document.querySelectorAll('.arrow');
let rock = document.getElementById('rock');
let bg = document.getElementById('bg');
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    castle.style.marginTop = value * 0.030 + 'vw';
    castle.style.width = 100 - value * 0.01 + 'vw';
    castle.style.height = 140 - value * 0.01 + 'vw';
    castle.style.left = value * 0.005 + 'vw';
    text.style.marginTop = value * 0.040 + 'vw';
    text.style.width = 80 - value * 0.01 + 'vw';
    text.style.height = 55 - value * 0.01 + 'vw';
    text.style.left = 8.8 + value * 0.0055 + 'vw';


    fox.style.marginTop = value * 0.020 + 'vw';
    fox.style.width =  115 - value * 0.01 + 'vw';
    fox.style.height = 160 - value * 0.01 + 'vw';
    fox.style.left =  value * 0.006 + 'vw';


    mermaid.style.marginTop = value * 0.025 + 'vw';
    mermaid.style.width =  115 - value * 0.01 + 'vw';
    mermaid.style.height = 160 - value * 0.01 + 'vw';
    mermaid.style.left =  value * 0.006 + 'vw';


    fairy.style.marginTop = value * 0.025 + 'vw';
    fairy.style.width =  115 - value * 0.01 + 'vw';
    fairy.style.height = 160 - value * 0.01 + 'vw';
    fairy.style.right =  value * 0.006 + 'vw';

    witch.style.marginTop = value * 0.023 + 'vw';
    witch.style.width =  115 - value * 0.01 + 'vw';
    witch.style.height = 160 - value * 0.01 + 'vw';
    witch.style.right =  value * 0.006 + 'vw';

    bg.style.marginTop = value * 0.010 + 'vw';




    bird.style.marginTop = value * 0.030 + 'vw';
    bird.style.width = 85 - value * 0.01 + 'vw';
    bird.style.height = 115 - value * 0.01 + 'vw';
    bird.style.left = 10 + value * 0.0055 + 'vw';
});

