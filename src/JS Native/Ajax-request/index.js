const imgNumber = document.querySelector('#img-number');
const showMeButton = document.querySelector('#show-me');
showMeButton.addEventListener('click', makeRequest);


function makeRequest() {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${imgNumber.value}&count=3`, {
        success: function (data) {
            data.forEach(el => {
                const img = document.createElement('img');
                img.src = el.thumbnail;
                document.querySelector('#result').appendChild(img);
            })
        }
    });
}

console.log(1)