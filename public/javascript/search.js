const express = require("express");
const app = express();
var map = L.map('map').setView([51.505, -0.09], 13);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define the search route
app.post("/search", (req, res) => {
  // Get the search term and filters from the request body
  const searchTerm = req.body.searchTerm;
  const filters = req.body.filters;
  
  // Perform the search with the selected filters
  let filteredOpportunities = opportunities; // Assuming you have an array of opportunities
  
  if (filters && filters.length > 0) {
    filteredOpportunities = filteredOpportunities.filter(opportunity => {
      return filters.includes(opportunity.category);
    });
  }
  
  if (searchTerm) {
    filteredOpportunities = filteredOpportunities.filter(opportunity => {
      return opportunity.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  
  // Send the filtered opportunities as a JSON response
  res.json({ opportunities: filteredOpportunities });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});