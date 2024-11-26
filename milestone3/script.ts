// Get references to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;


// Handle Form submission  
form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();  // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const Phone = (document.getElementById('Phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const Experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personl Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${Phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${Experience}</p>

     <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
        
    }
    
});