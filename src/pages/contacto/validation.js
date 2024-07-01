function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val(num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11)); 
}

function preventNumberInput(e){
    var keycode = (e.keycode ? e.keycode : e.which);
    if (keycode > 47 && keycode < 58 || keycode > 95 && keycode < 107 ){
        e.preventDefault();
    }
}