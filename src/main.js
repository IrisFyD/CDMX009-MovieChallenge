//References
let nameItem = document.getElementById('nameItem');
let container = document.getElementById('root');

// Observers
let buttonSendItem = document.getElementById('button');
buttonSendItem.addEventListener('click', getResult);

//Functions
function getResult(){
    let nameItemReference = nameItem.value;
    fetch('http://www.omdbapi.com/?s='+ nameItemReference + '&apikey=3d2c4f6f')
    .then(res => res.json())
    .then(data => {
        //creates a const that saves the results
       const moviesName = data.Search;
       //iterates through each element in moviesName
       moviesName.forEach(element => {
           //Save the content in the  let container
           container.innerHTML += Object.entries(element);
       });
    })
};
