
jQuery(document).ready(function() {
	$('.item1').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('.item1-content').css({
			display: 'none'
		});
		$('#item1').fadeIn('slow', function() {
			});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#item1').css({
			display: 'none'
		});
		$('.item1-content').fadeIn('slow', function() {
			
		});		
		
	});
    $('.item2').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $('.item2-content').css({
            display: 'none'
        });
        $('#item2').fadeIn('slow', function() {
            });
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $('#item2').css({
            display: 'none'
        });
        $('.item2-content').fadeIn('slow', function() {
            
        });     
        
    });
    $('.item3').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $('.item3-content').css({
            display: 'none'
        });
        $('#item3').fadeIn('slow', function() {
            });
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $('#item3').css({
            display: 'none'
        });
        $('.item3-content').fadeIn('slow', function() {
            
        });     
        
    });
});


jQuery(document).ready(function() {
    $("#button-overview").click(function() {
        /* Act on the event */
        $('html body').animate({
            scrollTop: $("#overviewbtn").offset().top - 180
    },1500);
});
    $("#button-ma").click(function() {
        /* Act on the event */
        $('html body').animate({
            scrollTop: $("#materials").offset().top - 195
    },1500);
});
    $("#button-about").click(function() {
        /* Act on the event */
        $('html body').animate({
            scrollTop: $("#about").offset().top + 300
    },1500);
});
});