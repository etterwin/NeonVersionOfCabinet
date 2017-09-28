$(document).ready(function(){
    $('form').on('blur', 'input', checkForValidations);
    $('form').on('focus', 'input', removeValidationClass);
});

function checkForValidations(evt) {
    var $obj = $(this);
    if ($obj.hasClass('required')){
        if (emptyField($obj)) {
            shake($obj);
        }
    }
    if ($obj.hasClass('email')){
        if (!emptyField($obj)){
            validaEmail($obj);
        }
    }
    if ($obj.hasClass('confirmation')){
        if (!emptyField($obj)){
            matchFields($obj);
        }
    }
}

function removeValidationClass(evt) {
    $(this).removeClass('error animated shake');
}

function emptyField($objeto){
    return (($objeto.val() == '') ? true : false);
}

function shake($objeto){
    $objeto.removeClass('success').addClass('error animated shake');
}

function validaEmail($objeto){
    var er = RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    if(er.test($objeto.val()) == false){
        shake($objeto);
    }
}

function matchFields($objeto){
    var parentID = '#' + $objeto.attr('ID').replace('2', '');
    if ($(parentID).val() != $objeto.val()){
        shake($objeto);
    }
}