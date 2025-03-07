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
  }, 800); // Match the transition duration
}

window.addEventListener('mousemove', positionElement)

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});