// interface UserData {
//     firstname: string;
//     middlename: string;
//     lastname: string;
//     designation: string;
//     address: string;
//     email: string;
//     phoneno: string;
//     summary: string;
//     achievements: Achievement[];
//     experiences: Experience[];
//     educations: Education[];
//     projects: Project[];
//     skills: Skill[];
// }

// interface Achievement {
//     achieve_title: string;
//     achieve_description: string;
// }

// interface Experience {
//     exp_title: string;
//     exp_organization: string;
//     exp_location: string;
//     exp_start_date: string;
//     exp_end_date: string;
//     exp_description: string;
// }

// interface Education {
//     edu_school: string;
//     edu_degree: string;
//     edu_city: string;
//     edu_start_date: string;
//     edu_graduation_date: string;
//     edu_description: string;
// }

// interface Project {
//     proj_title: string;
//     proj_link: string;
//     proj_description: string;
// }

// interface Skill {
//     skill: string;
// }

// enum ValidType {
//     TEXT = 'text',
//     TEXT_EMP = 'text_emp',
//     EMAIL = 'email',
//     DIGIT = 'digit',
//     PHONENO = 'phoneno',
//     ANY = 'any',
// }

// const mainForm = document.getElementById('cv-form') as HTMLFormElement;

// let firstnameElem = mainForm.firstname as HTMLInputElement,
//     middlenameElem = mainForm.middlename as HTMLInputElement,
//     lastnameElem = mainForm.lastname as HTMLInputElement,
//     imageElem = mainForm.image as HTMLInputElement,
//     designationElem = mainForm.designation as HTMLInputElement,
//     addressElem = mainForm.address as HTMLInputElement,
//     emailElem = mainForm.email as HTMLInputElement,
//     phonenoElem = mainForm.phoneno as HTMLInputElement,
//     summaryElem = mainForm.summary as HTMLTextAreaElement;

// let nameDsp = document.getElementById('fullname_dsp') as HTMLElement,
//     imageDsp = document.getElementById('image_dsp') as HTMLImageElement,
//     phonenoDsp = document.getElementById('phoneno_dsp') as HTMLElement,
//     emailDsp = document.getElementById('email_dsp') as HTMLElement,
//     addressDsp = document.getElementById('address_dsp') as HTMLElement,
//     designationDsp = document.getElementById('designation_dsp') as HTMLElement,
//     summaryDsp = document.getElementById('summary_dsp') as HTMLElement,
//     projectsDsp = document.getElementById('projects_dsp') as HTMLElement,
//     achievementsDsp = document.getElementById('achievements_dsp') as HTMLElement,
//     skillsDsp = document.getElementById('skills_dsp') as HTMLElement,
//     educationsDsp = document.getElementById('educations_dsp') as HTMLElement,
//     experiencesDsp = document.getElementById('experiences_dsp') as HTMLElement;

// const fetchValues = <T>(attrs: string[], ...nodeLists: NodeListOf<HTMLInputElement>[]): T[] => {
//     let elemsAttrsCount = nodeLists.length;
//     let elemsDataCount = nodeLists[0].length;
//     let tempDataArr: T[] = [];

//     for(let i = 0; i < elemsDataCount; i++){
//         let dataObj = {} as T;
        
//         for(let j = 0; j < elemsAttrsCount; j++){
//             (dataObj as any)[attrs[j]] = nodeLists[j][i].value;
//         }
//         tempDataArr.push(dataObj);
//     }

//     return tempDataArr;
// }

// const getUserInputs = (): UserData => {
//     let achievementsTitleElem = document.querySelectorAll('.achieve_title') as NodeListOf<HTMLInputElement>,
//     achievementsDescriptionElem = document.querySelectorAll('.achieve_description') as NodeListOf<HTMLInputElement>;

//     let expTitleElem = document.querySelectorAll('.exp_title') as NodeListOf<HTMLInputElement>,
//     expOrganizationElem = document.querySelectorAll('.exp_organization') as NodeListOf<HTMLInputElement>,
//     expLocationElem = document.querySelectorAll('.exp_location') as NodeListOf<HTMLInputElement>,
//     expStartDateElem = document.querySelectorAll('.exp_start_date') as NodeListOf<HTMLInputElement>,
//     expEndDateElem = document.querySelectorAll('.exp_end_date') as NodeListOf<HTMLInputElement>,
//     expDescriptionElem = document.querySelectorAll('.exp_description') as NodeListOf<HTMLInputElement>;

//     let eduSchoolElem = document.querySelectorAll('.edu_school') as NodeListOf<HTMLInputElement>,
//     eduDegreeElem = document.querySelectorAll('.edu_degree') as NodeListOf<HTMLInputElement>,
//     eduCityElem = document.querySelectorAll('.edu_city') as NodeListOf<HTMLInputElement>,
//     eduStartDateElem = document.querySelectorAll('.edu_start_date') as NodeListOf<HTMLInputElement>,
//     eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date') as NodeListOf<HTMLInputElement>,
//     eduDescriptionElem = document.querySelectorAll('.edu_description') as NodeListOf<HTMLInputElement>;

