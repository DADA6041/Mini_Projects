const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const parent = header.parentElement;
    const activeContent = parent.querySelector('.accordion-content.active');
    if (activeContent && activeContent !== header.nextElementSibling) {
      activeContent.classList.remove('active');
      activeContent.style.display = 'none';
    }

    const content = header.nextElementSibling;
    if (content.style.display === 'block') {
      content.classList.remove('active');
      content.style.display = 'none';
    } else {
      content.classList.add('active');
      content.style.display = 'block';
    }
  });
});