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
