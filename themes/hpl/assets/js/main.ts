const countryModal = $('#countryModal');
const countryModalSelect = $('#countryModalSelect') as JQuery<HTMLFormElement>;
const countryModalMessage = $('#countryModalMessage');
const countryModalButton = $('#countryModalButton');

// Modal dialog with country selection
$.when($.ready).then(function () {

    if (!getCookie('modalShown')) {
        countryModal.modal('show');

        if (countryModalSelect.val())
            checkModalCountry();

        countryModalSelect.on('change', checkModalCountry);
    }
});

// get a cookie
function getCookie(name: string) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

// set a cookie
function setCookie(name: string, value: boolean, days?: number) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "; expires=" + date.toUTCString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

// check Modal country selection
function checkModalCountry() {
    if (countryModalSelect.val() == 'US' || countryModalSelect.val() == 'CA') {
        countryModalMessage.html(`<div class="alert alert-info">
            Thank you for showing interest in Elekta and our solutions. 
            Due to regulatory restrictions, this content is not intended for U.S. and Canadian audiences.
            <br><br>
            Please click proceed to find out more about our launch in these regions.
        </div>`);

        // unbind previous event handler
        countryModalButton.unbind('click');
        countryModalButton.on('click', function () {
            window.location.href = 'https://success.elekta.com/HPL-Registration';
        });
    } else if (countryModalSelect.val()) {
        countryModalMessage.html(`<div class="alert alert-info">
            Thank you very much. Please click "Proceed".
        </div>`);

        // unbind previous event handler
        countryModalButton.unbind('click');
        countryModalButton.on('click', function () {
            countryModal.modal('hide');

            // set cookie not to show the modal again
            setCookie('modalShown', true);
        });
    } else {
        countryModalMessage.html(`<div class="alert alert-info">
            Please select your country.
        </div>`);

        // unbind previous event handler
        countryModalButton.unbind('click');
    }
}