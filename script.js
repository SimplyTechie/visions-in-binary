// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

// Smooth scroll
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    if (mobileMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
}

// Form Validation and Email Sending
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the default form submission

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  let valid = true;

  // Clear previous errors
  clearErrors();

  // Name Validation
  if (!name) {
      showError('name', 'Name is required');
      valid = false;
  }

  // Email Validation
  if (!email || !validateEmail(email)) {
      showError('email', 'Please enter a valid email');
      valid = false;
  }

  // Message Validation
  if (!message) {
      showError('message', 'Message cannot be empty');
      valid = false;
  }

  if (valid) {
      // Send email using EmailJS
      emailjs.sendForm('service_qp9wp0k', 'template_27bvmdr', this)
          .then(function(response) {
              alert('Message Sent Successfully!');
              e.target.reset();
          }, function(error) {
              alert('Failed to send message. Please try again.');
          });
  }
});

// Email Validation Function
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

// Show Error Function
function showError(field, message) {
  const errorElement = document.createElement('p');
  errorElement.classList.add('error');
  errorElement.textContent = message;
  const inputField = document.getElementById(field);
  inputField.style.borderColor = 'red';
  inputField.insertAdjacentElement('afterend', errorElement);
}

// Clear Errors Function
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(msg => msg.remove());

  const formFields = document.querySelectorAll('input, textarea');
  formFields.forEach(field => field.style.borderColor = '#ccc');
}

function createAnimatedBackground() {
  const symbols = ['13', '=>', '🙃', '</', '{', '}', '/>', 'O(n)', 'Ω(n)','φ','√', '∫', '∂', 'α', 'β', 'γ', 'π', '∑ ', 'Δ', '∇', '∞',, '∑', '∇', 'ℂ', 'Δ', 'λ', '∀', '∃', '⟦', '⟧', '→', '∝', '≠', ];
  const container = document.querySelector('.animated-bg');
  const fragment = document.createDocumentFragment();  // Create a fragment to minimize reflows

  // Pre-calculate random values to avoid recalculating multiple times inside the loop
  const symbolsLength = symbols.length;
  
  for (let i = 0; i < 50; i++) {
    const symbol = document.createElement('div');
    symbol.className = 'animated-symbol';
    symbol.textContent = symbols[Math.floor(Math.random() * symbolsLength)];
    symbol.style.left = `${Math.random() * 100}%`;
    symbol.style.top = `${Math.random() * 100}%`;
    symbol.style.animationDelay = `${Math.random() * 10}s`;
    symbol.style.fontSize = `${Math.random() * 20 + 10}px`;
    symbol.style.opacity = '0.9';

    fragment.appendChild(symbol);  // Append to the fragment instead of directly to the container
  }

  container.appendChild(fragment);  // Append the fragment to the container once all elements are created
}


// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', createAnimatedBackground);

// Typing effect
const typedText = document.getElementById('typed-text');
const text = "Dedicated to the pursuit of excellence through technological mastery and innovative solutions.";
let index = 0;

function typeText() {
  if (index < text.length) {
    typedText.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeText, 100);
  }
}

setTimeout(typeText, 1000);

// Interests section
const interests = [
  {
    icon: 'code-2',
    title: "Software Development",
    description: "Passionate about creating efficient, scalable applications using modern technologies."
  },
  {
    icon: 'brain',
    title: "Machine Learning",
    description: "Exploring AI and ML algorithms to solve complex real-world problems."
  },
  {
    icon: 'database',
    title: "Data Structures",
    description: "Experienced in optimizing data structures and algorithms."
  },
  {
    icon: 'shield',
    title: "Cybersecurity",
    description: "Interested in building secure systems and understanding security protocols."
  }
];

const interestsGrid = document.getElementById('interests-grid');
interests.forEach(interest => {
  const card = document.createElement('div');
  card.className = 'interest-card';
  card.innerHTML = `
    <div class="interest-icon">
      <i data-lucide="${interest.icon}"></i>
    </div>
    <h3 class="interest-title">${interest.title}</h3>
    <p>${interest.description}</p>
  `;
  interestsGrid.appendChild(card);
});

// Projects section
const projects = [
  {
    title: "GradeVista: Stay on Top of Your Grades 📚🎓",
    description:
      "A grade management tool for Computer Engineering students at PU, designed to track academic performance across engineering disciplines. It offers a user-friendly interface to input, monitor, and analyze grades. The tool helps students stay on top of their progress and make informed decisions for future coursework.",
    image: "/images/GradeVista.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    github: "https://github.com/binayakbartaula11/uni-grade-system",
    demo: "https://gradevista.netlify.app/"
  },
  {
    title: "TajaPhal: AI-Powered Fruit Freshness Detection 🍎🧪",
    description:
      "An AI-powered app that assesses fruit freshness using visual attributes, providing real-time predictions for Nepali fruit varieties to help reduce waste and make informed choices.",
    image: "/images/TajaPhal.jpg",
    tags: ["Machine Learning", "Python", "Flask", "Computer Vision"],
    category: "AI & ML",
    github: "https://github.com/binayakbartaula11/TajaPhal",
    demo: "#"
  },
  {
    title: "FlapFly: Fly to New Heights 🦅🐦",
    description:
      "An implementation of the classic Flappy Bird game with real-time scoring and automatic game-over handling.",
    image: "/images/FlapFly.jpg",
    tags: ["Java"],
    category: "Game Development",
    github: "https://github.com/binayakbartaula11/FlappyBird",
    demo: "#"
  }
];

