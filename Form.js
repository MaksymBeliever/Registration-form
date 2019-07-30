const container = document.querySelector('.container');
const FIRST_NAME = document.querySelector('#first__name');
const LAST_NAME = document.querySelector('#last__name');
const LOGIN = document.querySelector('#login');
const EMAIL = document.querySelector('#email');
const COMPANY_NAME = document.querySelector('#company__name');
const PASSWORD = document.querySelector('#password');
const CONFIRM_PASSWORD = document.querySelector('#confirm__password');

let erorfield_firstName = document.querySelector('#requirement__first__name');
let erorfield_lastName = document.querySelector('#requirement__last__name');
let erorfield_login = document.querySelector('#requirement__login');
let erorfield_email = document.querySelector('#requirement__email');
let erorfield_companyName = document.querySelector('#requirement__company__name');
let erorfield_password = document.querySelector('#requirement__password');
let erorfield_confirmPassword = document.querySelector('#requirement__confirm__password');

const NEXT_STEP = document.querySelector('.next__step');

NEXT_STEP.onclick = () => {
   if (FIRST_NAME.value == '' || FIRST_NAME.value == ' ') {
      erorfield_firstName.innerHTML = 'This field is required';
      FIRST_NAME.style.border = '2px solid #750808';
      return;
   } else if (FIRST_NAME.value !== '' || FIRST_NAME.value !== ' ') {
      FIRST_NAME.style.border = '2px solid #b9c9cd';
      erorfield_firstName.innerHTML = '';
   } else {
      erorfield_firstName.innerHTML = '';
   }

   let wraper_first_name = document.querySelector('#wraper_first_name');
   let regLetters = /^[A-Za-z0-16]+$/;
   if (!FIRST_NAME.value.match(regLetters)) {
      wraper_first_name.style.height = 45 + 'px';
      erorfield_firstName.innerHTML = 'Invalid First Name. First Name must have alphabet characters only';
      FIRST_NAME.style.border = '2px solid #750808';
      return false;
   } else {
      wraper_first_name.style.height = 30 + 'px';
   }

   if (LAST_NAME.value == '' || LAST_NAME.value == ' ') {
      erorfield_lastName.innerHTML = 'This field is required';
      LAST_NAME.style.border = '2px solid #750808';
      return;
   } else if (LAST_NAME.value !== '' || LAST_NAME.value !== ' ') {
      LAST_NAME.style.border = '2px solid #b9c9cd';
      erorfield_lastName.innerHTML = '';
   } else {
      erorfield_lastName.innerHTML = '';
   }

   let wraper_last_name = document.querySelector('#wraper_last_name');
   if (!LAST_NAME.value.match(regLetters)) {
      wraper_last_name.style.height = 45 + 'px';
      erorfield_lastName.innerHTML = 'Invalid Last Name. Last Name must have alphabet characters only';
      LAST_NAME.style.border = '2px solid #750808';
      return false;
   } else {
      wraper_last_name.style.height = 30 + 'px';
   }


   if (LOGIN.value == '' || LOGIN.value == ' ') {
      erorfield_login.innerHTML = 'This field is required';
      LOGIN.style.border = '2px solid #750808';
      return;
   } else if (LOGIN.value !== '' || LOGIN.value !== ' ') {
      LOGIN.style.border = '2px solid #b9c9cd';
      erorfield_login.innerHTML = '';
   } else {
      erorfield_login.innerHTML = '';
   }

   let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   if (EMAIL.value == '' || EMAIL.value == ' ') {
      erorfield_email.innerHTML = 'This field is required';
      EMAIL.style.border = '2px solid #750808';
      return;
   } else if (EMAIL.value !== '' || EMAIL.value !== ' ') {
      EMAIL.style.border = '2px solid #b9c9cd';
      erorfield_email.innerHTML = '';
   } else {
      erorfield_email.innerHTML = '';
   }

   if (!regEmail.test(EMAIL.value)) {
      erorfield_email.innerHTML = 'Invalid email';
      EMAIL.style.border = '2px solid #750808';
      return false;
   }

   if (COMPANY_NAME.value == '' || COMPANY_NAME.value == ' ') {
      erorfield_companyName.innerHTML = 'This field is required';
      COMPANY_NAME.style.border = '2px solid #750808';
      return;
   } else if (COMPANY_NAME.value !== '' || COMPANY_NAME.value !== ' ') {
      COMPANY_NAME.style.border = '2px solid #b9c9cd';
      erorfield_companyName.innerHTML = '';
   } else {
      erorfield_companyName.innerHTML = '';
   }

   if (PASSWORD.value == '' || PASSWORD.value == ' ') {
      erorfield_password.innerHTML = 'This field is required';
      PASSWORD.style.border = '2px solid #750808';
      return;
   } else if (PASSWORD.value !== '' || PASSWORD.value !== ' ') {
      PASSWORD.style.border = '2px solid #b9c9cd';
      erorfield_password.innerHTML = '';
   } else {
      erorfield_password.innerHTML = '';
   }

   let wraper_password = document.querySelector('#wraper_password');
   let regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
   if (!PASSWORD.value.match(regPassword)) {
      wraper_password.style.height = 70 + 'px';
      erorfield_password.innerHTML = 'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)';
      PASSWORD.style.border = '2px solid #750808';
      return false;
   } else {
      wraper_password.style.height = 30 + 'px';
   }


   if (CONFIRM_PASSWORD.value == '' || CONFIRM_PASSWORD.value == ' ') {
      erorfield_confirmPassword.innerHTML = 'This field is required';
      CONFIRM_PASSWORD.style.border = '2px solid #750808';
      return;
   } else if (CONFIRM_PASSWORD.value !== '' || CONFIRM_PASSWORD.value !== ' ') {
      CONFIRM_PASSWORD.style.border = '2px solid #b9c9cd';
      erorfield_confirmPassword.innerHTML = '';
   } else {
      erorfield_confirmPassword.innerHTML = '';
   }

   if (PASSWORD.value != CONFIRM_PASSWORD.value) {
      erorfield_confirmPassword.innerHTML = 'Must be equal to password';
      CONFIRM_PASSWORD.style.border = '2px solid #750808';
      return;
   }

   console.log(PASSWORD.value);
   console.log(CONFIRM_PASSWORD.value);

   container.style.display = 'none';
   const container2 = document.querySelector('.container2');
   container2.style.display = 'flex';

   const NEXT__STEP2 = document.querySelector('.NEXT__STEP2');

   NEXT__STEP2.onclick = () => {
      container2.style.display = 'none';
      const container3 = document.querySelector('.container3');
      container3.style.display = 'flex';

      const departmentsForm = document.querySelector('.departmens');
      const vacancyForm = document.querySelector('.vacancy');

      const Edit = document.querySelector('.Edit');

      Edit.onclick = () => {
         container3.style.display = 'none';
         container.style.display = 'flex';
      };

      const Send = document.querySelector('.Send');
   };
};