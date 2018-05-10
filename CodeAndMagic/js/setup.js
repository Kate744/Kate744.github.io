
'use strict';

// document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var COUNT = 4;

var getRandomElement = function (x) {
  var randomNumber = Math.round(Math.random() * (x - 1));
  return randomNumber;
};

var getWizard = function () {
  return {name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomElement(WIZARD_SURNAMES.length)],
    coatColor: COAT_COLORS[getRandomElement(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandomElement(EYES_COLORS.length)]};
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < COUNT; i++) {
  fragment.appendChild(renderWizard(getWizard()));
}

similarListElement.appendChild(fragment);

// задание по теме "События"

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-player').querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.setup-player').querySelector('.wizard-eyes');
var fireballWrap = document.querySelector('.setup-fireball-wrap').querySelector('.setup-fireball');
var formOfName = document.querySelector('.setup-title').querySelector('.setup-user-name');

var onPopupEnterPress = function (evt) {
  if (setupClose === document.activeElement) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  }
};

var onPopupEscPress = function (evt) {
  if (formOfName === document.activeElement) {
    if (evt.keyCode === ESC_KEYCODE) {
      return evt;
    }
  } else {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }
  return true;
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.addEventListener('keydown', onPopupEnterPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.addEventListener('keydown', onPopupEnterPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// change the colors of coat, eyes, fireball

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLORS[getRandomElement(COAT_COLORS.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLORS[getRandomElement(EYES_COLORS.length)];
});
fireballWrap.addEventListener('click', function () {
  fireballWrap.style.backgroundColor = FIREBALL_COLORS[getRandomElement(FIREBALL_COLORS.length)];
});
