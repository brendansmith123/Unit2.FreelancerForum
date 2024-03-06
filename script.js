// creating h1 tag
const h1 = document.querySelector("h1");
h1.textContent = "Freelancer Forum";

//creating h2 tag
const h2 = document.querySelector("h2");
h2.textContent = "Available Freelancers";

//creating freelancers
const name = ["Alice", "Bob", "Anna", "Parker", "Kelsie", "Seth"];
const occupation = [
  "Writer",
  "Teacher",
  "Programmer",
  "Barber",
  "Lawyer",
  "Cook",
];

// adding prices for each name and occupation
const startingPrice = ["30", "50", "70", "80", "100", "120"];
const divIds = ["name", "occupation", "prices"];
const averageArray = [];
const averagePrice = document.querySelector(`#average`);

// display each section with an h3 header for name, occupation, and starting price
function freelancerUl(arr) {
  for (let i = 0; i < arr.length; i++) {
    const section = document.querySelector(`#${arr[i]}`);
    const h3 = document.createElement("h3");
    if (arr[i] === "name") {
      h3.innerText = "Name";
    } else if (arr[i] === "occupation") {
      h3.innerText = "Occupations";
    } else if (arr[i] === "prices") {
      h3.innerText = "Starting Prices";
    }
    section.appendChild(h3);
    const ul = document.createElement("ul");
    ul.id = `${arr[i]}-ul`;

    section.appendChild(ul);
  }
}

// display their names, occupations, and starting prices
function displayInfo(idArr) {
  let index = 0;
  const displayInterval = setInterval(() => {
    displayLine(idArr);
  }, 1000);
  function displayLine(idArr) {
    for (let i = 0; i < idArr.length; i++) {
      const ul = document.querySelector(`#${idArr[i]}-ul`);
      const li = document.createElement("li");

      if (idArr[i] === "name") {
        li.innerText = name[index];
      } else if (idArr[i] === "occupation") {
        li.innerText = occupation[index];
      } else if (idArr[i] === "prices") {
        li.innerText = `$${startingPrice[index]}`;
      }
      ul.appendChild(li);
    }
    averageArray.push(+startingPrice[index]);
    averagePrice.innerText = `The average starting price is $${calculateAverage(
      averageArray
    )}`;

    index++;
    if (index === name.length) {
      clearInterval(displayInterval);
    }
  }
}

// Calculating the average starting price
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;

  return average;
}

function render() {
  const infoContainer = document.querySelector("#info-container");
  infoContainer.style.display = "flex";
  freelancerUl(divIds);
  displayInfo(divIds, name, occupation, startingPrice);
}

render();
