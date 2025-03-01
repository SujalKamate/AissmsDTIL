// JavaScript for Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function () {
  const dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// JavaScript for Scrolling Notifications (Optional)
// The <marquee> tag is used for simplicity. For modern solutions, consider using CSS animations or JavaScript libraries.
document.querySelector('.settings').addEventListener('click',function (){
const dropdown= document.querySelector('dropdown-conent');
dropdown.style.display=dropdown.style.display==='block'?'none':'block';
});