document.getElementById("generate-cv").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const school = document.getElementById("school").value;
    const degree = document.getElementById("degree").value;
    const gradYear = document.getElementById("grad-year").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const expYear = document.getElementById("exp-year").value;

    const cvPreview = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p> 
        <h3>Education</h3>
        <p>${degree} in ${school}, Graduation Year: ${gradYear}</p>
        <h3>Experience</h3>
        <p>${jobTitle} at ${company}, Year: ${expYear}</p>
    `;

    document.getElementById("cv-preview").innerHTML = cvPreview;
});
