// menu de sliders

(function(){

    const sliders =[...document.querySelectorAll(".testimony__body")];
    const buttonNext = document.getElementById("next");
    const buttonBefore = document.getElementById("before")
    let value;

    buttonNext.addEventListener("click", () => {
        changePosition(1);
    });

    buttonBefore.addEventListener("click", () => {
        changePosition(-1);
    });


// estamos en la primera slider con la clase distinta a las demas 
    const changePosition = (add) => {
        const currentTestimony = document.querySelector(".testimony__body-show").dataset.id;
        value = parseInt(currentTestimony);
        value += add;
        
        sliders[parseInt(currentTestimony)-1].classList.remove("testimony__body-show")
        if (value === sliders.length+1 || value ===0) {
            value = value === 0? sliders.length : 1;
        }

        sliders[value-1].classList.add("testimony__body-show")
    }


})();