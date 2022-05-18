var controller = new ScrollMagic.Controller();
var timeline = new TimelineMax();

var tween = new TimelineMax();
tween.to("#animation1", 0.3, {ease: Linear.easeNone, opacity: 1}).to("#animation1", 0.3, {ease: Linear.easeNone, opacity: 0}, "+=1");


new ScrollMagic.Scene({triggerElement: "#animation1", duration: 2500, triggerHook: 0.2})
    .setTween(timeline)
    .setPin('#animation1')
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
var tweenmove = TweenMax.fromTo("#animation1", 2, {ease: SlowMo.ease.config(0.7, 0.7, false), y: 50}, {ease: SlowMo.ease.config(0.7, 0.7, false), y: -50});

timeline.add(tweenmove, 0).add(tween, 0);



var timeline2 = new TimelineMax();
var tween2 = new TimelineMax();
tween2.to("#animation2", 0.3, {ease: Linear.easeNone, opacity: 1}).to("#animation2", 0.3, {ease: Linear.easeNone, opacity: 0}, "+=1");

new ScrollMagic.Scene({triggerElement: "#animation2", duration: 2500, triggerHook: 0.3})
    .setTween(timeline2)
    .setPin('#animation2')
    // .addIndicators()
    .addTo(controller);
var tweenmove2 = TweenMax.fromTo("#animation2", 2, {ease: SlowMo.ease.config(0.7, 0.7, false), y: 50}, {ease: SlowMo.ease.config(0.7, 0.7, false), y: -50});

timeline2.add(tweenmove2, 0).add(tween2, 0);



var timeline3 = new TimelineMax();
var tween3 = new TimelineMax();
tween3.to("#animation3", 0.3, {ease: Linear.easeNone, opacity: 1}).to("#animation3", 0.3, {ease: Linear.easeNone, opacity: 0}, "+=1");

new ScrollMagic.Scene({triggerElement: "#animation3", duration: 2500, triggerHook: 0.3})
    .setTween(timeline3)
    .setPin('#animation3')
    // .addIndicators()
    .addTo(controller);
var tweenmove3 = TweenMax.fromTo("#animation3", 2, {ease: SlowMo.ease.config(0.7, 0.7, false), y: 50}, {ease: SlowMo.ease.config(0.7, 0.7, false), y: -50});

timeline3.add(tweenmove3, 0).add(tween3, 0);