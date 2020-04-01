//Fuction slider
let index = 1;
showSlides(index);

function nextSlide(){
    showSlides(index+=n);
}

function positionSlide(n){
    showSlides(index=n);
}

setInterval(function time(){
    showSlides(index+=1)
},4000);

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName('ourSlider');
    let bars = document.getElementsByClassName('bar');

    if (n > slides.length){
        index = 1;
    }
    if(n < 1){
        index = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < bars.length; i++){
        bars[i].className = bars[i].className.replace('active', '');
    }
    slides[index-1].style.display = 'block';
    bars[index-1].className += ' active';
}

//References
let nameItem = document.getElementById('nameItem');
let container = document.getElementById('root');

// Observers
let buttonSendItem = document.getElementById('nameButton');
buttonSendItem.addEventListener('click', getResultName);

//Functions
function getResultName(){
    let nameItemReference = nameItem.value;
    fetch('http://www.omdbapi.com/?s='+ nameItemReference + '&apikey=3d2c4f6f')
    .then(res => res.json())
    .then(data => {
        //creates a const that saves the results
       const moviesName = data.Search;
       //iterates through each element in moviesName
       moviesName.forEach(element => {
           //Save the content in the  let container
           const paraph= document.createElement('p')
           paraph.classList.add('card')
           paraph.innerHTML += `
           <a href='javascript:open()'><img src=${element.Poster}/></a>
           `
           container.appendChild(paraph)
       });
    })
};

/*modal*/
function open(){
  document.getElementById('modalWindow').style.display='block';
}


function close(){
  document.getElementById('modalWindow').style.display='none';
}

