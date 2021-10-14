console.log('%c HI', 'color: firebrick')

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let dogBreeds = document.querySelector('#dog-breeds');
    let dogImgContainer = document.querySelector('#dog-image-container');
    let dropdown = document.querySelectorAll('#breed-dropdown option');


    console.log(dropdown)
    fetch(imgUrl).then(resp => resp.json())
    .then(function(json){
        json.message.forEach(function(dogUrl){
            let dogImg = document.createElement('img')
            dogImg.src = dogUrl;
            dogImgContainer.appendChild(dogImg);
        })
    
    })

    fetch(breedUrl).then(resp=>resp.json())
    .then(function(json){
        for (const dogBreed in json.message){
            let li = document.createElement('li');
            li.innerText = dogBreed;
            dogBreeds.appendChild(li);

            li.addEventListener('click', () => {
                li.style.color = 'blue';
            });
        }
    })

    dropdown.forEach(function(option){
        console.log(option)
        option.addEventListener('click', (e)=> console.log(e))
    })
        
});
