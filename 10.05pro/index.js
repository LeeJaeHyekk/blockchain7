let clickCount = 0;
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
let slideCount = slide.length;
let slidemargin = 30;
let slidewidth = 900;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

function playVideo(num) {
  let playVideo2 = document.getElementById("item2v");
  let playVideo4 = document.getElementById("item4v");
  let playVideo5 = document.getElementById("item5v");
  let playVideo7 = document.getElementById("item7v");
  let playVideo8 = document.getElementById("item8v");
  let playVideo10 = document.getElementById("item10v");
  let playVideo11 = document.getElementById("item11v");
  let playVideo12 = document.getElementById("item12v");
  let playVideo13 = document.getElementById("item13v");
  let playVideo14 = document.getElementById("item14v");
  let playVideo100 = document.getElementById("item100v");
  let playVideo110 = document.getElementById("item110v");
  let playVideo120 = document.getElementById("item120v");

  let playimgoff2 = document.getElementById("imgBt2");
  let playimgoff4 = document.getElementById("imgBt4");
  let playimgoff5 = document.getElementById("imgBt5");
  let playimgoff7 = document.getElementById("imgBt7");
  let playimgoff8 = document.getElementById("imgBt8");
  let playimgoff10 = document.getElementById("imgBt10");
  let playimgoff11 = document.getElementById("imgBt11");
  let playimgoff12 = document.getElementById("imgBt12");
  let playimgoff13 = document.getElementById("imgBt13");
  let playimgoff14 = document.getElementById("imgBt14");
  let playimgoff100 = document.getElementById("imgBt100");
  let playimgoff110 = document.getElementById("imgBt110");
  let playimgoff120 = document.getElementById("imgBt120");

  while (true) {
    if (num === 2) {
      playVideo2.play();
      playimgoff2.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo2.pause();
        playimgoff2.style.visibility = "visible";
      }
    } else if (num === 4) {
      playVideo4.play();
      playimgoff4.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo4.pause();
        playimgoff4.style.visibility = "visible";
      }
    } else if (num === 5) {
      playVideo5.play();
      playimgoff5.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo5.pause();
        playimgoff5.style.visibility = "visible";
      }
    } else if (num === 7) {
      playVideo7.play();
      playimgoff7.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo7.pause();
        playimgoff7.style.visibility = "visible";
      }
    } else if (num === 8) {
      playVideo8.play();
      playimgoff8.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo8.pause();
        playimgoff8.style.visibility = "visible";
      }
    } else if (num === 10) {
      playVideo10.play();
      playimgoff10.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo10.pause();
        playimgoff10.style.visibility = "visible";
      }
    } else if (num === 11) {
      playVideo11.play();
      playimgoff11.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo11.pause();
        playimgoff11.style.visibility = "visible";
      }
    } else if (num === 12) {
      playVideo12.play();
      playimgoff12.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo12.pause();
        playimgoff12.style.visibility = "visible";
      }
    } else if (num === 13) {
      playVideo13.play();
      playimgoff13.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo13.pause();
        playimgoff13.style.visibility = "visible";
      }
    } else if (num === 14) {
      playVideo14.play();
      playimgoff14.style.visibility = "hidden";
      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo14.pause();
        playimgoff14.style.visibility = "visible";
      }
    } else if (num === 100) {
      playVideo100.play();

      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo100.pause();
      }
    } else if (num === 110) {
      playVideo110.play();

      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo110.pause();
      }
    } else if (num === 120) {
      playVideo120.play();

      clickCount++;

      if (clickCount % 2 === 0) {
        playVideo120.pause();
      }
    }
    break;
  }
}

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);
}
function updateWidth() {
  let currentSlides = document.querySelectorAll(".slides li");
  let newSlideCount = currentSlides.length;
  let newWidth =
    (slidewidth + slidemargin) * newSlideCount - slidemargin + "px";
  slides.style.width = newWidth;
}

function setInitialPos() {
  let interialTranslateValue = -(slidewidth + slidemargin) * slideCount;
  slides.style.transform = "translateX(" + interialTranslateValue + "px)";
}

nextBtn.addEventListener("click", function () {
  moveslide(currentIdx + 1);
});
prevBtn.addEventListener("click", function () {
  moveslide(currentIdx - 1);
});
function moveslide(num) {
  slides.style.left = -num * (slidewidth + slidemargin) + "px";
  currentIdx = num;

  if (currentIdx == slideCount || currentIdx == -slideCount) {
    setTimeout(function () {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 10);
    setTimeout(function () {
      slides.classList.add("animated");
    }, 400);
  }
}

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    let toAdd = document.createElement("div");
    let newnew = document.createElement("div");
    toAdd.classList.add("box");
    document.getElementsByTagName("section")[0].appendChild(toAdd);
    const str = document.getElementById("itbx").outerHTML;
    if (toAdd) {
      newnew.innerHTML = str;
      toAdd.appendChild(newnew);
    }
  }
};
