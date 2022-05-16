var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax();

var tween = new TimelineMax();
tween.to("#animation1", 0.3, {ease: Linear.easeNone, opacity: 1}).to("#animation1", 0.3, {ease: Linear.easeNone, opacity: 0}, "+=1");

new ScrollMagic.Scene({triggerElement: "#animation1", duration: 2500, triggerHook: 0.2})
    .setTween(timeline)
    .setPin('#animation1')
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
var tweenmove = TweenMax.fromTo("#animation1", 2, {ease: SlowMo.ease.config(0.7, 0.7, false), y: 50}, {ease: SlowMo.ease.config(0.7, 0.7, false), y: -50});

timeline.add(tweenmove, 0).add(tween, 0);