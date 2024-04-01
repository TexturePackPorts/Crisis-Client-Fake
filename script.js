document.addEventListener("mousemove", function(e) {
    const mainContent = document.getElementById("mainContent");
    const xOffset = (window.innerWidth / 2 - e.pageX) / 30;
    const yOffset = (window.innerHeight / 2 - e.pageY) / 30;
    mainContent.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
  });