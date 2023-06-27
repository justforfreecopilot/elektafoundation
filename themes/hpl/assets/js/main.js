jQuery(document).ready(function($) {
    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
    });
    $('.navbar .dropdown > a').click(function(){
        location.href = this.href;
    });
    //
    var dayjs = require('dayjs');
	//import dayjs from 'dayjs' // ES 2015
	dayjs().format();
	//
    if (typeof timeline == 'function') {
	   timeline(dayjs);
    }

    $('form#contact-form').submit((e)=>{
        e.preventDefault();
        const self = $(this);
        const formData = {
            name: self.find('#name').val(),
            email: self.find('#email').val(),
            telephone: self.find('#telephone').val(),
            organisation: self.find('#organisation').val(),
            message: self.find('#message').val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://prod.gimbou.com',
            data: JSON.stringify(formData),
            success: (data)=>{
                $('#contact-form').hide();
                $('#contact-success').show()
            },
            error: (data)=>{
                $('#contact-form').hide();
                $('#contact-error').show()
            },
            dataType: 'json'
        });
            
    });

    $('a.vidyard-trigger').click(function() {
        try {
            let player = VidyardV4.api.getPlayersByUUID($(this).data('video'))[0]
            player.showLightbox()
            player.on('ready', function() {
                player.play()
            });
        }
        catch(e) {
            console.log(e)
        }

        return false
    })

});