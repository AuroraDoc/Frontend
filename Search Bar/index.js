const userCard = document.querySelector("[data-user-template]")
const cardContainer = document.querySelector(".cards-container")
const searchInput = document.querySelector("#search")

const users = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase// takes the value of the element that has input into it
    users.forEach(user => {
        const isVisible = 
            user.name.toLowerCase().includes(value) || 
            user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible) //its the opposite of isVisible since if its matching we dont want to hide it.
    })
})

fetch('api link here!')// fetch user data
    .then(res => res.json())
    .then(data =>{
        users = data.map(user => {
            const card = userCard.content.cloneNode(true).children[0] // all this does is select the card then get all content in it then clone it
            // it returns a document fragment and to use the content in it you just need to select the first child
            const header = document.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = user.name // in each object in the example there is a key called name same with email below
            body.textContent = user.email
            cardContainer.append(card)
            return { name: user.name, email: user.email, element: card }
        });
})

