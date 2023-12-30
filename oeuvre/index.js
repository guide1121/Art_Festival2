$(document).ready(() => {
  // Declare 'data' variable to store the fetched JSON data
  let data;

  // Fetch JSON data from a file
  fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
      // Store the JSON data in the 'data' variable
      data = jsonData;

      // Process the JSON data
      var html = '';
      for (let i = 0; i < data.length; i++) {
        html += `<div onclick="showDetails(${i})" class="individual ${data[i].type}">
          <img class="artwork-img" src="${data[i].img}" alt="">
          <p style="font-size: 1vw;">${data[i].name}</p>
          <p style="font-size: 1vw;">${data[i].artist}</p>
        </div>`;
      }
      $("#artworklist").html(html);
    })
    .catch(error => console.error('Error fetching JSON:', error));

  function showDetails(index) {
    var selectedArtwork = data[index]; // Use the 'data' array
    // Update modal content with selected artwork details
    $(".modal img").attr("src", selectedArtwork.img);
    $(".modal p:nth-child(1)").text(selectedArtwork.name);
    $(".modal p:nth-child(2)").text(selectedArtwork.artist);
    $(".modal p:nth-child(4)").text(selectedArtwork.description);
    // Display the modal
    $(".modal").css("display", "flex");
  }
  
  window.showDetails = showDetails; // Expose the function globally
});

function searchartwork(type) {
  // Hide all elements with class "individual"
  $(".individual").css('display', 'none');

  // Escape special characters in the type value
  var escapedType = $.escapeSelector(type);

  // Show the elements with the specified type
  $("." + escapedType).css('display', 'block');
}

function closeModal() {
  // Hide the modal
  $(".modal").css("display", "none");
}

function showAllArtwork() {
  // Show all elements with class "individual"
  $(".individual").css('display', 'block');
}
