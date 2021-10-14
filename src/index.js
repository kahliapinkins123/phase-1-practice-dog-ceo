console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let dogBreeds = document.querySelector('#dog-breeds');


    fetch(imgUrl).then(resp => resp.json())
    .then(function(json){
        json.message.forEach(function(dogUrl){
            let dogImg = document.createElement('img')
            dogImg.src = dogUrl;
            console.log(dogImg)
            dogBreeds.appendChild(dogImg);
        })
    
    })

    fetch(breedUrl).then(resp=>resp.json())
    .then(function(json){
        console.log(json)
        for (const dogBreed in json.message){
            let li = document.createElement('li');
            li.innerText = dogBreed;
            dogBreeds.appendChild(li);
        }
    })
        
});

