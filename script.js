async function loadResumeData() {
    const response = await fetch('resume.yaml');
    const yamlText = await response.text();
    const resumeData = jsyaml.load(yamlText);

    const employmentSection = document.querySelector('#employment ul');
    resumeData.employment.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${job.title} at ${job.company}</span>
            <small>${job.dates}</small>
            <p>${job.description}</p>
        `;
        employmentSection.appendChild(li);
    });

    const educationSection = document.querySelector('#education ul');
    resumeData.education.forEach(edu => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${edu.degree}</span>
            <small>${edu.institution}, ${edu.year}</small>
        `;
        educationSection.appendChild(li);
    });
}

loadResumeData();
