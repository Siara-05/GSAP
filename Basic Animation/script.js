// NOTE:
// gsap.to() => starts from current/default styles → goes TO the final state
// gsap.from() => starts FROM the final state → animates TO the default/current state

gsap.to("#box1",{
    x:1000,// Moves right by 1000px
    duration: 2,            // Animation lasts 2 seconds
    delay: 1,               // Waits 1 second before starting
    rotate: 360,            // Rotates full circle
    backgroundColor: "yellow",  // Changes background to yellow
    borderRadius: "50%",    // Makes it circular
    scale: 0.5,             // Shrinks to 50%
    repeat: 5,              // Repeats 5 times
})


gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:1,
    rotate:180,
    backgroundColor:"orange",
    // borderRadius:"50%",
    scale:0.2,             // Starts very small
    repeat:5,
})

gsap.to("#box2",{
    borderRadius:"50%",
})

gsap.to("#box3",{
    x:1000,
    rotate:180,
    duration:2,
    delay:1,
    repeat:-1,             // Infinite loop
    borderRadius:"50%",
})





gsap.from("h1",{
    opacity:0,
    duration:2,
    borderRadius:3,
    borderColor: "white",
    y:-10,
})

gsap.from("h2",{
        opacity:0,
        y: 40,
        delay:1,
        duration:2,  
        stagger:1,        // Animates one after another
        repeat:5,
        yoyo:true,        // Goes back and forth
})

gsap.to("h2",{
    repeat:5,
    duration:5,
})
