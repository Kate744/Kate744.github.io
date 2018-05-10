'use strict';

(function () {

// функция отправки данных на сервер
  var URL = 'https://js.dump.academy/keksobooking';

  var uploadData = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);

  };

  window.upload = {
    upload: uploadData
  };

})();
