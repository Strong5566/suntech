
function menutoggle(){
  $('.site-header-toggle').mousedown(function(){
    $('.site-header-toggle>ul').toggle();
  });
};

$(document).ready(menutoggle);
