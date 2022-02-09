window.onload = function (){
    var radio_buttons_arr = [];
    const begrundung_divs = document.querySelectorAll('[class = "begründung"]');
    begrundung_divs.forEach(item => item.style.display = 'none');
    radio_buttons_arr = Array.from(document.querySelectorAll('[type="radio"]'));

    //remove every 2nd element, need only yes-buttons
    let i = radio_buttons_arr.length;
    while (i--) {
        (i+1) % 2 === 0 && radio_buttons_arr.splice(i,1);
    }

    const coll = document.getElementsByClassName("collapsible");
    const cont = document.getElementsByClassName("content");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = cont[i];
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}