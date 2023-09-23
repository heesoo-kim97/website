const intro = document.getElementById("intro");
const web = document.getElementById("web");

console.log(web);

setTimeout(() => {
  intro.classList.add("hidden");
}, 8000);

setTimeout(() => {
  web.classList.remove("hidden");
}, 5000);

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  console.log(nav.offsetHeight);
  if (window.scrollY > nav.offsetHeight * 150) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}
