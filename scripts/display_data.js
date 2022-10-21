var key = sessionStorage.getItem("key");
console.log(key);
var data = [
  {
    first_name: "Jude Michael",
    female_surname: "Felipe",
    male_surname: "Gatchalian",
    generation: "Latest Generation",
    status: "Alive",
    birth: "January 2003",
    historical_experiences: "COVID19 Pandemic, Potential Global Recession",
    anecdote: "Maker of this website, owo.",
  },
  {
    first_name: "Maria Ana",
    female_surname: "Hernandez",
    male_surname: "Felipe",
    generation: "2nd Latest Generation",
    status: "Alive",
    birth: "April 1974",
    historical_experiences:
      "EDSA Revolution, Mount Pinatubo Eruption, COVID 19 Pandemic",
    anecdote: "VitaPlus Seller",
  },
  {
    first_name: "Michael",
    female_surname: "Robles",
    male_surname: "Gatchlian",
    generation: "2nd Latest Generation",
    status: "Alive",
    birth: "October 1973",
    historical_experiences:
      "EDSA Revolution, Mount Pinatubo Eruption, COVID 19 Pandemic",
    anecdote:
      "Pumunta lang sa Pilipinas ng isang araw, tatlong beses palang nagkita",
  },
  {
    first_name: "Ester",
    female_surname: "Hernandez",
    male_surname: "",
    generation: "3rd Latest Generation",
    status: "Deceased",
    birth: "June 1948",
    historical_experiences:
      "Rehabilitation from the World War 2, Martial Law by FM",
    anecdote: "No data available",
  },
  {
    first_name: "Edilberto",
    female_surname: "",
    male_surname: "Felipe",
    generation: "3rd Latest Generation",
    status: "Deceased",
    birth: "March 1943",
    historical_experiences: "World War 2, Martial Law by FM",
    anecdote: "Palaging kasama mamasyal sa ilog at Caniogan",
  },
  {
    first_name: "Violeta",
    female_surname: "Robles",
    male_surname: "",
    generation: "3rd Latest Generation",
    status: "Deceased",
    birth: "May 1947",
    historical_experiences:
      "Rehabilitation from the World War 2, Martial Law by FM",
    anecdote: "Instant 300 php tuwing Pasko, Namimigay paninda",
  },
  {
    first_name: "Rolando",
    female_surname: "",
    male_surname: "Gatchalian",
    generation: "3rd Latest Generation",
    status: "Deceased",
    birth: "April 1949",
    historical_experiences:
      "Rehabilitation from the World War 2, Martial Law by FM",
    anecdote: "No data available",
  },
  {
    first_name: "Soledad",
    female_surname: "Hernandez",
    male_surname: "",
    generation: "4th Latest Generation",
    status: "Deceased",
    birth: "No Data",
    historical_experiences:
      "Probably lived through World War 1, American Occupation, Japanese Occupation",
    anecdote: "No data available",
  },
  {
    first_name: "Elpidio",
    female_surname: "",
    male_surname: "Hernandez",
    generation: "4th Latest Generation",
    status: "Deceased",
    birth: "No data",
    historical_experiences:
      "Probably lived through World War 1, American Occupation, Japanese Occupation",
    anecdote: "No data available",
  },
  {
    first_name: "Felicidad",
    female_surname: "Felipe",
    male_surname: "",
    generation: "4th Latest Generation",
    status: "Deceased",
    birth: "February 1914",
    historical_experiences:
      "World War 1, American Occupation, Japanese Occupation",
    anecdote: "No data available",
  },
  {
    first_name: "Federico",
    female_surname: "",
    male_surname: "Felipe",
    generation: "4th Latest Generation",
    status: "Deceased",
    birth: "No data",
    historical_experiences:
      "Probably lived through World War 1, American Occupation, Japanese Occupation",
    anecdote: "No data available",
  },
  {
    first_name: "Amado",
    female_surname: "",
    male_surname: "Robles",
    generation: "4th Latest Generation",
    status: "Deceased",
    birth: "February 1912",
    historical_experiences:
      "World War 1, American Occupation, Japanese Occupation",
    anecdote: "No data available",
  },
  {
    first_name: "Miguel",
    female_surname: "Robles",
    male_surname: "",
    generation: "4th Latest Generation",
    status: "Deceased",
    birth: "May 1920",
    historical_experiences:
      "World War 1, American Occupation, Japanese Occupation",
    anecdote: "Madaling manigarilyo ng mga old-school na sigarilyo, madaling kausap nung bata ako",
  },
];

console.log(data[key].generation);
document.getElementById("generation").innerHTML = data[key].generation;
document.getElementById("status").innerHTML = data[key].status;
document.getElementById("birth").innerHTML = data[key].birth;
document.getElementById("histo_exp").innerHTML =
  data[key].historical_experiences;
document.getElementById("anecdote").innerHTML = data[key].anecdote;
document.getElementById("name").innerHTML =
  data[key].first_name +
  " " +
  data[key].female_surname +
  " " +
  data[key].male_surname;
sessionStorage.clearItem;

function returnHome() {
  window.close();
}
