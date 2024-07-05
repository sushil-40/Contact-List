const apiEP = "https://randomuser.me/api?results=6";

let userList = [];

// slide to go to app screen

const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  // console.log(e.target.value);
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
  // console.log(userList);

  //hide the spinner
  document.querySelector(".showSpinner").style.display = "none";

  //show the user
  displayContactList(userList);
};

//display contact list
const displayContactList = (userList) => {
  document.getElementById("list").style.display = "block";

  let str = "";

  userList.map((item, index) => {
    str += `<div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse${index}"
                      aria-expanded="false"
                      aria-controls="collapse${index}"
                    >
                      <img
                        src="${item.picture.large}"
                        alt=""
                        width="50px"
                        class="rounded-circle"
                      />
                      <div class="ms-2">
                        <div class="fw-bolder">${item.name.title} ${item.name.first} ${item.name.last}</div>
                        <small>${item.location.street.number} ${item.location.street.name} </small>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="collapse${index}"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div
                      class="accordion-body d-flex flex-column align-items-center"
                    >
                      <img
                        src="${item.picture.large}"
                        alt=""
                        width="150px"
                        class="rounded-circle"
                      />
                      <div>
                        <div class="fw-bolder">
                          <i class="bi bi-person-circle"></i>${item.name.title} ${item.name.first} ${item.name.last}
                        </div>
                        <div>
                          <a href="tel: 53213">
                            <i class="bi bi-phone"></i> ${item.cell}</a
                          >
                        </div>
                        <div><i class="bi bi-phone"></i>${item.email}</div>
                       
             <div>         
                 <a
          href="https://www.google.com/maps/place/${item.location.street.number}+${item.location.street.name}+${item.location.city}+${item.location.state}+${item.location.country}"
          target="_blank"
        >
                  
                          <i class="bi bi-globe-asia-australia"></i> ${item.location.street.number} ${item.location.street.name} 
                          ${item.location.state}

                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
  });
  document.getElementById("userAccordion").innerHTML = str;

  document.getElementById("userCount").innerText = userList.length;
};

//search contact

document.getElementById("search").addEventListener("keyup", (e) => {
  const { value } = e.target;
  const filteredUsers = userList.filter((item) => {
    const name = (item.name.first + " " + item.name.last).toLowerCase();
    return name.includes(value.toLowerCase());
  });
  // console.log(filteredUsers);

  displayContactList(filteredUsers);
});

const displayContactScreen = () => {
  //hide home screen
  document.querySelector(".appScreen").remove();

  //show app screen
  document.querySelector(".contactListScreen").style.display = "block";

  fetchUsers(apiEP);
};

//Display time in mobile layout

const timeNow = document.getElementById("timeDisplay");
// console.log(timeNow, "Hello");
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();
// console.log(time);
timeNow.append(time);

//Sort By Gender

const sortByGender = (gender) => {
  const filteredUsers = userList.filter((item) => item.gender === gender);
  displayContactList(filteredUsers);
};

// sort by Male
const sortByMale = document.getElementById("male");
sortByMale.addEventListener("click", () => {
  sortByGender("male");
});

//sort by Female
const sortByFemale = document.getElementById("female");
sortByFemale.addEventListener("click", () => {
  sortByGender("female");
});
console.log(userList);
