const departments = {
   "Sales": [
     "Sales Manager-1",
     "Sales Manager-2",
   ],
   "Marketeng": [
     "Creative Manager-1",
     "Creative Manager-2",
   ]
 }
 
 /**
  * В этот обьект сохраняем те значения
  * департамента и вакансии которые выбрал пользователь
  */
 const formManager = {
   vacancyName: '',
   departmentName: '',
 }
 
 /**
  * Функция для обработки события когда
  * пользователь выбрал вакансию в селекте
  */
 function vacancyOnChangeHandler(option) {
   const vacancyName = option.target.value;
   if (vacancyName !== "Vacancy") {
     formManager.vacancyName = vacancyName;
   } else {
     formManager.vacancyName = '';
   }
 
   console.log('vacancyOnChangeHandler: ', vacancyName);
   console.log('formManager: ', formManager);
 }
 
 /**
  * Функция которая заполняет вакансиями второй селект
  */
 function setVacancies(departmentName) {
   const vacancyForm = document.querySelector('#vacancy-form');
   vacancyForm.innerHTML = '<option value="" disabled selected >Vacancy</option>';
   vacancyForm.onchange = vacancyOnChangeHandler;
   const vacancies = departments[departmentName];
 
   for (let i in vacancies) {
     const vacancyName = vacancies[i];
     const option = document.createElement('option');
     option.innerHTML = vacancyName;
     vacancyForm.appendChild(option);
   }
 }
 
 /**
  * Функция которая срабатывает на событие 
  * выбора департамента пользователем
  */
 function departmentsOnChangeHandler(option) {
   const vacancyForm = document.querySelector('#vacancy-form');
   const departmentName = option.target.value;
   if (departmentName !== "Departments") {
     setVacancies(option.target.value);
     vacancyForm.disabled = false;
     formManager.departmentName = departmentName;
   } else {
     vacancyForm.innerHTML = '<option value="" disabled selected >Vacancy</option>';
     vacancyForm.disabled = true;
     formManager.departmentName = '';
   }
   console.log('departmentsOnChangeHandler: ', departmentName);
   console.log('formManager: ', formManager);
 }
 
 /**
  * Функция которая генерирует опции с департаментами
  * в первый селект
  */
 function setDepartments() {
   const departmentForm = document.querySelector('#department-form');
 
   departmentForm.onchange = departmentsOnChangeHandler;
 
   for (let departmentName in departments) {
     const option = document.createElement('option');
     option.innerHTML = departmentName;
     departmentForm.appendChild(option);
   }
 }
 setDepartments();