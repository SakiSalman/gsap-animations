
let path = 'M 10 80 Q 250 80 800 80'
const finalPath = 'M 10 80 Q 250 80 800 80'

const stringWrapper = document.getElementById('string-wrapper');


stringWrapper.addEventListener('mousemove', (dets) => {
    path = `M 10 80 Q ${dets.x} ${dets.y} 800 80`;
    gsap.to('#string-wrapper svg path', {
        attr: {
            d: path
        },
        duration: 0.3,
        ease: 'power3.out'
    })
});
stringWrapper.addEventListener('mouseleave', (dets) => {
    gsap.to('#string-wrapper svg path', {
        attr: {
            d: finalPath
        },
          duration: 0.5,
        ease: 'elastic.out(1, 0.2)'
    })
});
