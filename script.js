const carousel = document.getElementById('carousel');

function updateCarousel() {
  const firstImage = carousel.children[0];
  const clone = firstImage.cloneNode(true);
  carousel.appendChild(clone);
  carousel.removeChild(firstImage);
}

setInterval(updateCarousel, 2000); // Auto-rotate every 3 seconds




document.querySelectorAll('animated-list a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
function animateOnLoad() {
  var sections = document.querySelectorAll('section,div');

  sections.forEach(function (element) {
    element.classList.add('visible');
  });
}

// Add an event listener for page load
window.addEventListener('load', animateOnLoad);

// Your existing animateSection function
function animateSection(sectionId) {
  var section = document.getElementById(sectionId);

  // Add a class to the section to trigger CSS animation
  section.classList.add("animated-section");

  // After a delay, remove the class to reset the animation for future clicks
  setTimeout(function () {
    section.classList.remove("animated-section");
  }, 8000); // Adjust the duration of the animation in milliseconds
}

    // Function to toggle description
    function toggleDescription(card) 
    {
        card.classList.toggle('open');
    }

    // Function to handle applying for a job
    function applyNow(jobTitle) {
        alert(`You have applied for ${jobTitle}`);
    }

    // Function to apply HTML
    function applyHTML() {
        // HTML code to be injected
        var dynamicHTML = `
            <h2>This is dynamically injected HTML</h2>
            <p>You can customize this content as needed.</p>
            <div class="job-card" onclick="toggleDescription(this)">
                <h2>Job 2</h2>
                <div class="job-details">
                    <select>
                        <option value="" disabled selected>Select Description</option>
                        <option value="desc1">Description 1 for Job 2</option>
                        <option value="desc2">Description 2 for Job 2</option>
                        <option value="desc3">Description 3 for Job 2</option>
                    </select>
                    <button onclick="applyNow('Job 2')">Apply Now</button>
                </div>
            </div>
        `;

        // Get the element where you want to inject the HTML
        var dynamicContentContainer = document.getElementById('dynamicContent');

        // Append the HTML code
        dynamicContentContainer.innerHTML += dynamicHTML;

        // Save the content to local storage
        localStorage.setItem('dynamicContent', dynamicContentContainer.innerHTML);
    }

    // Function to delete the last HTML
    function deleteLast() {
        // Get the element where HTML is injected
        var dynamicContentContainer = document.getElementById('dynamicContent');

        // Remove the last child (last dynamically added HTML)
        var lastChild = dynamicContentContainer.lastChild;
        if (lastChild) {
            dynamicContentContainer.removeChild(lastChild);

            // Save the updated content to local storage
            localStorage.setItem('dynamicContent', dynamicContentContainer.innerHTML);
        }
    }

    // Retrieve and apply content from local storage on page load
    document.addEventListener('DOMContentLoaded', function() {
        var dynamicContentContainer = document.getElementById('dynamicContent');
        var storedContent = localStorage.getItem('dynamicContent');
        if (storedContent) {
            dynamicContentContainer.innerHTML = storedContent;
        }
    });
