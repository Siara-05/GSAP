// // Select the heart container
// const scene = document.querySelector('#scene');

// // Animate it with gentle rotation (like floating effect)
// gsap.fromTo(scene, 
//   { rotation: -0.2 },       // Start rotation
//   {
//     rotation: 0.2,          // End rotation
//     repeat: -1,             // Loop forever
//     yoyo: true,             // Reverse after each loop
//     ease: 'power2.inOut',   // Smooth easing
//     duration: 3             // 3 seconds for full cycle
// });

gsap.fromTo(scene,rotation,{
            y: -0.2
        }, {
            y: 0.2,
            repeat:-1,
            yoyo: true,
            ease:'power2.inOut',
            duration: 3
        })