window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  const header = document.getElementById("header");
  if (header !== null) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDownMenu = document.querySelector('.dropdown_menu');

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  };
});



const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth - 10;
  const y = e.clientY - trailer.offsetHeight - 10;
  const offSetCorrection = 15;

  const keyframes = {
    transform: `translate(
                  ${interacting ? x + offSetCorrection : x}px, 
                  ${interacting ? y + offSetCorrection : y}px) 
                  scale(${interacting ? 5 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 1000,
    fill: "forwards",
  });
};

window.onmousemove = (e) => {
  const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;
  animateTrailer(e, interacting);
};

let words = document.querySelectorAll(".word");
words.forEach(word => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach(letter => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);


document.addEventListener("DOMContentLoaded", function() {
  var modais = document.querySelectorAll(".modal");
  var imgs = document.querySelectorAll(".experiencesContent img");

  imgs.forEach(function(img, index) {
    img.onclick = function() {
      modais[index].style.display = "flex";
    }
  });

  var fechar = document.querySelectorAll(".close");

  fechar.forEach(function(botao, index) {
    botao.onclick = function() {
      modais[index].style.display = "none";
    }
  });

  window.onclick = function(event) {
    modais.forEach(function(modal) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
});
