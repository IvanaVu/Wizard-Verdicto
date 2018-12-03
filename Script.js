function random_number(num) {  // New function called random_choice that takes one parameter, num (or a number)
    // Get a random number between 0 and a passed-in number
    var num = num || 3  // If no number passed in, default to 3
    return Math.floor(Math.random() * num); // Round the answer down (floor) of a random number between 0 and 1 and multiply it by a number. Then return a value and exit the function.
}

function wizard_choice() {  // New function called wizard_choice that doesn't take any parameters 
    var choice = ['Obviously, yes!', 'Hell, no!', 'How the fuck should I know?!'];// The array of choices to pick from 
    var randomNum = random_number(3);  // Use the above function to get a number between 0 and 2
    return choice[randomNum];  // Return the list item the random number function just picked and exit the function 
}


function fill_in_answers(answers) {
    // Find the spans that need filled
    var verdict = document.querySelector('#verdict');  // This says make a new variable and find the HTML tag that has the ID of "verdict" 
   

    // Fill the provided answer
    verdict.innerText = answers['verdict'];
    verdict.innerHTML = answers.verdict;  // Change the content of the element in the HTML doc with the id "verdict" to the "wizard_choice" value in answers 
    
}

function handle_submission(evt) {
    evt.preventDefault();  // Stop the form from reloading the page 
    evt.stopPropagation();  // Stop the form from reloading the page

    // Build up our answers object
    var answers = {
      'verdict':wizard_choice()
    }
    
    // Fill in the answers
    fill_in_answers(answers);

    var answer_div = document.querySelector('#answers');
    answer_div.classList.add('show');
                                        
}

// Find the form on the page and attach a handler for when it's submitted
var form = document.querySelector('#verdicto');  
form.addEventListener('submit', handle_submission);  // Anytime the form is submitted, we want to call the function handle_submission
 
