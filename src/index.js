console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl).then(resp => resp.json())
.then(function(json){
    json.message.forEach(function(dogUrl){
        dogImg = document.createElement('img')
        dogImg.src = dogUrl;
        console.log(dogImg)
        document.querySelector('#dog-breeds').appendChild(dogImg);
    })
    
})