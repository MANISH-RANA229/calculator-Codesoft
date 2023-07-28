
let screen = document.getElementById('screen');

// Get all the button elements on the page
buttons = document.querySelectorAll('button');


let screenValue = '';

// Loop through each button and add a click event listener to it
for (item of buttons) {
    item.addEventListener('click', (e) => {
        
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

       
        if (buttonText == 'X') {
          
            buttonText = '*';

           
            screenValue += buttonText;

           
            screen.value = screenValue;
        }
       
        else if (buttonText == 'C') {
            // Clear the screenValue variable to reset the calculator
            screenValue = "";

           
            screen.value = screenValue;
        }
        // Check if the clicked button is '=' (equals)
        else if (buttonText == '=') {
            // Use the eval() 
            screen.value = eval(screenValue);
        }
       
        else {
           
            screenValue += buttonText;

        
            screen.value = screenValue;
        }
    })
}

