console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl).then(resp => resp.json())
.then(function(json){
    json.message.forEach(function(dogUrl){
        let dogImg = document.createElement('img')
        dogImg.src = dogUrl;
        console.log(dogImg)
        document.querySelector('#dog-breeds').appendChild(dogImg);
    })
    
})

fetch(breedUrl).then(resp=>resp.json())
.then(function(json){

})