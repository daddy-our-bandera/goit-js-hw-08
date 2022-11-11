import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state"
const feedbackForm = document.querySelector(".feedback-form")

feedbackForm.addEventListener("input", throttle(onInputForm,500))
feedbackForm.addEventListener("submit",onSubForm)
addText()
formData =  {}

function onInputForm(evt){
formData[evt.target.name] = evt.target.value

localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function onSubForm(e){
    e.pervenDefault
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    e.target.reset()
    localStorage.removeItem(STORAGE_KEY)
}

function addText(){
    if (localStorage.getItem(STORAGE_KEY)) {
        feedbackForm.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email || ""
        feedbackForm.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message || ""
    }

}