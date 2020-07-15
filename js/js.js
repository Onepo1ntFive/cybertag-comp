$(function () {

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("body").forEach(section => {
        //
        let rotate = gsap.timeline({
            scrollTrigger: {
                trigger: ".b-spin",
                start: "top center",
                end: "+=1000",
                scrub: 1,
                id: "rotate",
                pin: true,
                // markers: true,
            },
            defaults: {
                ease: 'circ.out'
            }
        })

        rotate.fromTo(
            section.querySelector(".spin__block"),
            {
                rotation: 0,
                opacity: .15
            },
            {
                rotation: 30,
                opacity: 1
            },
            "-=1"
        );

        rotate
            .fromTo(
                section.querySelector(".b-spin"),
                { backgroundColor: "#d6ce58" },
                { backgroundColor: "#387a5f" },
                "-=1"
            );

        //
        let laptop = gsap.timeline({
            scrollTrigger: {
                trigger: ".b-picbox",
                start: "center center",
                end: () => "+=" + window.innerHeight * 2.5,
                scrub: 0.5,
                id: "scale",
                pin: true,
                markers: true,
            }
        })

        laptop
            // show layout
            .fromTo(
                section.querySelector(".picbox__picbox__picture-layout"),
                { opacity: 0 },
                { opacity: 1 },
            )
            // show text
            .fromTo(
                section.querySelector(".picbox__picture-text"),
                {
                    opacity: 0,
                    y: -100
                },
                {
                    opacity: 1,
                    y: 0
                }
            )
            // hide layout + text
            .fromTo(
                section.querySelector(".picbox__picbox__picture-layout"),
                { opacity: 1 },
                {
                    opacity: 0,
                    duration: 1.5
                }
            )
            // show laptop behind scene
            .fromTo(
                section.querySelector(".picbox__picture-notebook img"),
                { opacity: 0 },
                { opacity: 1 },
                1
            )
            // scale main picture
            .fromTo(
                section.querySelector(".picbox__picture-pic"),
                { scale: 1 },
                { scale: 0.5 },
                2
            )
            .fromTo(
                section.querySelector(".picbox__picture-pic img"),
                { borderRadius: 0 },
                { borderRadius: 3 },
                2
            )
            // scale notebook with picture
            .fromTo(
                section.querySelector(".picbox__picture-notebook"),
                { scale: 1 },
                { scale: 0.5 },
                2
            )
            // replace picture on laptop
            .fromTo(
                section.querySelector(".picbox__picture-pic .picbox__picture-pic-first"),
                {
                    x: 0,
                    opacity: 1,
                    duratuon: 2
                },
                {
                    x: -100,
                    opacity: 0
                },
                3
            )
            .fromTo(
                section.querySelector(".picbox__picture-pic .picbox__picture-pic-last"),
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1
                },
                3
            )
            // scale down laptop
            .fromTo(
                section.querySelector(".picbox__picture-notebook"),
                { 
                    y: 0,
                    scale: 0.5 
                },
                { 
                    y: '19%',
                    scale: 0.3
                },
                4
            )
            .fromTo(
                section.querySelector(".picbox__picture-pic"),
                { 
                    y: 0,
                    scale: 0.5 
                },
                { 
                    y: '22%',
                    scale: 0.3
                },
                4
            )
            //show tv
            .fromTo(
                section.querySelector(".picbox__picture-tv"),
                {
                    y: '-10%',
                    opacity: 0,
                    scale: 0.4
                },
                { 
                    y: '-6%',
                    opacity: 1,
                    scale: 0.7
                },
                4
            )

    });
});