let text = document.getElementById('text');
let castle = document.getElementById('castle');
let fox = document.getElementById('fox');
let mermaid = document.getElementById('mermaid');
let fairy = document.getElementById('fairy');
let witch = document.getElementById('witch');
let bird = document.getElementById('bird');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let initialLeftMargin = 3; 
    //scroll and margin

    let scrollFactor = 0.005;  
    let smallerElementSize = 1200 - value * 0.05;

    castle.style.marginTop = value * 0.027 + 'vw';
    castle.style.width = smallerElementSize + 'px';
    castle.style.height = 400 + smallerElementSize + 'px';
    castle.style.left = 7 + initialLeftMargin + value * (scrollFactor*0.3) + '%';

    text.style.marginTop = value * 0.034 + 'vw';
    text.style.width = 350 + smallerElementSize - 800 + 'px';
    text.style.height = smallerElementSize - 800 + 'px';
    text.style.left = 23 + initialLeftMargin + value * (scrollFactor*0.3) + '%';

    fox.style.marginRight = value * 0.01 + 'px';
    fox.style.marginTop = value * 0.3 + 'px';
    fox.style.width = smallerElementSize + 'px';
    fox.style.height = 400 + smallerElementSize + 'px';
    fox.style.left = 10 + initialLeftMargin + value * scrollFactor + '%';

    mermaid.style.marginTop = value * 0.34 + 'px';
    mermaid.style.marginLeft = value * 0.025 + 'px';
    mermaid.style.width = smallerElementSize + 'px';
    mermaid.style.height = 400 + smallerElementSize + 'px';
    mermaid.style.left = 5 + initialLeftMargin + value * scrollFactor + '%';

    fairy.style.marginRight = value * 0.025 + 'px';
    fairy.style.marginTop = value * 0.35+ 'px';
    fairy.style.width = smallerElementSize + 'px';
    fairy.style.height = 400 + smallerElementSize + 'px';
    fairy.style.left = 10 + initialLeftMargin - value * scrollFactor + '%';

    witch.style.marginLeft = value * 0.025 + 'px';
    witch.style.marginBottom = value * 0.025 + 'px';
    witch.style.marginTop = value * 0.02 + 'vw';
    witch.style.width = smallerElementSize + 'px';
    witch.style.height = 400 + smallerElementSize + 'px';
    witch.style.left = 5 + initialLeftMargin - value * scrollFactor + '%';
    
    bird.style.marginTop = value * 0.35 + 'px';
    bird.style.width = smallerElementSize + 'px';
    bird.style.height = 400 + smallerElementSize + 'px';
    bird.style.left = 7 + initialLeftMargin + value * scrollFactor + '%';

});
