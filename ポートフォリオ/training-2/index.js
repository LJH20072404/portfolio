document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.0000001 } // 当50%内容进入视口时触发
  );

  containers.forEach((container) => {
    observer.observe(container);
  });
});