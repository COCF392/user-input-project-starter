// adlib references
const submitButton = document.getElementById("submit_button")
const title = document.getElementById("main_title")
const adlibResult = document.getElementById("story_result")
const userInputs = document.querySelectorAll("input")
const adlibForm = document.getElementsByClassName("form_container")

// mash references
const mashForm = document.getElementById("mash_form")
const mashButton = document.getElementById("mash_button")
const mashResult = document.getElementById("mash_result")
const mashBox = document.getElementsByClassName("main_container")

// variables for secret message in mash
let hasBeenCreated = false;
let secretMessage;

// adlib functions
function updateTitle() {title.innerHTML = userInputs[0].value}

function createAdlib(refresh) {
    refresh.preventDefault();

    // checking if any of the spaces were left blank by scanning through the array of inputs
    for (let i = 0; i < userInputs.length - 4; i++) {
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
    adlibResult.innerText = "Today, I went to my local " + noun + " to do my daily " + verb + ". It was quite the " + adjective + " day.";

    // making the display disappear after we're done
    adlibForm[0].style.display = "none"
}

// checking for if the title has been changed and for if the button has been pressed
userInputs[0].addEventListener("input", updateTitle);
submitButton.addEventListener("click", createAdlib)

// mash code
function generateMash(refresh) {
    refresh.preventDefault();

    // function to store our method of getting random numbers
    function randNumGenerator(num) {return Math.floor(Math.random() * num)}

    // generating the random home
    function getHome() {
        let homes = ["Mansion", "Castle", "Shack", "House"]
        if (userInputs[4].value != "") {
            homes.push(userInputs[4].value) // adding the input to the array if it isn't just left blank
        }
        return homes[randNumGenerator(homes.length)]
    }

    // generating the number of locations visited
    function getTravelCount() {return randNumGenerator(101)}

    // generating a pet
    function getPet() {
        let randomPets = ["dog", "cat", "Loch Ness Monster", "rock", "turtle", "megalodon"]
        if (userInputs[5].value != "") { 
            // the if statements below flip a coin on whether to choose a pet
            // from the array or to use the pet that the user inputed
            if (randNumGenerator(2) == 1) {return randomPets[randNumGenerator(6)]}
            else {return userInputs[5].value}
        }
        else {return randomPets[randNumGenerator(6)]}
    }

    // generating a job
    function getJob() {
        let jobs = ["Chef", "Cashier", "Musician", "Secret Agent", "Wizard"]
        if (userInputs[6].value != "") {
            jobs.push(userInputs[6].value)
        }
        return jobs[randNumGenerator(jobs.length)]
    }

    // generating a spouse
    function getSpouse() {
        let spouse = ["Kanye West", "Indiana Jones", "Jason Voorhes", "Kamala Harris", "Taylor Swift", "Beyoncé"]
        if (userInputs[7].value) {
            spouse.push(userInputs[7].value)
        }
        return spouse[randNumGenerator(spouse.length)]
    }


    // defining the normal and secret results
    let result = "You will live in a " + getHome() + ", become a " + getJob() + ", travel to " + getTravelCount() + " countries, marry " + getSpouse() + ", and have a pet " + getPet() + "!";
    let secretResult = "You will live in a Castle, become a Wizard, travel to 66 countries, marry Indiana Jones, and have a pet Loch Ness Monster!"

    // returning the result of the mash
    mashResult.innerText = result

    // creating a secret message if it hasne't already been created
    if (!hasBeenCreated) {
        secretMessage = document.createElement("p")
        secretMessage.innerText = "You have quite the fantastical life ahead of you!"
        mashBox[1].insertBefore(secretMessage, mashBox[1].childNodes[4])
        hasBeenCreated = true
    }

    // checking if the mash equals the secret result, then printing the secret message if it does
    if (result == secretResult) {secretMessage.style.display = "block"}
    else {secretMessage.style.display = "none"}
}

// generating the mash
mashButton.addEventListener("click", generateMash)