Reveal.addEventListener("ready",function(){QUnit.module("API"),test("Reveal.isReady",function(){strictEqual(Reveal.isReady(),!0,"returns true")}),test("Reveal.isOverview",function(){strictEqual(Reveal.isOverview(),!1,"false by default"),Reveal.toggleOverview(),strictEqual(Reveal.isOverview(),!0,"true after toggling on"),Reveal.toggleOverview(),strictEqual(Reveal.isOverview(),!1,"false after toggling off")}),test("Reveal.isPaused",function(){strictEqual(Reveal.isPaused(),!1,"false by default"),Reveal.togglePause(),strictEqual(Reveal.isPaused(),!0,"true after pausing"),Reveal.togglePause(),strictEqual(Reveal.isPaused(),!1,"false after resuming")}),test("Reveal.isFirstSlide",function(){Reveal.slide(0,0),strictEqual(Reveal.isFirstSlide(),!0,"true after Reveal.slide( 0, 0 )"),Reveal.slide(1,0),strictEqual(Reveal.isFirstSlide(),!1,"false after Reveal.slide( 1, 0 )"),Reveal.slide(0,0),strictEqual(Reveal.isFirstSlide(),!0,"true after Reveal.slide( 0, 0 )")}),test("Reveal.isLastSlide",function(){Reveal.slide(0,0),strictEqual(Reveal.isLastSlide(),!1,"false after Reveal.slide( 0, 0 )");var e=document.querySelectorAll(".reveal .slides>section").length-1;Reveal.slide(e,0),strictEqual(Reveal.isLastSlide(),!0,"true after Reveal.slide( ",0+e+" )"),Reveal.slide(0,0),strictEqual(Reveal.isLastSlide(),!1,"false after Reveal.slide( 0, 0 )")}),test("Reveal.getIndices",function(){var e=Reveal.getIndices();ok(typeof e.hasOwnProperty("h"),"h exists"),ok(typeof e.hasOwnProperty("v"),"v exists"),ok(typeof e.hasOwnProperty("f"),"f exists"),Reveal.slide(1,0),ok(1===Reveal.getIndices().h&&0===Reveal.getIndices().v,"h 1, v 0"),Reveal.slide(1,2),ok(1===Reveal.getIndices().h&&2===Reveal.getIndices().v,"h 1, v 2"),Reveal.slide(0,0)}),test("Reveal.getSlide",function(){var e=document.querySelector(".reveal .slides>section:first-child");equal(Reveal.getSlide(0),e,"gets correct first slide"),strictEqual(Reveal.getSlide(100),void 0,"returns undefined when slide can't be found")}),test("Reveal.getPreviousSlide/getCurrentSlide",function(){Reveal.slide(0,0),Reveal.slide(1,0);var e=document.querySelector(".reveal .slides>section:first-child"),t=document.querySelector(".reveal .slides>section:nth-child(2)>section");equal(Reveal.getPreviousSlide(),e,"previous is slide #0"),equal(Reveal.getCurrentSlide(),t,"current is slide #1")}),test("Reveal.getScale",function(){ok("number"==typeof Reveal.getScale(),"has scale")}),test("Reveal.getConfig",function(){ok("object"==typeof Reveal.getConfig(),"has config")}),test("Reveal.configure",function(){strictEqual(Reveal.getConfig().loop,!1,'"loop" is false to start with'),Reveal.configure({loop:!0}),strictEqual(Reveal.getConfig().loop,!0,'"loop" has changed to true'),Reveal.configure({loop:!1,customTestValue:1}),strictEqual(Reveal.getConfig().customTestValue,1,"supports custom values")}),test("Reveal.availableRoutes",function(){Reveal.slide(0,0),deepEqual(Reveal.availableRoutes(),{left:!1,up:!1,down:!1,right:!0},"correct for first slide"),Reveal.slide(1,0),deepEqual(Reveal.availableRoutes(),{left:!0,up:!1,down:!0,right:!0},"correct for vertical slide")}),test("Reveal.next",function(){Reveal.slide(0,0),Reveal.next(),deepEqual(Reveal.getIndices(),{h:1,v:0,f:void 0}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:1,v:1,f:void 0}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:1,v:2,f:void 0}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:0}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:1}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:2}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:3}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:3,v:0,f:void 0}),Reveal.next(),deepEqual(Reveal.getIndices(),{h:3,v:0,f:void 0})}),QUnit.module("Fragments"),test("Sliding to fragments",function(){Reveal.slide(2,0,0),deepEqual(Reveal.getIndices(),{h:2,v:0,f:0},"Reveal.slide( 2, 0, 0 )"),Reveal.slide(2,0,2),deepEqual(Reveal.getIndices(),{h:2,v:0,f:2},"Reveal.slide( 2, 0, 2 )"),Reveal.slide(2,0,1),deepEqual(Reveal.getIndices(),{h:2,v:0,f:1},"Reveal.slide( 2, 0, 1 )")}),test("Stepping through fragments",function(){Reveal.slide(2,0,0),Reveal.next(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:1},"next() goes to next fragment"),Reveal.right(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:2},"right() goes to next fragment"),Reveal.down(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:3},"down() goes to next fragment"),Reveal.down(),Reveal.prev(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:2},"prev() goes to prev fragment"),Reveal.left(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:1},"left() goes to prev fragment"),Reveal.up(),deepEqual(Reveal.getIndices(),{h:2,v:0,f:0},"left() goes to prev fragment")}),asyncTest("fragmentshown event",function(){expect(2);var e=function(e){ok(!0,"event fired")};Reveal.addEventListener("fragmentshown",e),Reveal.slide(2,0),Reveal.slide(2,0),Reveal.slide(2,0,0),Reveal.next(),Reveal.next(),Reveal.prev(),start(),Reveal.removeEventListener("fragmentshown",e)}),asyncTest("fragmenthidden event",function(){expect(2);var e=function(e){ok(!0,"event fired")};Reveal.addEventListener("fragmenthidden",e),Reveal.slide(2,0,2),Reveal.slide(2,0,2),Reveal.prev(),Reveal.prev(),Reveal.next(),start(),Reveal.removeEventListener("fragmenthidden",e)}),QUnit.module("Configuration"),test("Controls",function(){var e=document.querySelector(".reveal>.controls");Reveal.configure({controls:!1}),equal(e.style.display,"none","controls are hidden"),Reveal.configure({controls:!0}),equal(e.style.display,"block","controls are visible")}),test("Progress",function(){var e=document.querySelector(".reveal>.progress");Reveal.configure({progress:!1}),equal(e.style.display,"none","progress are hidden"),Reveal.configure({progress:!0}),equal(e.style.display,"block","progress are visible")}),test("Loop",function(){Reveal.configure({loop:!0}),Reveal.slide(0,0),Reveal.left(),notEqual(Reveal.getIndices().h,0,"looped from start to end"),Reveal.right(),equal(Reveal.getIndices().h,0,"looped from end to start"),Reveal.configure({loop:!1})}),QUnit.module("Events"),asyncTest("slidechanged",function(){expect(3);var e=function(e){ok(!0,"event fired")};Reveal.addEventListener("slidechanged",e),Reveal.slide(1,0),Reveal.slide(1,0),Reveal.next(),Reveal.slide(3,0),Reveal.next(),start(),Reveal.removeEventListener("slidechanged",e)}),asyncTest("paused",function(){expect(1);var e=function(e){ok(!0,"event fired")};Reveal.addEventListener("paused",e),Reveal.togglePause(),Reveal.togglePause(),start(),Reveal.removeEventListener("paused",e)}),asyncTest("resumed",function(){expect(1);var e=function(e){ok(!0,"event fired")};Reveal.addEventListener("resumed",e),Reveal.togglePause(),Reveal.togglePause(),start(),Reveal.removeEventListener("resumed",e)})}),Reveal.initialize();