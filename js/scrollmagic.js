var controller = new ScrollMagic.Controller();
var tween = new TimelineMax();
tween.to("#animation1", 0.3, {opacity: 1}).to("#animation1", 0.3, {opacity: 0}, "+=1");

new ScrollMagic.Scene({triggerElement: "#animation1", duration: 2500, triggerHook: 0.2})
    .setTween(tween)
    .setPin('#animation1')
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
