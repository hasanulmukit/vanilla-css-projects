document.addEventListener("mousemove", (e) => {
    const circles = document.querySelectorAll(".circle");
  
    circles.forEach((circle, index) => {
      const delay = index * 50;
      setTimeout(() => {
        circle.style.left = `${e.pageX}px`;
        circle.style.top = `${e.pageY}px`;
        circle.style.transform = `translate(-50%, -50%) scale(${1 - index * 0.2})`;
      }, delay);
    });
  });
  