const photoInput = document.getElementById("photo");

const photoPreview = document.querySelector(".photo-preview");

photoInput.addEventListener("change", function () {
  const file = photoInput.files[0];
  console.log("Photo selected!");

  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      alert("Photo size must be less than 2MB.");
      photoInput.value = "";
      return;
    }

    const imageURL = URL.createObjectURL(file);
    photoPreview.style.backgroundImage = `url("${imageURL}")`;
    photoPreview.style.backgroundSize = "cover";
    photoPreview.style.backgroundPosition = "center";
    photoPreview.style.border = "none";
    photoPreview.querySelector(".upload-icon").style.display = "none";

    document.getElementById("cvPhoto").style.backgroundImage = `url("${imageURL}")`;
    document.getElementById("cvPhoto").style.border = "1px solid #E5E7EB";
    document.getElementById("cvPhoto").style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.08)";
  }
});

const addEducationBtn = document.getElementById("addEducationBtn");

const educationSection = document.querySelector(".education-entry").parentElement;

addEducationBtn.addEventListener("click", function () {
  const newEducation = document.createElement("div");

  newEducation.classList.add("education-entry");

  newEducation.innerHTML = `
    <div class="two-column">

        <div class="input-group">
            <label>Degree</label>
            <input type="text" class="degree" placeholder="e.g. B.Tech in Computer Science">
        </div>

        <div class="input-group">
            <label>College / University</label>
            <input type="text" class="college" placeholder="University name">
        </div>

    </div>

    <div class="two-column">

        <div class="input-group">
            <label>Year</label>
            <input type="text" class="educationYear" placeholder="2022 - 2026">
        </div>

        <div class="input-group">
            <label>CGPA / Percentage</label>
            <input type="text" class="cgpa" placeholder="e.g. 8.5 CGPA">
        </div>

    </div>

    <button type="button" class="remove-btn">
        Remove
    </button>

    `;

  educationSection.appendChild(newEducation);

  newEducation.querySelector(".remove-btn").addEventListener("click", function () {
    newEducation.remove();
  });
});

const addExperienceBtn = document.getElementById("addExperienceBtn");

addExperienceBtn.addEventListener("click", function () {
  const newExperience = document.createElement("div");

  newExperience.classList.add("experience-entry");

  newExperience.innerHTML = `
    <div class="two-column">

        <div class="input-group">
            <label>Job Title</label>
            <input type="text" class="position" placeholder="e.g. Software Developer">
        </div>

        <div class="input-group">
            <label>Company</label>
            <input type="text" class="company" placeholder="Company name">
        </div>

    </div>

    <div class="two-column">

        <div class="input-group">
            <label>Duration</label>
            <input type="text" class="duration" placeholder="Jan 2024 - Present">
        </div>

        <div class="input-group">
            <label>Location</label>
            <input type="text" class="experienceLocation" placeholder="City, Country">
        </div>

    </div>

    <div class="input-group">
        <label>Description</label>
        <textarea class="experienceDescription"
            placeholder="Describe your responsibilities, achievements and work..."></textarea>
    </div>

    <button type="button" class="remove-btn">
        Remove
    </button>
`;

  document.querySelector(".experience-entry").parentElement.appendChild(newExperience);

  newExperience.querySelector(".remove-btn").addEventListener("click", function () {
    newExperience.remove();
  });
});

const addProjectBtn = document.getElementById("addProjectBtn");

addProjectBtn.addEventListener("click", function () {
  const newProject = document.createElement("div");

  newProject.classList.add("project-entry");

  newProject.innerHTML = `
    <div class="input-group">
        <label>Project Name</label>
        <input type="text" class="projectName" placeholder="e.g. Spotify Clone">
    </div>

    <div class="input-group">
        <label>Project Description</label>
        <textarea class="projectDescription"
            placeholder="Explain what you built..."></textarea>
    </div>

    <div class="input-group">
        <label>Technologies Used</label>
        <input type="text" class="technologies"
            placeholder="HTML, CSS, JavaScript">
    </div>

    <div class="input-group">
        <label>Project Link</label>
        <input type="url" class="projectLink"
            placeholder="https://github.com/username/project">
    </div>

    <button type="button" class="remove-btn">
        Remove
    </button>
`;

  document.querySelector(".project-entry").parentElement.appendChild(newProject);

  newProject.querySelector(".remove-btn").addEventListener("click", function () {
    newProject.remove();
  });
});

