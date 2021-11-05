/* PROGRESS BAR */  
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 }
});

/* HAMBURGER-BTN */
const hamburgerBtn = document.querySelector('.hamburger-btn');
const primaryMenu = document.querySelector('.primary-menu');

hamburgerBtn.addEventListener('click', () =>{
  primaryMenu.classList.toggle('show');
});

/* KICK ANIMATION*/
const kick = document.querySelector('#kick');
setTimeout(() => {
    kick.classList.add('active');
}, 1000);

/* IT ANIMATION*/
const it = document.querySelector('#it');
setTimeout(() => {
    it.classList.add('active');
}, 1000);

/* SVG IPHONE ANIMATION*/
const iphoneTitle = document.querySelector('#iphone-title');
setTimeout(() => {
    iphoneTitle.classList.add('active');
}, 1000);

/* HOME PAGE SHOE ZOOM FEATURE*/
const zoomables = document.querySelectorAll('.zoomable');

function offset(el){
    const rect = el.getBoundingClientRect();
    const offset = { 
        top: rect.top + window.scrollY, 
        left: rect.left + window.scrollX, 
    };
    return offset;
}

zoomables.forEach(zoomable  => {
    makeZoomable(zoomable);
});

function makeZoomable(zoomable){
    // get attributes
    const scale = Number(zoomable.getAttribute('data-zoom'));
    const zoomRadius = Number(zoomable.getAttribute('data-zoom-radius'));
    // get the main image
    const mainImage = zoomable.querySelector('img');
    // clone that image
    const zoomedImage = mainImage.cloneNode(true);
    // add zoomed class
    zoomedImage.className = 'zoomed';
    // scale it
    zoomedImage.style.transform = 'scale('+scale+')';
    // insert
    zoomable.append(zoomedImage);
    // listen for mouse move
    zoomable.addEventListener('mousemove', (e) => {
        const pos = getRelativePos(e, zoomable);
        zoomedImage.style.clipPath = 'circle('+zoomRadius+'px at '+pos.xPer+'% '+pos.yPer+'%)';
    });
}

function getRelativePos(e, el){
    const top = offset(el).top;
    const left = offset(el).left;
    const x = e.pageX - left;
    const y = e.pageY - top;

    let xPer = x/el.offsetWidth*100;
    let yPer = y/el.offsetHeight*100;
    
    if(xPer < 0) xPer = 0;
    if(yPer < 0) yPer = 0;

    return {
        xPer: xPer,
        yPer: yPer
    };
}

/* SPLIT SCREEN SLIDER*/
document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
}

wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + 'px';
    topLayer.style.width= e.clientX + skew + delta + 'px';
 });
});

/* IMAGE GALLERY */
const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}


