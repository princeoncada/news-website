

let no_heart = '<i class="fa-regular fa-heart" style="color: #a0acc0;"></i>';
let yes_heart = '<i class="fa-solid fa-heart" style="color: #005eff;"></i>';
let read = '<i class="fa-sharp fa-solid fa-circle-check"></i>';

let state = [];
let hearts = $('.heart')
let overlays = $('.image-overlay')
let destroyers = $('.delete-card i')
let menu = $('.icon-container')

menu.on('click', function() {
    if (document.querySelector('.menu').checked) {
        document.querySelector('.menu').checked = false;
        $('.icon-container i').removeClass('fa-xmark').addClass('fa-bars');
    }else {
        document.querySelector('.menu').checked = true;
        $('.icon-container i').removeClass('fa-bars').addClass('fa-xmark');
    }
    
})

destroyers.each(function(index, destroyer) {
    destroyer.addEventListener('click', function() {
        let card = destroyer.parentElement.parentElement.parentElement.parentElement;
        card.remove();
    })
});

hearts.each(function(index, heart) {
    state.push(false);
    heart.addEventListener('click', function() {
        if(state[index] == false) {
            this.innerHTML = yes_heart;
            state[index] = true;
        }else {
            this.innerHTML = no_heart;
            state[index] = false;
        }
    })
});

overlays.each(function(index, overlay) {
    overlay.addEventListener('click', function() {
        let card = overlay.parentElement.parentElement;
        card.querySelector('.read').innerHTML = read;
    })
});






