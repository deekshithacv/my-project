// Quick Enquiry Form
document.getElementById('quickForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('qmsg').style.display = 'block';
  setTimeout(() => {
    document.getElementById('qmsg').style.display = 'none';
  }, 3000);
  this.reset();
});

// Admission Form
document.getElementById('admissionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  if (!name) {
    alert('Please enter your name');
    return;
  }
  document.getElementById('admsg').style.display = 'block';
  this.reset();
});


