let text = document.getElementById('text');
let castle = document.getElementById('castle');
let fox = document.getElementById('fox');
let mermaid = document.getElementById('mermaid');
let fairy = document.getElementById('fairy');
let witch = document.getElementById('witch');
let bird = document.getElementById('bird');
let light = document.getElementById('light');
let space = document.getElementById('space');
let bg = document.getElementById('bg');
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    castle.style.marginTop = value * 0.027 + 'vw';
    text.style.marginTop = value * 0.035 + 'vw';
    fox.style.marginTop = value * 0.02 + 'vw';
    mermaid.style.marginTop = value * 0.025 + 'vw';
    fairy.style.marginTop = value * 0.025 + 'vw';
    witch.style.marginTop = value * 0.024 + 'vw';
    bird.style.marginTop = value * 0.02 + 'vw';
    light.style.marginTop = value * 0.05 + 'vw';
    light.style.filter = 'blur('+ value * .5 +'px)';
    space.style.marginTop = value * 0.02 + 'vw';
    space.style.filter = 'blur('+ value * 0.04 +'px)';
    space.style.opacity = 100 - value * 0.1 + '%';
    bg.style.filter = 'blur('+ value / 600 +'px)';
});

