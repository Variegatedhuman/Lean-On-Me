const searchForm = document.querySelector("#search-form");
const searchResults = document.querySelector("#search-results");

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(searchForm);
  const query = formData.get("query");
  const category = formData.get("category");
  const searchTerm = document.querySelector("#search-term").value


  const response = await fetch(
    `/api/posts?query=${query}&category=${category}`,{method:"GET",body:JSON.stringify(searchTerm)}

  );
  const { data } = await response.json();

  // Pass the search results to the handlebars template and render it
  const searchResultsTemplate = Handlebars.compile(document.querySelector('#search-results-template').innerHTML);
  searchResults.innerHTML = searchResultsTemplate({ data });;

  // Hide the all opportunities section
  const allOpportunitiesSection = document.querySelector('#all-opportunities');
  allOpportunitiesSection.classList.add('hidden');
};

searchForm.addEventListener("submit", handleSubmit);

console.log("search js");
var map = L.map('map').setView([41.8781, -87.8998], 9);


/**/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//L.marker([41.8781, -87.6298]).addTo(map);

//this creates all the makers from hospitallist
hospitalList.map(hospital => {
  //hospital.type //education or healthcare
  L.marker([hospital.lat, hospital.lng], {
      title: hospital.name


  }).addTo(map);
});





