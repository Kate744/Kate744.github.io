'use strict';

var link = document.querySelector(".find-hotel");
var modal = document.querySelector(".form-dates");
var form = modal.querySelector("form");
var dates = modal.querySelector("[type=text]");
var people = modal.querySelector("[type=number]");

modal.classList.add("hid");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (modal.classList.contains("hid")) {
        modal.classList.remove("hid");
        modal.classList.add("modal-show");
    } else if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        modal.classList.add("hid");
    }
});

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!dates.value || !people.value) {
        evt.preventDefault();
        modal.classList.add("modal-error");
        popup.offsetWidth = popup.offsetWidth;
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains("modal-show")) {
            modal.classList.add("hid");
            modal.classList.remove("modal-error");
        }
    }
});
