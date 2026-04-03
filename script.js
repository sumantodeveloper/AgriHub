
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelector(".search-box button").addEventListener("click", () => {
  const query = document.querySelector(".search-box input").value;
  if(query){
    alert("Searching for: " + query);
  } else {
    alert("Please enter a search term!");
  }
});

document.querySelectorAll(".feature-card .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const title = btn.parentElement.querySelector("h3").innerText;
    alert("You selected: " + title);
  });
});



document.querySelectorAll(".crop-card .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const crop = btn.parentElement.querySelector("h3").innerText;
    alert("You selected: " + crop);
  });
});



document.querySelector(".expert form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Your query has been sent to our experts!");
});


document.querySelector(".expert-news .btn").addEventListener("click", () => {
  alert("You will now receive updates from improvement experts!");
});



document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tabId = btn.getAttribute("data-tab");
    document.querySelectorAll(".tab-content").forEach(content => {
      content.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
  });
});


document.querySelectorAll(".tutorial-card .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const guide = btn.parentElement.querySelector("h3").innerText;
    alert("You selected: " + guide);
  });
});


document.querySelectorAll(".pest-card .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const pest = btn.parentElement.querySelector("h3").innerText;
    alert("You selected: " + pest);
  });
});


document.querySelector(".contact-btn").addEventListener("click", () => {
  alert("Redirecting to Agricultural Expert Contact Form...");
});



document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
});


window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});


document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
