import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form");
const formData = {
    "email": "",
    "message": ""};

feedbackForm.addEventListener("input", throttle(onInputForm,500));
feedbackForm.addEventListener("submit",onSubForm);
addText();



function onInputForm(){
formData.email = feedbackForm.email.value;
formData.message = feedbackForm.message.value;

localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

function onSubForm(e){
    e.pervenDefault;
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function addText(){
    let saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveData) {
        feedbackForm.email.value = saveData.email || "";
        feedbackForm.message.value = saveData.message || "";
    };

};