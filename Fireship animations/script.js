const observer = new IntersectionObserver((entries) => { // whenever an element appears or leaves the window this invokes the function                                                       
    entries.forEach(entry => {//forEach runs over each element in the list like a for loop //and passes in a list of the elements into entries
        if(entry.isIntersecting){// isIntersecting returns a boolean for if the element is in the window
            entry.target.classList.add("show") // adds the class show to the elements classList
        } else {
            entry.target.classList.remove("show")
        }
    })
})
const hiddenElem = document.querySelectorAll(".hidden")
hiddenElem.forEach((el) => observer.observe(el))