var tl = gsap.timeline();

/* LOADER */

let counter = document.querySelector(".loader h1");

const loaderEffect = () => {
  let a = 0;
  setInterval(() => {
    a = a + Math.floor(Math.random() * 15);
    if (a < 100) {
      counter.innerHTML = a + "% ";
    } else {
      a = 100;
      counter.innerHTML = a + "% ";
    }
  }, 150);
};

tl.to("loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: loaderEffect(),
});

tl.to(".loader", {
  top: "-100vh",
  delay: 0.5,
  duration: 1,
});

tl.from("h3", {
  duration: 1,
  delay: 0.5,
  y: -100,
  opacity: 0,
  stagger: 1,
});

tl.from("nav ul li", {
  y: 100,
  duration: 1,
  opacity: 0,
  rotate: 180,
  stagger: 0.4,
});

tl.from("nav .buttons", {
  x: 100,
  duration: 1,
  opacity: 0,
});

tl.from(".page1 h1", {
  y: 150,
  stagger: 0.8,
  duration: 1,
  opacity: 0,
});

tl.from("main>.page1>h5", {
  scale: 0,
  opacity: 0,
  duration: 2,
});

tl.to("h5", {
  y: 30,
  repeat: -1,
  duration: 0.5,
  yoyo: true,
});

tl.to("main>.page2>h1", {
  transform: "translateX(-668%)",
  fontWeight: "50",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    // markers: true,
    start: "top 0",
    end: "top -200%",
    scrub: 1,
    pin: true,
  },
});

tl.from(".page2 > .images > img", {
  duration: 1,
  scale: 0,
  rotate: 360,
  opacity: 0,
  stagger: 1,
  repeat: -1,
  yoyo: true,
});

gsap.from(".page3", {
  scale: 0,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    scrub: 1,
    start: "top 200%",
  },
});

// VIDEOS
document.addEventListener("DOMContentLoaded", function () {
  let videos = document.querySelectorAll(".page2 .images video");

  videos.forEach((video) => {

    video.addEventListener("mouseenter", () => {
      video.style.width = "610px";
      video.play();
    });
    video.addEventListener("mouseleave", () => {
      video.load();
    });
  });
});

document
  .getElementById("text")
  .addEventListener("mouseenter", function (event) {
    document.getElementById("image").style.display = "block"; // Show the image
    moveImage(event); // Call moveImage function to move the image
  });

document.getElementById("text").addEventListener("mouseleave", function () {
  document.getElementById("image").style.display = "none"; // Hide the image when mouse leaves text
});

function moveImage(event) {
  var img = document.getElementById("image");
  img.style.left = event.pageX - img.width / 2 + "px"; // Adjust image position based on cursor
  img.style.top = event.pageY - img.height / 2 + "px";
}
