const cursorSmall = document.querySelector('.small');
// const cursorBig = document.querySelector('.big');


const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("hidden");
});

function fadeOutAndRedirect(url) {
  document.body.classList.add("hidden");
  setTimeout(() => {
      window.location.href = url;
  }, 400); // Match the transition duration
}

window.addEventListener('mousemove', positionElement)
