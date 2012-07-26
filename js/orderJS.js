$(document).ready(function(){
    $('.backPage').click(function(){
        parent.history.back();
        return false;
    });

   

	$('this').listview();
    


$('#refr').click(function() {
  location.reload();
});



}); /*End of jQuery*/