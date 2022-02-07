const imgNumber = document.querySelector('#img-number');
const showMeButton = document.querySelector('#show-me');
showMeButton.addEventListener('click', () => {
    const promise = getImages(imgNumber.value)
});

function onDataRecieved (data) {
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    })
}