const projectFilters = document.getElementById('project-filters');
const projectsGrid = document.getElementById('projects-grid');
let currentFilter = "All";

// Create filters
const categories = ["All", ...new Set(projects.map(project => project.category))];
categories.forEach(category => {
  const button = document.createElement('button');
  button.className = `filter-button ${category === currentFilter ? 'active' : ''}`;
  button.textContent = category;
  button.onclick = () => {
    currentFilter = category;
    updateProjects();
    // Update active state
    document.querySelectorAll('.filter-button').forEach(btn => {
      btn.classList.toggle('active', btn.textContent === category);
    });
  };
  projectFilters.appendChild(button);
});

function updateProjects() {
  projectsGrid.innerHTML = '';
  const filteredProjects = projects.filter(project => 
    currentFilter === "All" ? true : project.category === currentFilter
  );

  filteredProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i data-lucide="github"></i>
            <span>Code</span>
          </a>
          ${project.demo ? `
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i data-lucide="external-link"></i>
              <span>Live Demo</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
    lucide.createIcons();
  });
}

// Initial projects render
updateProjects();

// Skills section
const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 86 },
      { name: "JavaScript", level: 83 },
      { name: "C++", level: 78 },
      { name: "Java", level: 81 }      
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React", level: 77 },
      { name: "Node.js", level: 74 },
      { name: "TypeScript", level: 71 },
      { name: "HTML/CSS", level: 83 }
    ]
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "MongoDB", level: 68 }
    ]
  },
  {
    category: "Other Skills",
    items: [
      { name: "Machine Learning", level: 66 },
      { name: "Data Structures", level: 71 },
      { name: "System Design", level: 64 },
      { name: "Problem Solving", level: 73 }
    ]
  }
];

const skillsGrid = document.getElementById('skills-grid');
skills.forEach(category => {
  const section = document.createElement('div');
  section.className = 'skill-category';
  section.innerHTML = `
    <h3 class="category-title">${category.category}</h3>
    <div class="skill-items">
      ${category.items.map(skill => `
        <div class="skill-item">
          <div class="skill-header">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="transform: scaleX(${skill.level / 100})"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  skillsGrid.appendChild(section);
});

// Contact form initialization and handling
function initializeContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  const submitButton = form.querySelector('button[type="submit"]');
  
  // Form validation
  const validateForm = () => {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      // Remove previous error styling
      input.classList.remove('border-red-500');
      const errorSpan = input.nextElementSibling;
      if (errorSpan && errorSpan.classList.contains('error-text')) {
        errorSpan.remove();
      }
      
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('border-red-500');
        
        // Add error message
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-text text-red-500 text-sm mt-1';
        errorMessage.textContent = 'This field is required';
        input.insertAdjacentElement('afterend', errorMessage);
      } else if (input.type === 'email' && !isValidEmail(input.value)) {
        isValid = false;
        input.classList.add('border-red-500');
        
        // Add error message
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-text text-red-500 text-sm mt-1';
        errorMessage.textContent = 'Please enter a valid email address';
        input.insertAdjacentElement('afterend', errorMessage);
      }
    });
    
    return isValid;
  };
  
  // Email validation helper
  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  
  // Remove any existing form messages
  const removeFormMessages = () => {
    const existingMessages = form.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
  };
  
  // Form submission handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    removeFormMessages();
    
    // Validate form
    if (!validateForm()) return;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <i data-lucide="loader-2" class="loading-spinner"></i>
      Sending...
    `;
    lucide.createIcons();
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
      // Simulate form submission - replace with your actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log form data (remove in production or replace with actual form handling)
      console.log('Form submitted:', data);
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'form-message success-message';
      successMessage.innerHTML = `
        <i data-lucide="check-circle" class="w-5 h-5"></i>
        <span>Message sent successfully! I'll be in touch soon.</span>
      `;
      form.appendChild(successMessage);
      lucide.createIcons();
      
      // Reset form
      form.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.add('opacity-0');
        setTimeout(() => successMessage.remove(), 500);
      }, 5000);
      
    } catch (error) {
      // Show error message
      const errorMessage = document.createElement('div');
      errorMessage.className = 'form-message error-message';
      errorMessage.innerHTML = `
        <i data-lucide="alert-circle" class="w-5 h-5"></i>
        <span>Failed to send message. Please try again or contact me directly.</span>
      `;
      form.appendChild(errorMessage);
      lucide.createIcons();
      
      // Remove error message after 5 seconds
      setTimeout(() => {
        errorMessage.classList.add('opacity-0');
        setTimeout(() => errorMessage.remove(), 500);
      }, 5000);
      
      console.error('Form submission error:', error);
    } finally {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = `
        <span>Send Message</span>
        <i data-lucide="send" class="button-icon"></i>
      `;
      lucide.createIcons();
    }
  });
  
  // Enhance form fields with focus effects
  const inputFields = form.querySelectorAll('.input-field');
  inputFields.forEach(field => {
    // Add subtle animation when field is focused
    field.addEventListener('focus', () => {
      field.style.transform = 'translateY(-2px)';
    });
    
    field.addEventListener('blur', () => {
      field.style.transform = 'translateY(0)';
    });
  });
}

// Initialize the contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeContact();
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();