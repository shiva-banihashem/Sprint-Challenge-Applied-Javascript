// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


topics = document.querySelector(".topics");

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((results) => {
    let topicArray= results.data.topics;
    // console.log(results.data.topics);
    // console.log(topicArray);
    topicArray.forEach(topic=> {
        topics.appendChild(createTab(topic));
    })

    
  })
  .catch((err) => {
    console.log(err);
})


function createTab(topicPar){
    const topic = document.createElement("div");
    topic.classList.add("tab");
    topic.textContent = topicPar;
    return topic
}