var ValidType;
(function (ValidType) {
    ValidType["TEXT"] = "text";
    ValidType["TEXT_EMP"] = "text_emp";
    ValidType["EMAIL"] = "email";
    ValidType["DIGIT"] = "digit";
    ValidType["PHONENO"] = "phoneno";
    ValidType["ANY"] = "any";
})(ValidType || (ValidType = {}));
var mainForm = document.getElementById('cv-form');
var firstnameElem = mainForm.firstname, middlenameElem = mainForm.middlename, lastnameElem = mainForm.lastname, imageElem = mainForm.image, designationElem = mainForm.designation, addressElem = mainForm.address, emailElem = mainForm.email, phonenoElem = mainForm.phoneno, summaryElem = mainForm.summary;
var nameDsp = document.getElementById('fullname_dsp'), imageDsp = document.getElementById('image_dsp'), phonenoDsp = document.getElementById('phoneno_dsp'), emailDsp = document.getElementById('email_dsp'), addressDsp = document.getElementById('address_dsp'), designationDsp = document.getElementById('designation_dsp'), summaryDsp = document.getElementById('summary_dsp'), projectsDsp = document.getElementById('projects_dsp'), achievementsDsp = document.getElementById('achievements_dsp'), skillsDsp = document.getElementById('skills_dsp'), educationsDsp = document.getElementById('educations_dsp'), experiencesDsp = document.getElementById('experiences_dsp');
var fetchValues = function (attrs) {
    var nodeLists = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nodeLists[_i - 1] = arguments[_i];
    }
    var elemsAttrsCount = nodeLists.length;
    var elemsDataCount = nodeLists[0].length;
    var tempDataArr = [];
    for (var i = 0; i < elemsDataCount; i++) {
        var dataObj = {};
        for (var j = 0; j < elemsAttrsCount; j++) {
            dataObj[attrs[j]] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }
    return tempDataArr;
};
var getUserInputs = function () {
    var achievementsTitleElem = document.querySelectorAll('.achieve_title'), achievementsDescriptionElem = document.querySelectorAll('.achieve_description');
    var expTitleElem = document.querySelectorAll('.exp_title'), expOrganizationElem = document.querySelectorAll('.exp_organization'), expLocationElem = document.querySelectorAll('.exp_location'), expStartDateElem = document.querySelectorAll('.exp_start_date'), expEndDateElem = document.querySelectorAll('.exp_end_date'), expDescriptionElem = document.querySelectorAll('.exp_description');
    var eduSchoolElem = document.querySelectorAll('.edu_school'), eduDegreeElem = document.querySelectorAll('.edu_degree'), eduCityElem = document.querySelectorAll('.edu_city'), eduStartDateElem = document.querySelectorAll('.edu_start_date'), eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date'), eduDescriptionElem = document.querySelectorAll('.edu_description');
    var projTitleElem = document.querySelectorAll('.proj_title'), projLinkElem = document.querySelectorAll('.proj_link'), projDescriptionElem = document.querySelectorAll('.proj_description');
    var skillElem = document.querySelectorAll('.skill');
    firstnameElem.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.TEXT, 'First Name'); });
    middlenameElem.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.TEXT_EMP, 'Middle Name'); });
    lastnameElem.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.TEXT, 'Last Name'); });
    phonenoElem.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.PHONENO, 'Phone Number'); });
    emailElem.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.EMAIL, 'Email'); });
    addressElem.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Address'); });
    designationElem.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.TEXT, 'Designation'); });
    achievementsTitleElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Title'); }); });
    achievementsDescriptionElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Description'); }); });
    expTitleElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Title'); }); });
    expOrganizationElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Organization'); }); });
    expLocationElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, "Location"); }); });
    expStartDateElem.forEach(function (item) { return item.addEventListener('blur', function (e) { return validateFormData(e.target, ValidType.ANY, 'End Date'); }); });
    expEndDateElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'End Date'); }); });
    expDescriptionElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Description'); }); });
    eduSchoolElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'School'); }); });
    eduDegreeElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Degree'); }); });
    eduCityElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'City'); }); });
    eduStartDateElem.forEach(function (item) { return item.addEventListener('blur', function (e) { return validateFormData(e.target, ValidType.ANY, 'Start Date'); }); });
    eduGraduationDateElem.forEach(function (item) { return item.addEventListener('blur', function (e) { return validateFormData(e.target, ValidType.ANY, 'Graduation Date'); }); });
    eduDescriptionElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Description'); }); });
    projTitleElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Title'); }); });
    projLinkElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Link'); }); });
    projDescriptionElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'Description'); }); });
    skillElem.forEach(function (item) { return item.addEventListener('keyup', function (e) { return validateFormData(e.target, ValidType.ANY, 'skill'); }); });
    return {
        firstname: firstnameElem.value,
        middlename: middlenameElem.value,
        lastname: lastnameElem.value,
        designation: designationElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneno: phonenoElem.value,
        summary: summaryElem.value,
        achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
        experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skill'], skillElem)
    };
};
function validateFormData(elem, elemType, elemName) {
    var strRegex = /^[a-zA-Z\s]*$/; // Assuming this regex was defined earlier
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Assuming this regex was defined earlier
    var phoneRegex = /^[0-9]{10}$/; // Assuming this regex was defined earlier
    if (elemType == ValidType.TEXT) {
        if (!strRegex.test(elem.value) || elem.value.trim().length == 0)
            addErrMsg(elem, elemName);
        else
            removeErrMsg(elem);
    }
    if (elemType == ValidType.TEXT_EMP) {
        if (!strRegex.test(elem.value))
            addErrMsg(elem, elemName);
        else
            removeErrMsg(elem);
    }
    if (elemType == ValidType.EMAIL) {
        if (!emailRegex.test(elem.value) || elem.value.trim().length == 0)
            addErrMsg(elem, elemName);
        else
            removeErrMsg(elem);
    }
    if (elemType == ValidType.PHONENO) {
        if (!phoneRegex.test(elem.value) || elem.value.trim().length == 0)
            addErrMsg(elem, elemName);
        else
            removeErrMsg(elem);
    }
    if (elemType == ValidType.ANY) {
        if (elem.value.trim().length == 0)
            addErrMsg(elem, elemName);
        else
            removeErrMsg(elem);
    }
}
function addErrMsg(formElem, formElemName) {
    var nextElement = formElem.nextElementSibling;
    if (nextElement) {
        nextElement.innerHTML = "".concat(formElemName, " is invalid");
    }
}
function removeErrMsg(formElem) {
    var nextElement = formElem.nextElementSibling;
    if (nextElement) {
        nextElement.innerHTML = "";
    }
}
var showListData = function (listData, listContainer) {
    listContainer.innerHTML = "";
    listData.forEach(function (listItem) {
        var itemElem = document.createElement('div');
        itemElem.classList.add('preview-item');
        for (var key in listItem) {
            var subItemElem = document.createElement('span');
            subItemElem.classList.add('preview-item-val');
            subItemElem.innerHTML = "".concat(listItem[key]);
            itemElem.appendChild(subItemElem);
        }
        listContainer.appendChild(itemElem);
    });
};
var displayCV = function (userData) {
    nameDsp.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.lastname;
    phonenoDsp.innerHTML = userData.phoneno;
    emailDsp.innerHTML = userData.email;
    addressDsp.innerHTML = userData.address;
    designationDsp.innerHTML = userData.designation;
    summaryDsp.innerHTML = userData.summary;
    showListData(userData.projects, projectsDsp);
    showListData(userData.achievements, achievementsDsp);
    showListData(userData.skills, skillsDsp);
    showListData(userData.educations, educationsDsp);
    showListData(userData.experiences, experiencesDsp);
};
var generateCV = function () {
    var userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
};
function previewImage() {
    var oFReader = new FileReader();
    if (imageElem.files && imageElem.files[0]) {
        oFReader.readAsDataURL(imageElem.files[0]);
        oFReader.onload = function (ofEvent) {
            if (ofEvent.target && ofEvent.target.result) {
                imageDsp.src = ofEvent.target.result;
            }
        };
    }
}
function printCV() {
    window.print();
}
