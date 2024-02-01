var tl = gsap.timeline()


tl.from(".nav img, .nav a, .nav button",{
    y:-80,
    duration:0.6,
    delay:0.6,
    opacity:0,
    stagger:0.1
})
tl.from("#main h1", {
    x:-100,
    duration:1,
    delay:0.8,
    opacity:0,
    stagger:0.2
})
tl.from("#main h2",{
    x:100,
    opacity:0,
    duration:1
})
tl.from(".btn-1",{
    y:100,
    opacity:0,
    duration:1
})
gsap.from("#page2 .box, .box1, .box2, #page2 img, h3",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller: "body",
    }
})
