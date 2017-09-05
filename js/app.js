$(document).ready(function(){
    setBindings();
    rollShit();
});

function setBindings(){
  $("nav a").click(function(e){
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";

    $('html body').animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000)
  })
}

// var $tlt = $('.tlt').textillate({
//     autoStart: false,
//     in: { effect: 'hinge', callback: function(){
//     $('.tlt').textillate('out');
//     }},
//     out:{effect: 'rollIn'}
// });
//
// $('.tlt').hover(function () {
//     $tlt.textillate('start');
// });




function rollShit(){
  $(".tlt").hover(function(){
    $(this).textillate({

      in:{ delay: 200,effect: 'hinge', shuffle:true,
      callback: function(){
                $('.tlt').textillate('out');
                }},
      out: {effect: 'rollIn'}
   });
  });
}
