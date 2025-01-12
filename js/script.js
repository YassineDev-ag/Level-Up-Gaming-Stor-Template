
 // JavaScript to toggle dropdown visibility
 document.getElementById('dropdown-toggle').addEventListener('click', function() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside of it
window.addEventListener('click', function(event) {
  const dropdown = document.getElementById('dropdown-menu');
  const toggleButton = document.getElementById('dropdown-toggle');
  if (!toggleButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});
document.getElementById('whatsapp-link').addEventListener('click', function() {
  window.open('https://wa.me/212699860581', '_blank'); // Replace with your actual phone number
});