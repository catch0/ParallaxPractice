$(document).ready(function(){
    setBindings();
    rollLoad();
//    fadeIn();
    cartoonMe();
});

function setBindings(){
  $("nav a").click(function(e){
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";
    $('html body').animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 2100)
  })
}

function rollLoad(){
    $(".shp").textillate({
      in:{ delay: 200,effect: 'rollIn', reverse:true},
      out: {effect: 'pulse', sequence: true}
   });
}

function cartoonMe(){
    $(".me").click(function(){
        var get = $(this).attr('other');
        var cat = $(this).attr('src');
        $(this).attr('src',get);
        $(this).attr('other',cat);
    })
}




