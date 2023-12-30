$(document).ready(() => {
  // Declare 'data' variable to store the fetched JSON data
  let data;

  // Function to create Image elements and load images dynamically
  function loadImage(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }

  // Fetch JSON data from a file
  fetch('data.json')
    .then(response => response.json())
    .then(async jsonData => {
      // Store the JSON data in the 'data' variable
      data = jsonData;

      // Process the JSON data
      var html = '';
      for (let i = 0; i < data.length; i++) {
        // Load the image dynamically to get its dimensions
        const imgElement = await loadImage(data[i].img);
        const imgWidth = imgElement.width;
        const imgHeight = imgElement.height;

        // Set a maximum width for the image containers
        const maxWidth = 250; // Adjust this value as needed

        // Calculate the corresponding height based on the maximum width
        const containerWidth = Math.min(imgWidth, maxWidth);
        const containerHeight = (containerWidth / imgWidth) * imgHeight;

        html += `<div onclick="showDetails(${i})"
                    class="individual ${data[i].type}"
                    >
                  <img class="artwork-img" src="${data[i].img}" alt="" style="height: ${containerHeight}px; width: ${containerWidth}px;">
                  <p style="font-size: 1vw;">${data[i].name}</p>
                  <p style="font-size: 1vw;">${data[i].artist}</p>
                </div>`;
      }

      $("#artworklist").html(html);
    })
    .catch(error => console.error('Error fetching JSON:', error));

  function showDetails(index) {
    var selectedArtwork = data[index];
    // Your existing showDetails function remains unchanged
    $(".modal img").attr("src", selectedArtwork.img);
    $(".modal p:nth-child(1)").text(selectedArtwork.name);
    $(".modal p:nth-child(2)").text(selectedArtwork.artist);
    $(".modal p:nth-child(4)").text(selectedArtwork.description);
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
