gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

	if (ScrollTrigger.isTouch !==1) {
		ScrollSmoother.create( {
		wrapper: '.wrappper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	
	});



	gsap.fromTo('.hero-section', {opacity: 1}, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '800',
			scrub: true
		}
	})




}



