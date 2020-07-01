var TAB = '    ';         // The number of spaces you want your CSS code indented
var image = $('img');

/*
 * =========================================================== *
 *                                                             *
 *     set default values                                      *
 *                                                             *
 * =========================================================== *
 */
 $('#padding-top').val("0");
 $('#padding-right').val("0");
 $('#padding-bottom').val("0");
 $('#padding-left').val("0");
 $('#border-radius').val("0");
 $('#width').val("160");

function disableClicks() {
                
    // Do nothing if the user clicks the qr
    $('.qrcode').click(function(e) {
        e.preventDefault();
    });
    $('img').on('click hover contextmenu', function(e) {
        e.preventDefault();
    }).attr('draggable', false);
}

/*
 * =========================================================== *
 *     generate functions                                      *
 *     generates the qr code, and the embed code               *
 * =========================================================== *
 */
function generateCode() {

    $('#qrcode').html('');

    var qrcode = new QRCode("qrcode");     
    
    var qrText = $('#qr-text').val();
        
    if (!$('#qr-text').val()) {
        $('#qr-text').focus();
        return;
    } else {
        qrcode.makeCode($('#qr-text').val());
    }

    disableClicks();
    generateEmbedCode();

    switch($('#code-type').val()) {
        case 'text':
            $('#qr-text-label').text("QR code text:");
            //$('#qr-text').val('QR Code');
            break;
        case 'url':
            $('#qr-text-label').text("QR code url:");
            //$('#qr-text').val('https://example.com');
            break;
        case 'email':
            $('#qr-text-label').text("QR code email address:");
            //$('#qr-text').val('user@example.com');
            break;
        case 'phone':
            $('#qr-text-label').text("QR code phone number:");
            //$('#qr-text').val('123-456-7890');
            break;
    }

    // Adjust the <article> padding-top so that it clears the new header size
    $('article').css('padding-top', $('header').height() + 2);
}

function generateCodeReset() {
    $('#qrcode').html('');

    var qrcode = new QRCode("qrcode");     
    
    var qrText = "QR Code";
    $('#qr-text').val("QR Code");

    qrcode.makeCode($('#qr-text').val());

    $('#code-src').text("");
    disableClicks();

    // Adjust the <article> padding-top so that it clears the new header size
    $('article').css('padding-top', $('header').height() + 2);
}

 function generateEmbedCode() {
    //
 }

/*
 * ========================================================= *
 * initializeColorPickers()                                  *
 *     This function initializes the Spectrum color pickers  * 
 *     for the button's text, background, and border colors. *
 * ========================================================= *
 */
function initializeColorPickers() {

    // Text color picker
    	$("#color").spectrum({
    	    color: "hsl(0, 0%, 100%)",
    	    flat: false,
    	    showInput: true,
    	    showAlpha: true,
    	    className: "full-spectrum",
    	    showButtons: false,
    	    showInitial: true,
    	    showPalette: true,
    	    showSelectionPalette: true,
    	    maxSelectionSize: 10,
    	    preferredFormat: "hsl",
    	    localStorageKey: "spectrum.demo",
    	    palette: [
    	        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
    	        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
    	        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
    	        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
    	        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
    	        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
    	        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
    	        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
    	        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
    	        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
    	        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
    	        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    	    ]
    	});
    	
    // Background color picker
    	$("#background-color").spectrum({
    	    color: "hsl(0, 68%, 30%)",
    	    flat: false,
    	    showInput: true,
    	    showAlpha: true,
    	    className: "full-spectrum",
    	    showButtons: false,
    	    showInitial: true,
    	    showPalette: true,
    	    showSelectionPalette: true,
    	    maxSelectionSize: 10,
    	    preferredFormat: "hsl",
    	    localStorageKey: "spectrum.demo",
    	    palette: [
    	        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
    	        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
    	        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
    	        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
    	        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
    	        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
    	        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
    	        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
    	        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
    	        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
    	        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
    	        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    	    ]
    	});
    	
    // Border color picker
    	$("#border-color").spectrum({
    	    color: "hsl(0, 0%, 0%)",
    	    flat: false,
    	    showInput: true,
    	    showAlpha: true,
    	    className: "full-spectrum",
    	    showButtons: false,
    	    showInitial: true,
    	    showPalette: true,
    	    showSelectionPalette: true,
    	    maxSelectionSize: 10,
    	    preferredFormat: "hsl",
    	    localStorageKey: "spectrum.demo",
    	    palette: [
    	        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
    	        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
    	        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
    	        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
    	        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
    	        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
    	        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
    	        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
    	        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
    	        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
    	        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
    	        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    	    ]
    	});
}
