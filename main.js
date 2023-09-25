window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
function toggle() {
  var header = document.getElementById('header');
  header.classList.toggle('active')
}

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('myForm');
  const formData = new FormData(form);

  console.log('Form data submitted:', formData);

  form.reset();
}

const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);
