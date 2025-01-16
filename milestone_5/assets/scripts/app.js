const mainForm = document.getElementById("cv-form");
mainForm.addEventListener("submit", (e) => e.preventDefault());

const previewSc = document.getElementById("preview-sc");
const btnsSection = document.querySelector(".print-btn-sc");
const backButton = document.querySelector(".back-btn");

const firstnameElem = mainForm.firstname;
const middlenameElem = mainForm.middlename;
const lastnameElem = mainForm.lastname;
const imageElem = mainForm.image;
const designationElem = mainForm.designation;
const addressElem = mainForm.address;
const emailElem = mainForm.email;
const phonenoElem = mainForm.phoneno;
const summaryElem = mainForm.summary;

const achievement_title = document.querySelector(".achieve_title");
const achievement_description = document.querySelector(".achieve_description");
const exp_title = document.querySelector(".exp_title");
const exp_organization = document.querySelector(".exp_organization");
const exp_location = document.querySelector(".exp_location");
const exp_start_date = document.querySelector(".exp_start_date");
const exp_end_date = document.querySelector(".exp_end_date");
const exp_description = document.querySelector(".exp_description");
const edu_school = document.querySelector(".edu_school");
const edu_degree = document.querySelector(".edu_degree");
const edu_city = document.querySelector(".edu_city");
const edu_start_date = document.querySelector(".edu_start_date");
const edu_graduation_date = document.querySelector(".edu_graduation_date");
const edu_description = document.querySelector(".edu_description");
const proj_title = document.querySelector(".proj_title");
const proj_link = document.querySelector(".proj_link");
const proj_description = document.querySelector(".proj_description");
const skills = document.querySelector(".skill");

const nameDsp = document.getElementById("fullname_dsp");
const imageDsp = document.getElementById("image_dsp");
const phonenoDsp = document.getElementById("phoneno_dsp");
const emailDsp = document.getElementById("email_dsp");
const addressDsp = document.getElementById("address_dsp");
const designationDsp = document.getElementById("designation_dsp");
const summaryDsp = document.getElementById("summary_dsp");
const projectsDsp = document.getElementById("projects_dsp");
const achievementsDsp = document.getElementById("achievements_dsp");
const skillsDsp = document.getElementById("skills_dsp");
const educationsDsp = document.getElementById("educations_dsp");
const experiencesDsp = document.getElementById("experiences_dsp");
const shareBtn = document.querySelector(".share-btn");

const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

const handleImageUpload = async (imageElem) => {
    const photoFile = imageElem.files ? imageElem.files[0] : null;
    if (photoFile) {
        try {
            const photoBase64 = await fileToBase64(photoFile);
            localStorage.setItem("resumePhoto", photoBase64);
            imageDsp.src = photoBase64; // Display the new image immediately
        } catch (error) {
            console.error("Error converting file to Base64:", error);
        }
    } else {
        console.log("No file selected.");
    }
};

const getUserInputs = () => ({
    firstname: firstnameElem.value,
    middlename: middlenameElem.value,
    lastname: lastnameElem.value,
    designation: designationElem.value,
    address: addressElem.value,
    email: emailElem.value,
    phoneno: phonenoElem.value,
    summary: summaryElem.value,
    achievement_title: achievement_title.value,
    achievement_description: achievement_description.value,
    exp_title: exp_title.value,
    exp_organization: exp_organization.value,
    exp_location: exp_location.value,
    exp_start_date: exp_start_date.value,
    exp_end_date: exp_end_date.value,
    exp_description: exp_description.value,
    edu_school: edu_school.value,
    edu_degree: edu_degree.value,
    edu_city: edu_city.value,
    edu_start_date: edu_start_date.value,
    edu_graduation_date: edu_graduation_date.value,
    edu_description: edu_description.value,
    proj_title: proj_title.value,
    proj_link: proj_link.value,
    proj_description: proj_description.value,
    skills: skills.value,
});

const displayCV = (userData) => {
    nameDsp.innerHTML = `${userData.firstname} ${userData.middlename} ${userData.lastname}`;
    phonenoDsp.innerHTML = userData.phoneno;
    emailDsp.innerHTML = userData.email;
    addressDsp.innerHTML = userData.address;
    designationDsp.innerHTML = userData.designation;
    summaryDsp.innerHTML = userData.summary;
    achievementsDsp.innerHTML = `${userData.achievement_title}: ${userData.achievement_description}`;
    experiencesDsp.innerHTML = `${userData.exp_title}, ${userData.exp_organization} ${userData.exp_location} (${userData.exp_start_date} - ${userData.exp_end_date}): ${userData.exp_description};`;
    educationsDsp.innerHTML = `${userData.edu_degree} at ${userData.edu_school}, ${userData.edu_city} (${userData.edu_start_date} - ${userData.edu_graduation_date}): ${userData.edu_description};`;
    projectsDsp.innerHTML = `${userData.proj_title.replace(/,/g, "<br>")} <br> <a href="${userData.proj_link.replace(/,/g, "<br>")}">${userData.proj_link.replace(/,/g, "<br>")}</a><br>${userData.proj_description.replace(/,/g, "<br>")}`;
    skillsDsp.innerHTML = userData.skills;
};

