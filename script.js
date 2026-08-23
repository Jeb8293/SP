
const reveal = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  reveal.forEach(el => io.observe(el));
} else {
  reveal.forEach(el => el.classList.add("visible"));
}

const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobile-nav");
if (menu && mobile) {
  menu.addEventListener("click", () => mobile.classList.toggle("open"));
  mobile.querySelectorAll("a").forEach(a => a.addEventListener("click",()=>mobile.classList.remove("open")));
}

document.querySelectorAll(".size").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});

const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();
