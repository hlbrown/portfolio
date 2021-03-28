

function popup($target){
    var popup = document.getElementById($target);
    closePopups($target);
    popup.classList.toggle('show');
}
function closePopups($target) {
    var popups = document.getElementsByClassName('prompttext');
    for (i = 0; i < popups.length; i++) {
      if (popups[i].getAttribute('id') != $target) {
        popups[i].classList.remove('show');
        }
    }
}