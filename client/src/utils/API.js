import axios from "axios";

export default {
  // Gets all books
  getWines: function() {
    return axios.get("/api/wines");
  },
  // Gets the book with the given id
  getWine: function(id) {
    return axios.get("/api/wines/" + id);
  },
  // Deletes the book with the given id
  deleteWine: function(id) {
    return axios.delete("/api/wines/" + id);
  },
  // Saves a book to the database
  saveWine: function(wineData) {
    return axios.post("/api/wines", wineData);
  }
};
