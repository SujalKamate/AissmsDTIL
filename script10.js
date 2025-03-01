// Toggle Hamburger Dropdown
document.getElementById('hamburger-menu').addEventListener('click', () => {
    const dropdown = document.getElementById('hamburger-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Toggle Settings Dropdown
  document.getElementById('settings-btn').addEventListener('click', () => {
    const dropdown = document.querySelector('.settings-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close Dropdowns When Clicking Outside
  window.addEventListener('click', (event) => {
    const hamburgerDropdown = document.getElementById('hamburger-dropdown');
    const settingsDropdown = document.querySelector('.settings-dropdown');
  
    if (!event.target.matches('#hamburger-menu')) {
      hamburgerDropdown.style.display = 'none';
    }
    if (!event.target.matches('#settings-btn')) {
      settingsDropdown.style.display = 'none';
    }
  });