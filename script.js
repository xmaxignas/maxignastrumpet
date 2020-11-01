$(document).ready(function() {
    $(".img").mouseenter(function() {
      $(this).addClass("hover");
    })
  
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  
  });
  
document.querySelector(".card-flip").classList.toggle("flip");

/* 
 * Holder.js for demo image
 * Just for demo purpose
 */
Holder.addTheme('gray', {
  bg: '#777',
  fg: 'rgba(255,255,255,.75)',
  font: 'Helvetica',
  fontweight: 'normal'
});
