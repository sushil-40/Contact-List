// slide to go to app screen

const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  console.log(e.target.value);
  const label = document.getElementById("label");

  //   alert("you can go to next");
  if (value > 70) {
    label.textContent = "";
    displayScreen();
  } else {
    label.textContent = "Slide To Unlock";
  }
});

const displayScreen = () => {
  //hide home screen
  document.querySelector(".homeScreen").remove();

  //show app screen
  document.querySelector(".appScreen").style.display = "block";
};
