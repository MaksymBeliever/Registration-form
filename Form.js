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

const NEXT_STEP = document.querySelector('.next__step');

NEXT_STEP.onclick = () => {
   if (FIRST_NAME.value === '') {
      erorfield_firstName.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_firstName.innerHTML = '';
   }

   if (LAST_NAME.value === '') {
      erorfield_lastName.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_lastName.innerHTML = '';
   }

   if (LOGIN.value === '') {
      erorfield_login.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_login.innerHTML = '';
   }

   if (EMAIL.value === '') {
      erorfield_email.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_email.innerHTML = '';
   }

   if (COMPANY_NAME.value === '') {
      erorfield_companyName.innerHTML = 'This field is required';
      return;
   } else {
      erorfield_companyName.innerHTML = '';
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

   container.style.display = 'none';
   const container2 = document.querySelector('.container2');
   container2.style.display = 'flex';

   const NEXT__STEP2 = document.querySelector('.NEXT__STEP2');

   NEXT__STEP2.onclick = () => {
      container2.style.display = 'none';
      const container3 = document.querySelector('.container3');
      container3.style.display = 'flex';

      const departments = document.querySelector('.departmens');
      const vacancy = document.querySelector('.vacancy');

      if (departments.option == true) {
         vacancy.disabled = false;
      }

      const Edit = document.querySelector('.Edit');

      Edit.onclick = () => {
         container3.style.display = 'none';
         container.style.display = 'flex';
      };

      const Send = document.querySelector('.Send');
   };
};