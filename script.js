const checkBoxList = document.querySelectorAll(".custom-checkbox")
const allInputList = document.querySelectorAll("input")
const errorText = document.querySelector(".red-text")
const currentStatus = document.querySelector(".curr-progress")







const allGoals = JSON.parse(localStorage.getItem("allGoals"))  ||  {}


let completedGoals = Object.values(allGoals).filter((goal)=> goal.completed).length


currentStatus.style.width = `${completedGoals/3 * 100}%`

currentStatus.firstElementChild.innerText =  `${completedGoals}/3 Completed`






checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener("click", ()=>{
        const result = [...allInputList].every((input)=>{
            return input.value
        })
    
        if(result) {

            checkbox.parentElement.classList.toggle("completed")
            allGoals[checkbox.nextElementSibling.id].completed = !allGoals[checkbox.nextElementSibling.id].completed
            localStorage.setItem("allGoals", JSON.stringify(allGoals))

            completedGoals = Object.values(allGoals).filter((goal)=> goal.completed).length


            currentStatus.style.width = `${completedGoals/3 * 100}%`

            currentStatus.firstElementChild.    innerText =  `${completedGoals}/3 Completed`




        } else {
            errorText.classList.add("all-set")
        }


    })





})





allInputList.forEach((input)=>{
    if(allGoals[input.id])  input.value = allGoals[input.id].name

    if(allGoals[input.id] && allGoals[input.id].completed) {
        input.parentElement.classList.add("completed")
    }


    


    input.addEventListener("focus", ()=>{
        errorText.classList.remove("all-set")
        
    })

    input.addEventListener("input", ()=>{

        if(allGoals[input.id] && allGoals[input.id].completed) {
            input.value = allGoals[input.id].name
            return
            
            
        }
        



        allGoals[input.id] = {
            name: input.value,
            completed: false
        }

        localStorage.setItem("allGoals", JSON.stringify(allGoals))

    }


)


})


