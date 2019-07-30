const container = document.querySelector('.container');
const FIRST_NAME = document.querySelector('#first__name');
const LAST_NAME = document.querySelector('#last__name');
const LOGIN = document.querySelector('#login');
const EMAIL = document.querySelector('#email');
const COMPANY_NAME = document.querySelector('#company__name');
const PASSWORD = document.querySelector('#password');
const CONFIRM_PASSWORD = document.querySelector('#last__name');

let erorfield_firstName = document.querySelector('#requirement__first__name');
let erorfield_lastName = document.querySelector('#requirement__last__name');
let erorfield_login = document.querySelector('#requirement__login');
let erorfield_email = document.querySelector('#requirement__email');
let erorfield_companyName = document.querySelector('#requirement__company__name');
let erorfield_password = document.querySelector('#requirement__password');
let erorfield_confirmPassword = document.querySelector('#requirement__confirm__password');


function validate(container) {
   if (FIRST_NAME.value == '' || FIRST_NAME.value == ' ') {
      erorfield_firstName.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_firstName.innerHTML = '';
   }

   if (LAST_NAME.value === '' || LAST_NAME.value === ' ') {
      erorfield_lastName.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_lastName.innerHTML = '';
   }

   if (LOGIN.value === '' || LOGIN.value === ' ') {
      erorfield_login.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_login.innerHTML = '';
   }

   if (EMAIL.value === '' || EMAIL.value === ' ') {
      erorfield_email.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_email.innerHTML = '';
   }

   if (COMPANY_NAME.value === '' COMPANY_NAME.value === ' ') {
      erorfield_companyName.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_companyName.innerHTML = '';
   }
}










if (PASSWORD.value === '') {
   erorfield_password.innerHTML = 'This field is required';
   return;
} else {
   erorfield_password.innerHTML = '';
}

if (CONFIRM_PASSWORD.value === '') {
   erorfield_confirmPassword.innerHTML = 'This field is required';
   return;
} else {
   erorfield_confirmPassword.innerHTML = '';
}