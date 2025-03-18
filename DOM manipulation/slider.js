const programs = [
  {
    id: "fullstack",
    title: "Fullstack Software Development",
    url: "/fullstack",
    image: "fullstack.jpg",
    durationInMonths: 3,
  },
  {
    id: "android",
    title: "Android Software Development",
    url: "/learn-android",
    image: "android.jpg",
    durationInMonths: 4,
  },
  {
    id: "data",
    title: "Data Science, Machine Learning and AI",
    url: "/data-science",
    image: "data.jpg",
    durationInMonths: 6,
  },
  {
    id: "digital",
    title: "Digital MArketing and Social Media Management ",
    url: "/digital",
    image: "marketing.jpg",
    durationInMonths: 2,
  },
];

let currentSlideIndex = 0;

function showSlide(program) {
  // program - object {id: , title: , url: ,image: , durationInMonths: ,}
  let slideItemDiv = document.createElement("div");
  slideItemDiv.setAttribute("class", `slide-item ${program.id} active`);
  slideItemDiv.setAttribute("id", program.id);
  slideItemDiv.innerHTML = `
        <h1> ${program.title} </h1>
        <p> ${program.durationInMonths}  months</p>
        <a href="${program.url}">Learn More</a>
    `;
  slideItemDiv.style.backgroundImage = `url(${program.image})`;
  // clear slides container and put in the new slideItemDiv
  document.querySelector(".slides").innerHTML = "";
  document.querySelector(".slides").appendChild(slideItemDiv);
}
// show a default slide -- 0
showSlide(programs[currentSlideIndex]);
// go to next slide every four seconds
setInterval(() => {
  if (currentSlideIndex >= programs.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
    console.log(currentSlideIndex);
  }
  showSlide(programs[currentSlideIndex]);
}, 4000);
