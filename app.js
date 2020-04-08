let selectedGender;
let height;
let weight;
let age;
let bmi;

const resetValues = () => {
   selectedGender = "male";
   height = 184;
   weight = 77;
   age = 26;
   bmi = 0;
}
const $main = document.querySelector('#main');
const $result = document.querySelector('#result');
const $genderCards = document.querySelectorAll(".gender-card");
const $slider = document.querySelector('.slider');
const $weight = document.querySelector('.weight');
const $weightMinus = document.querySelector('.weight + .pm-container > .minus');
const $weightPlus = document.querySelector('.weight + .pm-container > .plus');
const $ageMinus = document.querySelector('.age + .pm-container > .minus');
const $agePlus = document.querySelector('.age + .pm-container > .plus');
const $age = document.querySelector('.age');
const $submit = document.querySelector('.calculate');
const $reset = document.querySelector('.reset');

const initValues = () => {
   resetValues();

   $slider.value = height;
   $weight.innerHTML = weight;
   $age.innerHTML = age

   setHeightText();

   window.location.hash = "main";

   $main.classList.remove('hide');
   $result.classList.add('hide');
   $submit.classList.remove('hide')
};
const addInactive = () => $genderCards.forEach(el => el.classList.add("inactive"));
const setHeightText = () => document.querySelector(".height > .val").innerHTML = height;
const setBmiText = () => document.querySelector(".bmi").innerHTML = bmi;
const decrementWeight = () => $weight.innerHTML = --weight;
const incrementWeight = () => $weight.innerHTML = ++weight;
const decrementAge = () => $age.innerHTML = --age;
const incrementAge = () => $age.innerHTML = ++age;
const calculateBmi = () => weight / Math.pow(height / 100, 2);

initValues();


$genderCards.forEach(el => {
   el.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      addInactive()
      event.target.classList.remove("inactive");
      selectedGender = event.target.getAttribute("data-gender");
   })
});
$slider.oninput = function () { height = this.value; setHeightText(); }
$weightMinus.addEventListener('click', decrementWeight);
$weightPlus.addEventListener('click', incrementWeight);
$ageMinus.addEventListener('click', decrementAge);
$agePlus.addEventListener('click', incrementAge);
$submit.addEventListener('click', () => {

   console.log('selectedGender', selectedGender)
   console.log('height', height)
   console.log('weight', weight)
   console.log('bmi', bmi);

   bmi = parseFloat(weight / Math.pow(height / 100, 2)).toFixed(2);
   setBmiText();

   window.location.hash = "result";
   $main.classList.add('hide');
   $result.classList.remove('hide');
   $submit.classList.add('hide')
});
$reset.addEventListener('click', initValues);