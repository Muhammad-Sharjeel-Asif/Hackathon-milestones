'use client'

export const Button = () => {
  const generateCV = (): void => {
    const nameElement = document.getElementById('nameResume') as HTMLElement | null;
    const contactElement = document.getElementById('contactResume') as HTMLElement | null;
    const emailElement = document.getElementById('emailResume') as HTMLElement | null;
    const desigElement = document.getElementById('desigResume') as HTMLElement | null;
    const AboutElement = document.getElementById('aboutResume') as HTMLElement | null;
    const FBElement = document.getElementById('fbLinkResume') as HTMLElement | null;
    const GitElement = document.getElementById('gitLinkResume') as HTMLElement | null;
    const LinkedInElement = document.getElementById('LinkedInResume') as HTMLElement | null;
    const ObjElement = document.getElementById('objResume') as HTMLElement | null;


    // Qual working
    const QualInput = document.getElementById('QualForm') as HTMLInputElement | null;

    if (QualInput && QualInput.value) {
      const InputList = QualInput.value.split(",").map(item => item.trim());
      console.log("Here is your list:", InputList);

      const QualList = document.getElementById('QualResume');

      if (QualList) {
        const ul = document.createElement("ul");

        InputList.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);

          QualList.innerHTML = "";
          QualList.appendChild(ul);
        });

      }
    }


    // Skill working
    const skillInput = document.getElementById('skillForm') as HTMLInputElement | null;

    if (skillInput && skillInput.value) {
      const InputList = skillInput.value.split(",").map(item => item.trim());

      const skillList = document.getElementById('skillResume');

      if (skillList) {
        const ul = document.createElement("ul");

        InputList.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);

          skillList.innerHTML = "";
          skillList.appendChild(ul);
        });

      }
    }


    // Qual working
    const expInput = document.getElementById('expForm') as HTMLInputElement | null;

    if (expInput && expInput.value) {
      const InputList = expInput.value.split(",").map(item => item.trim());

      const expList = document.getElementById('expResume');

      if (expList) {
        const ul = document.createElement("ul");

        InputList.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);

          expList.innerHTML = "";
          expList.appendChild(ul);
        });

      }
    }


    // Not working
    const form = document.querySelector('textForm') as HTMLFormElement | null;

  if(form)
  form.addEventListener('submit', (event: Event) => {
      if (!form.checkValidity()) {
          event.preventDefault();
          form.reportValidity();
      }else{
        alert('fill all fields')
      }
  });





    // Cetification working
    const CerInput = document.getElementById('certForm') as HTMLInputElement | null;

    if (CerInput && CerInput.value) {
      const InputList = CerInput.value.split(",").map(item => item.trim());

      const CerList = document.getElementById('CerResume');

      if (CerList) {
        const ul = document.createElement("ul");

        InputList.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);

          CerList.innerHTML = "";
          CerList.appendChild(ul);
        });

      }
    }


    // Image working

    const imageInput = document.getElementById('imageForm') as HTMLInputElement | null;

    if (imageInput && imageInput.files) {
      const imageFile = imageInput.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(imageFile)
      console.log(reader.result)


      reader.onloadend = () => {
        const imageForm = document.getElementById('imageResume') as HTMLImageElement | null;
        if (imageForm && reader.result) {
          imageForm.src = reader.result as string

        } else {
          console.error("Image input element not found or it has no files.");
        }
      };

    } else {
      console.error("Image input element not found or it has no files.");
    }

    const nameValue = (document.getElementById('nameForm') as HTMLInputElement | null)?.value || '';
    const contactValue = (document.getElementById('contactForm') as HTMLInputElement | null)?.value || '';
    const emailValue = (document.getElementById('emailForm') as HTMLInputElement | null)?.value || '';
    const AboutValue = (document.getElementById('aboutForm') as HTMLInputElement | null)?.value || '';
    const DesigValue = (document.getElementById('desigForm') as HTMLInputElement | null)?.value || '';
    const FbLink = (document.getElementById('fbLinkForm') as HTMLInputElement | null)?.value || '';
    const GitLink = (document.getElementById('gitLinkForm') as HTMLInputElement | null)?.value || '';
    const LinkedInLink = (document.getElementById('linkedLink') as HTMLInputElement | null)?.value || '';

    const ObjValue = (document.getElementById('objForm') as HTMLInputElement | null)?.value || '';


    if (nameElement) nameElement.innerHTML = nameValue;
    if (contactElement) contactElement.innerHTML = contactValue;
    if (AboutElement) AboutElement.innerHTML = AboutValue;
    if (desigElement) desigElement.innerHTML = DesigValue;
    if (emailElement) emailElement.innerHTML = emailValue;
    if (FBElement) FBElement.innerHTML = FbLink;
    if (GitElement) GitElement.innerHTML = GitLink;
    if (LinkedInElement) LinkedInElement.innerHTML = LinkedInLink;

    if (ObjElement) ObjElement.innerHTML = ObjValue;

    (document.getElementById('FormTemp') as HTMLElement).style.display = 'none';
    (document.getElementById('generateBtn') as HTMLElement).style.display = 'none';



    const hide = document.getElementById("resumeTemp") as HTMLElement | null;
    if (hide) {
      if (hide.style.display === 'none') {
        hide.style.display = 'block';
      } else {
        hide.style.display = 'none';
      }
    } else {
      console.error("Element with ID 'FormTemp' not found.");
    }



    if (true) {
      document.body.style.backgroundColor = '#2be3e3'
    }
  }


  const showResume = document.getElementById('resumeTemp') as HTMLElement | null;

  if (showResume) {
    if (showResume.style.display === 'none') {
      showResume.style.display = 'block';
    } else if (showResume.style.display === 'block') {
      showResume.style.display = 'none';
    }
  }


  return (
    <div className='flex justify-center'>
      <button id="generateBtn" type='submit' onClick={generateCV} className='bg-blue-950 px-5 py-2 rounded-md text-lg font-semibold text-white'>Generate Resume</button>
    </div>
  )
}