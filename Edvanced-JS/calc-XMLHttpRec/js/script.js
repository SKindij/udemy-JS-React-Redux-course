'use strict';

const inputEURO = document.querySelector('#euro'),
      inputUSD = document.querySelector('#usd'),
      inputUAH = document.querySelector('#uah');      

inputEURO.addEventListener('input', () => {
    const request = new XMLHttpRequest();
          // open(method, url, async = true, login, password)
    request.open('GET', 'js/current.json');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
              inputUSD.value = (+inputEURO.value * data.current.usd).toFixed(2);
              inputUAH.value = (+inputEURO.value * data.current.uah).toFixed(2);            
        } else {
            inputUSD.value = "Something went wrong!";
        }
    });

});
