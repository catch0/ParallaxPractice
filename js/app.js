$(document).ready(function(){
    setBindings();
    rollLoad();
//    fadeIn();
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



