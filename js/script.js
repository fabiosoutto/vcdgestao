//=============menu-mobile===========================================
let el = document.querySelector('.menu-icon');

el.addEventListener('click',()=>{
    let menuItens = document.querySelector('.menu-itens');

    if(menuItens.classList.contains('show')){
        menuItens.classList.add('hide');
        menuItens.classList.remove('show');
    }else{
        menuItens.classList.add('show');
        menuItens.classList.remove('hide');
    }
});



//============= botão topo =======================================
window.onscroll = function(){
    scroll();
};

function scroll(){
    let btn = document.getElementById("btntop");
    if (document.documentElement.scrollTop > 150) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function backToTop() {
    document.documentElement.scrollTop = 0;
}

//=============================================================
// video no background
/*$(function() {
	
	// IE detect
	function iedetect(v) {

	    var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
		return r.test(navigator.userAgent);
			
	}

	// For mobile screens, just show an image called 'poster.jpg'. Mobile
	// screens don't support autoplaying videos, or for IE.
	if(screen.width < 800 || iedetect(8) || iedetect(7) || 'ontouchstart' in window) {
	
		(adjSize = function() { // Create function called adjSize
			
			$width = $(window).width(); // Width of the screen
			$height = $(window).height(); // Height of the screen
			
			// Resize image accordingly
			$('#container').css({
				'background-image' : 'url(poster.jpg)', 
				'background-size' : 'cover', 
				'width' : $width+'px', 
				'height' : $height+'px'
			});
			
			// Hide video
			$('video').hide();
			
		})(); // Run instantly
		
		// Run on resize too
		$(window).resize(adjSize);
	}
	else {

		// Wait until the video meta data has loaded
		$('#container video').on('loadedmetadata', function() {
			
			var $width, $height, // Width and height of screen
				$vidwidth = this.videoWidth, // Width of video (actual width)
				$vidheight = this.videoHeight, // Height of video (actual height)
				$aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in
						
			(adjSize = function() { // Create function called adjSize
							
				$width = $(window).width(); // Width of the screen
				$height = $(window).height(); // Height of the screen
							
				$boxRatio = $width / $height; // The ratio the screen is in
							
				$adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size
							
				// Set the container to be the width and height of the screen
				$('#container').css({'width' : $width+'px', 'height' : $height+'px'}); 
							
				if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
					// Set the width of the video to the screen size multiplied by $adjRatio
					$vid = $('#container video').css({'width' : $width*$adjRatio+'px'}); 
				} else {
					// Else just set the video to the width of the screen/container
					$vid = $('#container video').css({'width' : $width+'px'});
				}
								 
			})(); // Run function immediately
						
			// Run function also on window resize.
			$(window).resize(adjSize);
						
		});
	}
	
});*/