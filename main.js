const cover = Array.from(document.getElementsByClassName("cover"))[0];
const covers1 = document.getElementById("covers1");
const covers2 = document.getElementById("covers2");
const continues = document.getElementById("continues");
const topRated = document.getElementById("topRated");
const moDal = document.getElementById("moDal");
const whole = Array.from(document.getElementsByClassName("whole"))[0];

const coverSecond = Array.from(
  document.getElementsByClassName("coverSecond")
)[0];
const seeAll = Array.from(document.getElementsByClassName("seeAll"))[0];

const onClick = () => {
  if (coverSecond.style.display === "none") {
    coverSecond.style.display = "flex";
    covers1.style.display = "none";
    covers2.style.display = "none";
    continues.style.display = "none";
    topRated.style.display = "none";
  } else {
    coverSecond.style.display = "none";
    covers1.style.display = "flex";
    covers2.style.display = "flex";
    continues.style.display = "flex";
    topRated.style.display = "flex";
  }
};

seeAll.addEventListener("click", onClick);

function linkModal() {
  window.location.href = "trailer.html";
}
