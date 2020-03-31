//References
let nameItem = document.getElementById('nameItem');

// Observers
let buttonSendItem = document.getElementById('button');
buttonSendItem.addEventListener('click', getResult);

//Functions
function getResult(){
    let nameItemReference = nameItem.value;
    fetch('http://www.omdbapi.com/?t='+ nameItemReference + '&apikey=3d2c4f6f')
    .then(res => res.json())
    .then(data => {
       const moviesName = data;
        console.log(moviesName);
    })
}