const generateCV = () => {
    const requiredFields = [
        firstnameElem,
        middlenameElem,
        lastnameElem,
        designationElem,
        addressElem,
        emailElem,
        phonenoElem,
        summaryElem,
        achievement_title,
        achievement_description,
        exp_title,
        exp_organization,
        exp_location,
        exp_start_date,
        exp_end_date,
        exp_description,
        edu_school,
        edu_degree,
        edu_city,
        edu_start_date,
        edu_graduation_date,
        edu_description,
        proj_title,
        proj_link,
        proj_description,
        skills,
    ];
    
    let allFieldsFilled = true;
    requiredFields.forEach((field) => {
        if (field.value.trim() === "") {
            allFieldsFilled = false;
            field.classList.add("error");
        } else {
            field.classList.remove("error");
        }
    });

    if (allFieldsFilled) {
        const userData = getUserInputs();
        displayCV(userData);
        const queryParams = new URLSearchParams(userData).toString();
        const uniqueUrl = `${window.location.origin}?${queryParams}`;
        previewSc.style.display = "block";
        mainForm.style.display = "none";
        window.history.replaceState(null, "", uniqueUrl);
    }
    conditionalButtonsRendering();
};

const conditionalButtonsRendering = () => {
    const isPreviewVisible = mainForm.style.display === "none";
    btnsSection.style.display = isPreviewVisible ? "block" : "none";
    backButton.style.display = isPreviewVisible ? "block" : "none";
};

function backToForm() {
    backButton.addEventListener("click", () => {
        // Show the form and hide the preview section
        mainForm.style.display = "block";
        previewSc.style.display = "none";
        
        // Get the parameters from the URL
        const params = new URLSearchParams(window.location.search);

        // Prefill the form fields with the values from the URL parameters
        firstnameElem.value = params.get("firstname") || "";
        middlenameElem.value = params.get("middlename") || "";
        lastnameElem.value = params.get("lastname") || "";
        designationElem.value = params.get("designation") || "";
        addressElem.value = params.get("address") || "";
        emailElem.value = params.get("email") || "";
        phonenoElem.value = params.get("phoneno") || "";
        summaryElem.value = params.get("summary") || "";
        achievement_title.value = params.get("achievement_title") || "";
        achievement_description.value = params.get("achievement_description") || "";
        exp_title.value = params.get("exp_title") || "";
        exp_organization.value = params.get("exp_organization") || "";
        exp_location.value = params.get("exp_location") || "";
        exp_start_date.value = params.get("exp_start_date") || "";
        exp_end_date.value = params.get("exp_end_date") || "";
        exp_description.value = params.get("exp_description") || "";
        edu_school.value = params.get("edu_school") || "";
        edu_degree.value = params.get("edu_degree") || "";
        edu_city.value = params.get("edu_city") || "";
        edu_start_date.value = params.get("edu_start_date") || "";
        edu_graduation_date.value = params.get("edu_graduation_date") || "";
        edu_description.value = params.get("edu_description") || "";
        proj_title.value = params.get("proj_title") || "";
        proj_link.value = params.get("proj_link") || "";
        proj_description.value = params.get("proj_description") || "";
        skills.value = params.get("skills") || "";

        // Show the appropriate buttons
        conditionalButtonsRendering();
    });
}


function previewImage() {
    if (imageElem.files && imageElem.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imageDsp.src = event.target.result;
        };
        reader.readAsDataURL(imageElem.files[0]);
    }
}

function printCV() {
    window.print();
}

window.addEventListener("DOMContentLoaded", () => {
    const storedImage = localStorage.getItem("resumePhoto");
    if (storedImage) {
        imageDsp.src = storedImage; // Set the image from local storage
    }

    imageElem.addEventListener("change", () => handleImageUpload(imageElem));

    const params = new URLSearchParams(window.location.search);
    if (params.toString().length > 0) {
        mainForm.style.display = "none";
        previewSc.style.display = "block";

        const userData = Object.fromEntries(params.entries());
        displayCV(userData);

        shareBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(uniqueUrl)
                .then(() => console.log("URL copied to clipboard"))
                .catch(err => console.error("Failed to copy: ", err));
        });
        window.history.replaceState(null, "", `${window.location.origin}?${params.toString()}`);
    } else {
        mainForm.style.display = "block";
        previewSc.style.display = "none";
    }
    conditionalButtonsRendering();
});
