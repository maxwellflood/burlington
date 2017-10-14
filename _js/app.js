
// Mobile Navigation

var mobileOpenBtn = document.getElementById('mobile-open-btn');
var mobileCloseBtn = document.getElementById('mobile-close-btn');
var mobileMenu = document.getElementById('nav-mobile');

var mobileNav = {
	open: function(){
		mobileMenu.classList.add('visible');
	},
	close: function(){
		mobileMenu.classList.remove('visible');
	}
};

mobileOpenBtn.onclick = function(){
	mobileNav.open();
	console.log('Vaya con dios brah');
};

mobileCloseBtn.onclick = function(){
	mobileNav.close();
	console.log('Vaya con dios brah');
};

// Swiper

var swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		paginationClickable: true,
		spaceBetween: 16,
		freeMode: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
				1024: {
						slidesPerView: 3,
						spaceBetween: 16
				},
				768: {
						slidesPerView: 3,
						spaceBetween: 16
				},
				640: {
						slidesPerView: 2,
						spaceBetween: 8
				},
				320: {
						slidesPerView: 1,
						spaceBetween: 8
				}
		}
});

// Fade In

$(document).ready(function(){
	$('#page-header').delay(200).addClass("visible");
	$('#second-page-el').delay(200).addClass("visible");
});

$(document).on("scroll", function () {
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();
	var tags = $("section");
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom - 140) {
      $(tag).addClass("visible");
    }
  }
});

// Scroll top (from footer)

$('.btn-top').click(function(){
    $("html, body").animate({ scrollTop: "0px" }, 'slow');
});

// Scroll past header (Header Section button)

$('.scroll').click(function(e){
	e.preventDefault();
  $("html, body").animate({scrollTop: $(".row").offset().top - 74},'slow');
	console.log("via con dios, brah!");
});

// Contact Form

var contactBtn = document.getElementById('nav-contact');
var contactCloseBtn = document.getElementById('contact-close-btn');
var contactSection = document.getElementById('contact-section-wrapper');
var backgroundOverlay = document.getElementById('contact-background-overlay');

var contactForm = {
	open: function(){
		contactSection.classList.add('form-display');
	},
	close: function(){
		contactSection.classList.remove('form-display');
	}
};

contactBtn.onclick = function(e){
	e.preventDefault();
	contactForm.open();
};

backgroundOverlay.onclick = function(){
	contactForm.close();
};

contactCloseBtn.onclick = function(){
	contactForm.close();
};


// POST form data to zapier on submit

$('#call-back-form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/2583128/i1lvgp/',
        type:'post',
        data:$('#call-back-form').serialize(),
        success:function(){
          // Redirect to another success page
          // window.location = "http://google.com";
					$('#contact-section-wrapper').fadeOut('slow');
        }
    });
});

// Go to by scroll

// (function(){
//
//   function goToByScroll(id){
//     	// Remove "link" from the ID
//       id = id.replace("-link", "");
//         // Scroll
//       $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
//       navMenu.removeClass('expanded-mobile-nav');
//   }
//
//   $("#nav-menu-home > li > a").click(function(e) {
//       // Prevent a page reload when a link is pressed
//       console.log("click");
//       e.preventDefault();
//         // Call the scroll function
//       goToByScroll($(this).attr("id"));
//   });
//
//
//   $('button').click(function(){
//     $("html, body").animate({scrollTop: $("#about-section").offset().top},'slow');
// 		console.log("via con dios, brah!");
//   });
//
//   $('#logo').click(function(){
//     $("html, body").animate({ scrollTop: "0px" }, 'slow');
//   });
//
//
// })();
