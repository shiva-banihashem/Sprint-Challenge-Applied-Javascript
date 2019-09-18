// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

cards = document.querySelector(".cards-container");
axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then((results) => {
    
    
    let obj = Object.keys(results.data.articles);
    
    obj.forEach(objKey => {
        
        let articleArray = results.data.articles[objKey];
        
        articleArray.forEach( article => {
          cards.appendChild(createCard(article));
           
        })
    })
    
    
    
  })
  .catch((err) => {
    console.log(err);
})

//function to create DOM structure
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
function createCard(article){

    //Create Elements
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const imgAuthor = document.createElement("img");
    const authorName = document.createElement("span");

    //Create Structure
    
    imgContainer.appendChild(imgAuthor);
    author.appendChild(imgContainer);
    author.appendChild(authorName);

    card.appendChild(headline);
    card.appendChild(author);

    //Apply Styles

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");

//Set contents
    headline.textContent = article.headline;
    imgAuthor.src = article.authorPhoto;
    authorName.textContent= article.authorName;

    return card
}