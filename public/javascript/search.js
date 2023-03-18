const searchForm = document.querySelector("#search-form");
const searchResults = document.querySelector("#search-results");

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(searchForm);
  const query = formData.get("query");
  const category = formData.get("category");
  const searchTerm = document.querySelector("#search-term").value


  const response = await fetch(
    `/api/posts?query=${query}&category=${category}`,{method:"POST",body:JSON.stringify(searchTerm)}

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
