var controller = new ScrollMagic.Controller();

var tween = TweenMax.to("#animation1", 0.3, {opacity: 1, ease: Linear.easeNone})

new ScrollMagic.Scene({triggerElement: "#animation1", duration: 1500, triggerHook: 0.2})
    .setTween(tween)
    .setPin('#animation1')
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#animation1", duration: 800})
//     .setTween(tween)
//     .setPin('#animation1')
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);