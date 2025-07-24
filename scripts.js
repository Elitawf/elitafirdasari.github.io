// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Function to load HTML partials into the main content area with fade-in animation
async function loadSection(sectionName) {
  const response = await fetch(`partials/${sectionName}.html`);
  if (!response.ok) {
    console.error(`Failed to load ${sectionName} section`);
    return;
  }
  const html = await response.text();
  const container = document.createElement('div');
  container.innerHTML = html;
  container.classList.add('fade-in-up');
  document.getElementById('content').appendChild(container);
}

// Load all sections in order
async function loadAllSections() {
  const sections = ['hero', 'projects', 'about', 'contact'];
  for (const section of sections) {
    await loadSection(section);
  }
}

// Initialize
loadAllSections();
