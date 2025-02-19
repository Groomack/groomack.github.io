"use strict";

//Открытие модального окна
$('a.order').on('click', function(event) {
	event.preventDefault();

	$('body').css({'overflow': 'hidden',});

	$('.overlay').fadeIn(50, function() {
		$('.modal').css({'display': 'flex',})
		.animate({'bottom':'0', 'opacity': '1'}, 500);
	});
});

//Закрытие модального окна
$('.close, .overlay').on('click', function() {
	$('body').css({'overflow': 'visible',});

	$('.modal').animate({'bottom': '50%', 'opacity': '0'}, 500, function() {
		$('.overlay').fadeOut(50);
	});
});

//Ajax запрос на отправку формы на почту
$("form").submit( function(event) {
        event.preventDefault();

        let form_data = $(this).serialize();
        $.ajax({
        type: "POST",
        url: "../send.php",
        data: form_data
  		}).done( () => {
            	console.log("Отправлено");

				$(this).animate({'opacity' : '0'}, 1000).remove();
				
				$('.modal').animate({'width' : '325px', 'height' : '45px'}, 1000);
				$('.sendSucces').removeAttr('hidden').animate({'opacity' : '1'});
    			$('.close').css({'position' : 'absolute', 'top' : '7px', 'right' : '10px'});			
            
        }).fail( () => {
            console.log("Ошибка");
        });
}); 