var controller = new ScrollMagic.Controller();

var tween = TweenMax.to("#animation1", 1.5, {opacity: 1}, {opacity: 0});

new ScrollMagic.Scene({triggerElement: "#animation1", duration: 800})
    .setTween(tween)
    .setPin('#animation1')
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#animation1", duration: 800})
//     .setTween(tween)
//     .setPin('#animation1')
//     .addIndicators() // add indicators (requires plugin)
//     .addTo(controller);