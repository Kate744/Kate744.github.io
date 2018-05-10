'use strict';

(function () {
  var ERROR_STATUS = 200;
  var TIMEOUT = 10000;
  var URL_SERVER = 'https://js.dump.academy/keksobooking/data';

  var onLoadData = function (onLoad, onError) {
    // запрос на сервер и обратотка ошибок с сервера
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === ERROR_STATUS) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = TIMEOUT;

    xhr.open('GET', URL_SERVER);
    xhr.send();
  };

  // экспорт функции
  window.backend = {
    load: onLoadData
  };
})();
