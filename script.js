// references
const submitButton = document.getElementById("submit_button")
const userInputs = document.querySelectorAll("input")
const title = document.getElementById("main_title")
const result = document.getElementById("story_result")
const form = document.querySelector("form")

//functions
function updateTitle() {title.innerHTML = userInputs[0].value}

function createAdlib(refresh) {
    refresh.preventDefault();

    // checking if any of the spaces were left blank by scanning through the array of inputs
    for (let i = 0; i < userInputs.length; i++) {
        if (userInputs[i].value == "") {
            alert("Please fill in all fields.");
            return 0 // this return serves to break out of the function if the inputs are invalid
        }
    }

    // I didn't need to define these since they're only being used once, but I
    // figured that they'd just make my code more readable so
    let noun = userInputs[1].value
    let verb = userInputs[2].value
    let adjective = userInputs[3].value
    result.innerText = "Today, I went to my local " + noun + " to do my daily " + verb + ". It was quite the " + adjective + " day.";

    // making the display disappear after we're done
    form.style.display = "none"
}

// checking for if the title has been changed and for if the button has been pressed
userInputs[0].addEventListener("input", updateTitle);
submitButton.addEventListener("click", createAdlib)