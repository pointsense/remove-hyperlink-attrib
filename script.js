<script>
(function($){
	$(document).ready(function(){
		$("ul.mlfi-wrapper").find("a").each(function(){ // this is the wrapper
			var linkText = $(this).text();
			$(this).before(linkText);
			$(this).remove();
		});  
	}); // end of bracket
    
})(jQuery);

</script>

//this below will removed all a hyperlink which has class name = disabled

(function($){
	$(document).ready(function(){
	   $(".mlfi-wrapper a").each(function(){
        //if($(this).hasClass("disabled")){
            $(this).removeAttr("href");
        }
    });	
	}); // end of bracket
    
})(jQuery);