const addCertificationBtn = document.getElementById("addCertificationBtn");

addCertificationBtn.addEventListener("click", function () {
  const newCertification = document.createElement("div");

  newCertification.classList.add("certification-entry");

  newCertification.innerHTML = `
    <div class="two-column">

        <div class="input-group">
            <label>Certification Name</label>
            <input type="text" class="certificateName"
                placeholder="e.g. JavaScript Certification">
        </div>

        <div class="input-group">
            <label>Issuing Organization</label>
            <input type="text" class="certificateIssuer"
                placeholder="e.g. Coursera">
        </div>

    </div>

    <div class="two-column">

        <div class="input-group">
            <label>Year</label>
            <input type="text" class="certificateYear"
                placeholder="2026">
        </div>

        <div class="input-group">
            <label>Certificate Link</label>
            <input type="url" class="certificateLink"
                placeholder="Certificate URL">
        </div>

    </div>

    <button type="button" class="remove-btn">
        Remove
    </button>
`;

  document.querySelector(".certification-entry").parentElement.appendChild(newCertification);

  newCertification.querySelector(".remove-btn").addEventListener("click", function () {
    newCertification.remove();
  });
});

const addSkillBtn = document.getElementById("addSkillBtn");

addSkillBtn.addEventListener("click", function () {
  const newSkill = document.createElement("input");

  newSkill.type = "text";
  newSkill.classList.add("skill-input");
  newSkill.placeholder = "e.g. Java";

  document.querySelector(".skills-container").appendChild(newSkill);
});

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function () {
  document.getElementById("cvPreview").style.display = "block";

  const fullName = document.getElementById("fullName").value;
  document.getElementById("cvName").textContent = fullName;

  const jobTitle = document.getElementById("jobTitle").value;
  document.getElementById("cvJobTitle").textContent = jobTitle;

  if (!fullName) {
    alert("Please enter your full name.");
    return;
  }

  if (!jobTitle) {
    alert("Please enter your job title.");
    return;
  }

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;

  if (email && (!email.includes("@") || !email.includes("."))) {
    alert("Please enter a valid email address.");
    return;
  }

  const linkedin = document.getElementById("linkedin").value;
  const github = document.getElementById("github").value;

  if (linkedin && !linkedin.startsWith("https://")) {
    alert("Please enter a valid LinkedIn URL.");
    return;
  }

  if (github && !github.startsWith("https://")) {
    alert("Please enter a valid GitHub URL.");
    return;
  }

  const contact = [email, phone, location].filter((value) => value.trim());

  document.getElementById("cvContact").innerHTML = `
  ${email ? `<a href="mailto:${email}">${email}</a>` : ""}
  ${phone ? ` | <a href="tel:${phone}">${phone}</a>` : ""}
  ${location ? ` | ${location}` : ""}
  ${linkedin ? ` | <a href="${linkedin}" target="_blank">LinkedIn</a>` : ""}
  ${github ? ` | <a href="${github}" target="_blank">GitHub</a>` : ""}
`;

  const summary = document.getElementById("summary").value.trim();
  document.getElementById("cvSummary").textContent = summary;

  document.getElementById("cvProfileSection").style.display = summary ? "block" : "none";

  console.log("Summary:", summary);
  console.log("Profile:", document.getElementById("cvProfileSection").style.display);

  const educationEntries = document.querySelectorAll(".education-entry");

  document.getElementById("cvEducation").innerHTML = "";
  let hasEducation = false;

  educationEntries.forEach(function (entry) {
    const degree = entry.querySelector("#degree, .degree").value;
    const college = entry.querySelector("#college, .college").value;
    const year = entry.querySelector("#educationYear, .educationYear").value;
    const cgpa = entry.querySelector("#cgpa, .cgpa").value;

    if (degree || college || year || cgpa) {
      hasEducation = true;
      document.getElementById("cvEducation").innerHTML += `
        <div class="cv-education-entry">
            <h3>${degree}</h3>
            <p>${college}</p>
            <p>${year} | ${cgpa}</p>
        </div>
    `;
    }
  });
  document.getElementById("cvEducationSection").style.display = hasEducation ? "block" : "none";

  const experienceEntries = document.querySelectorAll(".experience-entry");

  document.getElementById("cvExperience").innerHTML = "";

  let hasExperience = false;

  experienceEntries.forEach(function (entry) {
    const position = entry.querySelector("#position, .position").value.trim();

    const company = entry.querySelector("#company, .company").value.trim();

    const duration = entry.querySelector("#duration, .duration").value.trim();

    const location = entry.querySelector("#experienceLocation, .experienceLocation").value.trim();

    const description = entry
      .querySelector("#experienceDescription, .experienceDescription")
      .value.trim();

    if (position || company || duration || location || description) {
      hasExperience = true;

      document.getElementById("cvExperience").innerHTML += `
      <div class="cv-experience-entry">

        ${position ? `<h3>${position}</h3>` : ""}

        ${
          company || location
            ? `<p>${company}${company && location ? " | " : ""}${location}</p>`
            : ""
        }

        ${duration ? `<p>${duration}</p>` : ""}

        ${description ? `<p>${description}</p>` : ""}

      </div>
    `;
    }
  });

  document.getElementById("cvExperienceSection").style.display = hasExperience ? "block" : "none";

  const projectEntries = document.querySelectorAll(".project-entry");

  document.getElementById("cvProjects").innerHTML = "";

  let hasProjects = false;

  projectEntries.forEach(function (entry) {
    const projectName = entry.querySelector("#projectName, .projectName").value.trim();

    const description = entry
      .querySelector("#projectDescription, .projectDescription")
      .value.trim();

    const technologies = entry.querySelector("#technologies, .technologies").value.trim();

    const projectLink = entry.querySelector("#projectLink, .projectLink").value.trim();

    if (projectLink && !projectLink.startsWith("https://")) {
      alert("Please enter a valid Project URL.");
      return;
    }

    if (projectName || description || technologies || projectLink) {
      hasProjects = true;

      document.getElementById("cvProjects").innerHTML += `
      <div class="cv-project-entry">

        ${projectName ? `<h3>${projectName}</h3>` : ""}

        ${description ? `<p>${description}</p>` : ""}

        ${technologies ? `<p><strong>Technologies:</strong> ${technologies}</p>` : ""}

        ${projectLink ? `<p><a href="${projectLink}" target="_blank">View Project</a></p>` : ""}

      </div>
    `;
    }
  });

  document.getElementById("cvProjectsSection").style.display = hasProjects ? "block" : "none";
  const certificationEntries = document.querySelectorAll(".certification-entry");

  document.getElementById("cvCertifications").innerHTML = "";
  let hasCertification = false;

  certificationEntries.forEach(function (entry) {
    const name = entry.querySelector("#certificateName, .certificateName").value;

    const issuer = entry.querySelector("#certificateIssuer, .certificateIssuer").value;

    const year = entry.querySelector("#certificateYear, .certificateYear").value;

    const link = entry.querySelector("#certificateLink, .certificateLink").value;

    if (name || issuer || year || link) {
      hasCertification = true;
      document.getElementById("cvCertifications").innerHTML += `
            <div class="cv-certification-entry">

                ${name ? `<h3>${name}</h3>` : ""}

                ${issuer ? `<p>${issuer}</p>` : ""}

                ${year ? `<p>${year}</p>` : ""}

                ${link ? `<p><a href="${link}" target="_blank">View Certificate</a></p>` : ""}

            </div>
        `;
    }
  });
  document.getElementById("cvCertificationSection").style.display = hasCertification
    ? "block"
    : "none";

  const skills = document.querySelectorAll(".skill-input");

  const skillList = [];

  skills.forEach(function (skill) {
    const value = skill.value.trim();

    if (value) {
      skillList.push(value);
    }
  });

  document.getElementById("cvSkills").innerHTML = "";

  skillList.forEach(function (skill) {
    document.getElementById("cvSkills").innerHTML += `
        <span class="skill-badge">${skill}</span>
    `;
  });
  document.getElementById("cvSkillsSection").style.display =
    skillList.length > 0 ? "block" : "none";

  console.log(photoInput);

});

const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", function () {
  console.log("Print button clicked!");
  window.print();
});

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
  location.reload();
});
