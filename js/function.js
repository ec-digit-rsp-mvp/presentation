// FOOTER ANIMATION
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("footer").style.bottom = "-75px";
    } else {
        document.getElementById("footer").style.bottom = "0";
    }
    prevScrollpos = currentScrollPos;
}

// ANIMATION FULLPAGE OPTION
$(document).ready(function() {
    $('#fullpage').fullpage({

//Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['cover', 'index','chapter-01', 'chapter-02', 'chapter-03', 'chapter-04', 'chapter-05',, 'chapter-06', 'chapter-07', 'chapter-08'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['', ''],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

//Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: false,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: true,
        loopTop: true,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: true,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 10,
        bigSectionsDestination: null,

//Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

//Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : [],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

//Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

//events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

// ANIMATION FULLPAGE METHOD
//MOVE UP
$(document).on('click', '#moveUp', function(){
    fullpage_api.moveSectionUp();
});

//MOVE DOWN
$(document).on('click', '#moveDown', function(){
    fullpage_api.moveSectionDown();
});

// SWIPER SLIDER
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        clickable: true,
    },
})

