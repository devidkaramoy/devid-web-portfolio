// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove Toggle icon and navbar when click link navbar
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Dark light mode
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

// Scroll reveal
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".skills-container, .projects-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", { origin: "right" });

// Typed JS
const typed = new Typed(".multiple-text", {
  strings: ["Front-end Dev", "Conten Creator", "Administrator"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Kirim data form ke email
function sendEmail(contactForm) {
  emailjs
    .send("service_hxwx9vm", "template_cknz8m6", {
      name: contactForm.name.value,
      email: contactForm.email.value,
      number: contactForm.number.value,
      message: contactForm.message.value,
    })
    .then(
      function (response) {
        console.log("Pesan berhasil dikirim!", response);
        showSuccessMessage(); // Menampilkan pemberitahuan sukses
      },
      function (error) {
        console.log("Pesan gagal dikirim!", error);
        showErrorMessage(); // Menampilkan pemberitahuan gagal
      }
    );
  return false; // Mencegah formulir dikirim ulang
}

// Fungsi untuk menampilkan pemberitahuan sukses
function showSuccessMessage() {
  var alert = document.getElementById("alert");
  alert.className = "alert-success"; // Ganti dengan kelas CSS untuk pemberitahuan sukses
  alert.innerHTML = "Your message sent Successfully!"; // Ganti dengan teks pemberitahuan sukses
}

// Fungsi untuk menampilkan pemberitahuan gagal
function showErrorMessage() {
  var alert = document.getElementById("alert");
  alert.className = "alert-danger"; // Ganti dengan kelas CSS untuk pemberitahuan gagal
  alert.innerHTML = "Your Message Failed to send!"; // Ganti dengan teks pemberitahuan gagal
}

// Menambahkan event listener untuk mengirim email ketika formulir dikirim
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah formulir dikirim ulang
  sendEmail(this); // Mengirim email
});
