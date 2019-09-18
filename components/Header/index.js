// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

//Create elements
 header =document.createElement("div");
 date = document.createElement("span");
 h1Title = document.createElement("h1");
 temp = document.createElement("span");

 //Create Structure
 header.appendChild(date);
 header.appendChild(h1Title);
 header.appendChild(temp);


 header.classList.add("header");
 date.classList.add("date");
 temp.classList.add("temp");


 //Set content
date.textContent = "SMARCH 28, 2019";
h1Title.textContent ="Lambda Times";
temp.textContent = "98°";
return header;
}

headerComp = document.querySelector(".header-container");
headerComp.appendChild(Header());