//     let projTitleElem = document.querySelectorAll('.proj_title') as NodeListOf<HTMLInputElement>,
//     projLinkElem = document.querySelectorAll('.proj_link') as NodeListOf<HTMLInputElement>,
//     projDescriptionElem = document.querySelectorAll('.proj_description') as NodeListOf<HTMLInputElement>;

//     let skillElem = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement>;

//     firstnameElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.TEXT, 'First Name'));
//     middlenameElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.TEXT_EMP, 'Middle Name'));
//     lastnameElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.TEXT, 'Last Name'));
//     phonenoElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.PHONENO, 'Phone Number'));
//     emailElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.EMAIL, 'Email'));
//     addressElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Address'));
//     designationElem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.TEXT, 'Designation'));

//     achievementsTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Title')));
//     achievementsDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Description')));
//     expTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Title')));
//     expOrganizationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Organization')));
//     expLocationElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, "Location")));
//     expStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'End Date')));
//     expEndDateElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'End Date')));
//     expDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Description')));
//     eduSchoolElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'School')));
//     eduDegreeElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Degree')));
//     eduCityElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'City')));
//     eduStartDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Start Date')));
//     eduGraduationDateElem.forEach(item => item.addEventListener('blur', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Graduation Date')));
//     eduDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Description')));
//     projTitleElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Title')));
//     projLinkElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Link')));
//     projDescriptionElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'Description')));
//     skillElem.forEach(item => item.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, ValidType.ANY, 'skill')));

//     return {
//         firstname: firstnameElem.value,
//         middlename: middlenameElem.value,
//         lastname: lastnameElem.value,
//         designation: designationElem.value,
//         address: addressElem.value,
//         email: emailElem.value,
//         phoneno: phonenoElem.value,
//         summary: summaryElem.value,
//         achievements: fetchValues<Achievement>(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
//         experiences: fetchValues<Experience>(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
//         educations: fetchValues<Education>(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
//         projects: fetchValues<Project>(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
//         skills: fetchValues<Skill>(['skill'], skillElem)
//     }
// };

// function validateFormData(elem: HTMLInputElement, elemType: ValidType, elemName: string): void {
//     const strRegex = /^[a-zA-Z\s]*$/; // Assuming this regex was defined earlier
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Assuming this regex was defined earlier
//     const phoneRegex = /^[0-9]{10}$/; // Assuming this regex was defined earlier

//     if(elemType == ValidType.TEXT){
//         if(!strRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
//         else removeErrMsg(elem);
//     }

//     if(elemType == ValidType.TEXT_EMP){
//         if(!strRegex.test(elem.value)) addErrMsg(elem, elemName);
//         else removeErrMsg(elem);
//     }

//     if(elemType == ValidType.EMAIL){
//         if(!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
//         else removeErrMsg(elem);
//     }

//     if(elemType == ValidType.PHONENO){
//         if(!phoneRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg(elem, elemName);
//         else removeErrMsg(elem);
//     }

//     if(elemType == ValidType.ANY){
//         if(elem.value.trim().length == 0) addErrMsg(elem, elemName);
//         else removeErrMsg(elem);
//     }
// }

// function addErrMsg(formElem: HTMLInputElement, formElemName: string): void {
//     const nextElement = formElem.nextElementSibling as HTMLElement;
//     if (nextElement) {
//         nextElement.innerHTML = `${formElemName} is invalid`;
//     }
// }

// function removeErrMsg(formElem: HTMLInputElement): void {
//     const nextElement = formElem.nextElementSibling as HTMLElement;
//     if (nextElement) {
//         nextElement.innerHTML = "";
//     }
// }

// const showListData = (listData: any[], listContainer: HTMLElement): void => {
//     listContainer.innerHTML = "";
//     listData.forEach(listItem => {
//         let itemElem = document.createElement('div');
//         itemElem.classList.add('preview-item');
        
//         for(const key in listItem){
//             let subItemElem = document.createElement('span');
//             subItemElem.classList.add('preview-item-val');
//             subItemElem.innerHTML = `${listItem[key]}`;
//             itemElem.appendChild(subItemElem);
//         }

//         listContainer.appendChild(itemElem);
//     })
// }

// const displayCV = (userData: UserData): void => {
//     nameDsp.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
//     phonenoDsp.innerHTML = userData.phoneno;
//     emailDsp.innerHTML = userData.email;
//     addressDsp.innerHTML = userData.address;
//     designationDsp.innerHTML = userData.designation;
//     summaryDsp.innerHTML = userData.summary;
//     showListData(userData.projects, projectsDsp);
//     showListData(userData.achievements, achievementsDsp);
//     showListData(userData.skills, skillsDsp);
//     showListData(userData.educations, educationsDsp);
//     showListData(userData.experiences, experiencesDsp);
// }

// const generateCV = (): void => {
//     let userData = getUserInputs();
//     displayCV(userData);
//     console.log(userData);
// }

// function previewImage(): void {
//     let oFReader = new FileReader();
//     if (imageElem.files && imageElem.files[0]) {
//         oFReader.readAsDataURL(imageElem.files[0]);
//         oFReader.onload = function(ofEvent: ProgressEvent<FileReader>){
//             if (ofEvent.target && ofEvent.target.result) {
//                 imageDsp.src = ofEvent.target.result as string;
//             }
//         }
//     }
// }

// function printCV(): void {
//     window.print();
// }