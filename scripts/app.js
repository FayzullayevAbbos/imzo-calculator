const one_branch = document.getElementById("one_branch");
const second_branch = document.getElementById("second_branch");
const therd_branch = document.getElementById("therd_branch");

const section1Div = document.getElementById("sec1-div");
const section1Image = document.getElementById("sec1-img");

const section2Div = document.getElementById("sec2-div");
const section2Image = document.getElementById("sec2-img");

const section3Div = document.getElementById("sec3-div");
const section3Image = document.getElementById("sec3-img");

const centerImg = document.getElementById("center-img");

const dataImg = [
  {
    id: 6,
    image:
      "https://imzo.uz/uploads/configurator/double/image_2_1.svg",
  },
  {
    id: 7,
    image:
      "	https://imzo.uz/uploads/configurator/double/image_2_2.svg",
  },
  {
    id: 8,
    image:
      "https://imzo.uz/uploads/configurator/double/image_2_2.svg",
  },
  {
    id: 9,
    image:
      "https://imzo.uz/uploads/configurator/double/image_2_3.svg",
  },
  {
    id: 10,
    image:
      "	https://imzo.uz/uploads/configurator/double/image_2_3.svg",
  },
  {
    id: 11,
    image:
      "https://imzo.uz/uploads/configurator/double/image_2_4.svg",
  },
  {
    id: 12,
    image:
      "	https://imzo.uz/uploads/configurator/double/image_2_4.svg",
  },
  {
    id: 13,
    image:
      "https://imzo.uz/uploads/configurator/double/image_2_4.svg",
  },
  {
    id: 14,
    image:
      "https://imzo.uz/uploads/configurator/tricuspid/image_3_1.svg",
  },
  {
    id: 15,
    image:
      "	https://imzo.uz/uploads/configurator/tricuspid/image_3_2.svg",
  },
  {
    id: 16,
    image:
      "https://imzo.uz/uploads/configurator/tricuspid/image_3_2.svg",
  },
  {
    id: 16,
    image:
      "	https://imzo.uz/uploads/configurator/tricuspid/image_3_3.svg",
  },
  {
    id: 17,
    image:
      "	https://imzo.uz/uploads/configurator/tricuspid/image_3_4_1.svg",
  },
];
section1Div.addEventListener("click", () => {
  one_branch.classList.toggle("grid-window");
  second_branch.classList.remove("grid-window");
  therd_branch.classList.remove("grid-window");
});
section2Div.addEventListener("click", () => {
  second_branch.classList.toggle("grid-window");
  one_branch.classList.remove("grid-window");
  therd_branch.classList.remove("grid-window");
});
section3Div.addEventListener("click", () => {
  therd_branch.classList.toggle("grid-window");
  second_branch.classList.remove("grid-window");
  one_branch.classList.remove("grid-window");
});

function changeCenterImage(url, n) {
  centerImg.innerHTML = `
    <img 
        class="w-full"
        src=${url}
        alt="img"
       />
   `;
  one_branch.classList.remove("grid-window");
  second_branch.classList.remove("grid-window");
  second_branch.classList.remove("grid-window");
  if (n == 1) {
    section1Image.classList.remove('active')
    section1Image.classList += "active";
    section2Image.classList.remove('active')
    section3Image.classList.remove('active')
  } else if (n == 2) {
    section2Image.classList.remove('active')
    section2Image.classList += "active";
    section3Image.classList.remove('active')
    section1Image.classList.remove('active')
  } else {
    section3Image.classList.remove('active')
    section3Image.classList += "active";
    section2Image.classList.remove('active')
    section1Image.classList.remove('active')
  }
}
