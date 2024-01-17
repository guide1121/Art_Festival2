let text = document.getElementById('text');
let castle = document.getElementById('castle');
let fox = document.getElementById('fox');
let mermaid = document.getElementById('mermaid');
let fairy = document.getElementById('fairy');
let witch = document.getElementById('witch');
let bird = document.getElementById('bird');
let bg = document.getElementById('bg');
let arrow =  document.querySelectorAll('.arrow');
let rock = document.getElementById('rock');
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    castle.style.marginTop = value * 0.027 + 'vw';
    text.style.marginTop = value * 0.035 + 'vw';
    fox.style.marginTop = value * 0.02 + 'vw';
    mermaid.style.marginTop = value * 0.025 + 'vw';
    fairy.style.marginTop = value * 0.025 + 'vw';
    witch.style.marginTop = value * 0.024 + 'vw';
    bird.style.marginTop = value * 0.02 + 'vw';
    bg.style.filter = 'blur('+ value / 600 +'px)';
});

