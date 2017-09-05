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



$('.texts').textillate({
    minDisplayTime: 1000,
    in: { effect: 'flipInX', sync: true },
    out :{  delay: 3, effect: 'lightSpeedOut', sync: true},
    loop: true
});


function rollShit(){
  $(".shp").hover(function(){
    $(this).textillate({

      in:{ delay: 200,effect: 'hinge', shuffle:true,
      callback: function(){
                $('.shp').textillate('out');
                }},
      out: {effect: 'rollIn'}
   });
  });
}
