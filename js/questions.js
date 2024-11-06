(function (){

    const titleQuestion = [...document.querySelectorAll(".questions__title")];

    titleQuestion.forEach(question =>{
        question.addEventListener("click", ()=>{
            let heigth = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle("questions__padding-add");
            question.children[0].classList.toggle("questions__arrow-rotate")

            if (answer.clientHeight ===0) {
                heigth = answer.scrollHeight;
            }

            answer.style.height = `${heigth}px`
        })
    })

})();


