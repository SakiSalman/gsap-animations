const mainDiv = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
let cursorWidth = 20;
let cursorHeight = 20;

let initialCursorWidth = 20;
let initialCursorHeight = 20;

window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        duration: 0.2,
        x: dets.x,
        y: dets.y,
        ease: "circular.out",
    });
});

mainDiv.addEventListener("mouseenter", (dets) => {
    cursorWidth= 100;
    cursorHeight = 100;
    gsap.to(cursor, {
        duration: 0.2,
        x: dets.x,
        y: dets.y,
        ease: "circular.out",
        width: cursorWidth,
        height: cursorHeight,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
});
mainDiv.addEventListener("mouseleave", (dets) => {
    cursorWidth= 100;
    cursorHeight = 100;
    gsap.to(cursor, {
        duration: 0.2,
        x: dets.x,
        y: dets.y,
        ease: "circular.out",
        width: initialCursorWidth,
        height: initialCursorHeight,
    });
});
