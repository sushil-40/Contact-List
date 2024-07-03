const apiEP = "https://randomuser.me/api?results=2";

let userList = [];

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

// fetching Data

const fetchUsers = async (url) => {
  // fetch the users
  // promise method
  // fetch(url)
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //async await

  const response = await fetch(url);
  const data = await response.json();
  userList = data.results;
  console.log(userList);
};

fetchUsers(apiEP);
