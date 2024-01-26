// Toggler 
const ToggleBtn = document.querySelector(".toggle-button");
const Menu = document.querySelector(".dropdown_menu");


// Function to toggle the menu visibility based on screen size
function toggleMenu() {
    if (window.innerWidth <= 940) {
        Menu.classList.toggle('hidden');
    } else {
        // If the screen size is larger than 900px, ensure the menu is visible
        Menu.classList.remove('hidden');
    }
}

// Initially hide the menu if the screen size is less than or equal to 900px
toggleMenu();

ToggleBtn.addEventListener("click", () =>{
    Menu.classList.toggle('hidden');
})


// Copy to ClipBoard

function copyQuote(){
    //Getting the Text content
    const QuoteBox = document.getElementById("Quote_Box");
    const QuoteText = QuoteBox.value || QuoteBox.innerText;

    const AuthourBox = document.getElementById("Authour_Name");
    const AuthourText = AuthourBox.value || AuthourBox.textContent;

    // Create a textarea element
    const dummy = document.createElement("textarea");

    // Store the value to dummy
    dummy.value = QuoteText + " " + AuthourText;

    // Append the textarea to the body
    document.body.appendChild(dummy);

    // Select the text content of the textarea
    dummy.select();

    // Execute the copy command
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(dummy);
    
}

document.addEventListener('DOMContentLoaded', function(){
    const copyBtn = document.getElementById("Copy_Btn");
    copyBtn.addEventListener('click', function(){
        alert("Copied To Clipboard 👏")
    })
})


// -----DROPDOWN-----
/*const wordsArray = [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success"
  ];
  
  for (let i = 0; i <= 66; i++) {
      console.log(`<a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200" role="menuitem" tabindex="-1" id="menu-item-${i}">${wordsArray[i]}</a>`);
  }
  */




//   Dropdown category Toggle

const Dropdown_Btn = document.getElementById("menu-button");
const DropdownContent = document.getElementById("menu-content");
Dropdown_Btn.addEventListener('click', function() {
    DropdownContent.style.display = (DropdownContent.style.display === 'none' || DropdownContent.style.display === '') ? 'block' : 'none';
}); 



// Selected category
// Adding event listener to all the menu items

const AllMenuitems = document.querySelectorAll("#menu-content div a");
const SVGArrow = document.getElementById("arrow_down");
AllMenuitems.forEach(function(Menucontent){
    Menucontent.addEventListener("click", function(){
        Dropdown_Btn.textContent = Menucontent.textContent;

        //Disable the dropdown
        DropdownContent.style.display = 'none';
        Dropdown_Btn.appendChild(SVGArrow);
    })
})



// ----API---
// const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e50e35e2d2msh291fdd6bee2177cp1e738ajsn1fc6076491d0',
		'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
	}
};

const getQuote = (category)=>{
    fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?category=' + category,options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        quote_span.innerHTML = response[0].quote;
        author_span.innerHTML= '-' + ' ' + response[0].author;
    })
    .catch(err => console.error(err));
}

const NewQuote = document.getElementById("new_quote");
NewQuote.addEventListener('click', (e)=>{
    e.preventDefault();
    const CategoryType = document.getElementById("menu-button");
    const Categorytext = CategoryType.value || CategoryType.textContent;
    getQuote(Categorytext);
})

// Default Function call
getQuote("success");