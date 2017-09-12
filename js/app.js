$(document).ready(function(){
    setBindings();
    rollShit();
    rollLoad();
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


function rollShit(){
  $(".shp").hover(function(){
    $(this).textillate({
      in:{ delay: 200,effect: 'pulse', shuffle:true,
      callback: function(){
                $('.shp').textillate('out');
                }},
      out: {effect: 'rollIn'}
   });
  });
}
