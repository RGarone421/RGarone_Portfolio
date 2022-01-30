// $(document).ready(function(){
//     $(".button-collapse").sieNav();
//     $('.parallax').parallax();
// });



// $('a[href*="#"]')
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) {
//             return false;
//           } else {
//             $target.attr('tabindex','-1');
//             $target.focus();
//           };
//         });
//       }
//     }
//   });

// I got the above code from, css-tricks.com
//However, it doesn't seem to work.
//I was going for the smooth school whenever you click one of my links
//I tried adding an ID to each section and it didn't seem to work.
//Considering I already have a jump function, I figure it was also just pick up on the '#'s.


