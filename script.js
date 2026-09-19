document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu
  const burgerBtn = document.getElementById('burgerBtn');
  const closeBurger = document.getElementById('closeBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  if(burgerBtn){
    burgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  }
  if(closeBurger){
    closeBurger.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // Enrollment form -> mailto
  const enrollForm = document.getElementById('enrollForm');
  const enrollStatus = document.getElementById('enrollStatus');
  enrollForm.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(enrollForm);
    const parentName = data.get('parentName') || '';
    const childName = data.get('childName') || '';
    const childAge = data.get('childAge') || '';
    const phone = data.get('phone') || '';
    const email = data.get('email') || '';
    const mealPlan = data.get('mealPlan') || '';
    const message = data.get('message') || '';

    const subject = 'Enrollment Enquiry - ' + childName;
    const body =
      'New enrollment enquiry from the Kiddies Time website:\n\n' +
      'Parent / Guardian: ' + parentName + '\n' +
      "Child's Name: " + childName + '\n' +
      "Child's Age: " + childAge + '\n' +
      'Contact Number: ' + phone + '\n' +
      'Email: ' + email + '\n' +
      'Meal Plan: ' + mealPlan + '\n' +
      'Message: ' + (message || '-') ;

    const mailto = 'mailto:kiddiestime55@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    enrollStatus.style.display = 'block';
    window.location.href = mailto;
  });