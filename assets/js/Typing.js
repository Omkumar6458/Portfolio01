



$(document).ready(function () {
  // Typing effect for homepage hero title
  const homeText = "Hi, I'm Om Kumar";
  let i = 0;
  function typeHome() {
    if (i < homeText.length) {
      $('#typed-heading').append(homeText.charAt(i));
      i++;
      setTimeout(typeHome, 100);
    }
  }
  typeHome();

  // Typing effect for education section
  const eduText = "My Education Journey";
  let j = 0;
  function typeEdu() {
    if ($('#edu-typing-heading').length === 0) return; // avoid error if heading is not present
    if (j < eduText.length) {
      $('#edu-typing-heading').append(eduText.charAt(j));
      j++;
      setTimeout(typeEdu, 100);
    }
  }
  typeEdu();
});


$(document).ready(function () {
  // Typing effect for "About Me" heading
  const aboutText = "About Me";
  let k = 0;
  function typeAbout() {
    if ($('#about-typing-heading').length === 0) return;
    if (k < aboutText.length) {
      $('#about-typing-heading').append(aboutText.charAt(k));
      k++;
      setTimeout(typeAbout, 100);
    }
  }

  typeAbout();
});


$(document).ready(function () {
  // Typing effect for "My Experience" heading
  const expText = "My Experience";
  let i = 0;
  
  function typeExperience() {
    if ($('#experience-typing-heading').length === 0) return;
    if (i < expText.length) {
      $('#experience-typing-heading').append(expText.charAt(i));
      i++;
      setTimeout(typeExperience, 100); // speed in ms
    }
  }

  typeExperience();
});

$(document).ready(function () {
  let text = "My Technical Skills";
  let index = 0;

  function typeText() {
    if (index < text.length) {
      $('#typing-skills').append(text.charAt(index));
      index++;
      setTimeout(typeText, 100); // typing speed
    }
  }

  typeText();
});






$(document).ready(function () {
  function typeEffect(target, text, speed = 100) {
    let i = 0;
    function type() {
      if (i < text.length) {
        $(target).append(text.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Call typing effect on Contact heading
  typeEffect("#typing-contact", "Contact Me");
});


$(document).ready(function () {
  function typeParagraph(target, text, speed = 50) {
    let i = 0;
    $(target).text(''); // Clear any existing text

    function type() {
      if (i < text.length) {
        $(target).append(text.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Call the function with your paragraph
  typeParagraph("#typing-para", "My academic foundation in Information Technology and technical skills");
});



$(document).ready(function () {
  function typeParagraph(target, text, speed = 50) {
    let i = 0;
    $(target).text('');

    function type() {
      if (i < text.length) {
        $(target).append(text.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    }

    type();
  }

  // Call for both paragraphs
 
  typeParagraph("#typing-experience", "Hands-on internships and industrial training in software development.");
});

$(document).ready(function () {
  const text = "Proficient in frontend, backend, and core programming technologies with practical development experience.";
  let i = 0;

  function typeText() {
    if (i < text.length) {
      $('#typing-skill').append(text.charAt(i));
      i++;
      setTimeout(typeText, 40); // typing speed in ms
    }
  }

  typeText();
});


$(document).ready(function () {
  const text = "Real-world web and software development projects built with HTML, CSS, JavaScript, Django, and DSA logic.";
  let i = 0;

  function typeLine() {
    if (i < text.length) {
      $('#typing-project').append(text.charAt(i));
      i++;
      setTimeout(typeLine, 40); // typing speed
    }
  }

  typeLine();
});



$(document).ready(function () {
  const text = "Feel free to reach out for collaboration, queries, or opportunities.";
  let i = 0;

  function typeContact() {
    if (i < text.length) {
      $('#typing-contact').append(text.charAt(i));
      i++;
      setTimeout(typeContact, 40); // typing speed
    }
  }

  typeContact();
});

$(document).ready(function () {
  const aboutText = "I’m Om Kumar, a Computer Science student passionate about building scalable web applications and backend systems. I'm currently working as a Graduate Engineer Trainee at Mantra Softech and love turning complex problems into clean code and smart solutions.";
  let index = 0;

  function typeAbout() {
    if (index < aboutText.length) {
      $('#typing-about').append(aboutText.charAt(index));
      index++;
      setTimeout(typeAbout, 35); // Typing speed
    }
  }

  typeAbout();
});


$(document).ready(function () {
  const text = "My Project Showcase";
  let i = 0;

  function typeProjects() {
    if (i < text.length) {
      $('#typing-projects').append(text.charAt(i));
      i++;
      setTimeout(typeProjects, 60); // typing speed
    }
  }

  typeProjects();
});

