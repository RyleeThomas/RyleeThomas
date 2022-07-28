/**
 * Validate the contact form 
 */

 const contactFormSubmit = document.getElementById('contact-form-submit');
 contactFormSubmit.addEventListener('click', validateForm);
 //Add the new validation messages to the DOM
 const parent = document.getElementById('validation-messages-container');
 const fullName = document.getElementById('full-name');
 const email = document.getElementById('email');
 const message = document.getElementById('message');
 

 function validateForm(event) {
 
   event.preventDefault();

   //delete any current HTMLMessages
    removeAllChildNodes(parent);

   //full name should be longer than 
  if(!validateName(fullName) ){
    const mesg = 'Invalid Name';
    const alertType = 'red';
    sendHTMLMessage(mesg, alertType);

  } else if(!validateEmail(email)){
    const mesg = 'Invalid Email';
    const alertType = 'red';
    sendHTMLMessage(mesg, alertType);

  }else if(!validateName(message)){
    const mesg = 'Invalid Message';
    const alertType = 'red';
    sendHTMLMessage(mesg, alertType);

  }else {
    //Submit the form
    sendEmail(fullName.value, email.value, message.value);
    document.getElementById('contact-form').reset();
  }
 
 }

 //validate Full Name format
 function validateName(fullName){
  var nameFormat = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
  if(fullName.value.match(nameFormat)){
    return true;
  } else{
    return false;
  }
 }

 //validate Email format
 function validateEmail(email) {
   var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(email.value.match(mailFormat)){
     return true;
   } else {
     return false;
   }
 }

 //Remove Message
 function removeAllChildNodes(parent) {
   while(parent.firstChild) {
     parent.removeChild(parent.firstChild);
   }
 }

 //send Message
 function sendHTMLMessage(mesg, alertType){

    const divElement = document.createElement('p');
    divElement.classList.add(alertType);
    const node = document.createTextNode(mesg);
    divElement.appendChild(node);

    const element = document.getElementById('validation-messages-container');
    element.appendChild(divElement);
 }

 //send Email Info
 function sendEmail(fullName, email, message) {
   alert("Working");
 }