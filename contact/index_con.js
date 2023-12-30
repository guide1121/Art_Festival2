$(document).ready(() => {
  // Declare 'data' variable to store the fetched JSON data
  let data;

  // Fetch JSON data from a file
  fetch('contact_data.json')
    .then(response => response.json())
    .then(jsonData => {
      // Store the JSON data in the 'data' variable
      data = jsonData;

      // Process the JSON data
      var html = '';
      for (let i = 0; i < data.length; i++) {
        // Extract file ID from Google Drive URL
        const fileId = extractFileId(data[i]['รูปภาพตัวเอง (ขอรูปที่สวย/หล่อที่สุดด)']);

        // Create the new URL format
        const imageUrl = `https://drive.google.com/uc?id=${fileId}`;

        // Add data-ห้อง attribute to store the "ห้อง" value
        html += `<div data-ห้อง="${data[i].ห้อง}" onclick="showDetails(${i})" class="individual ${data[i].type}" id="blog-item">
          <img class="contact-img" src="${imageUrl}" alt="">
          <h4 style="margin-top: 1rem; font-size: 1.5rem;">${data[i].ชื่อเล่น}</h4>
          <p style="margin: 1rem 0;">${data[i]['แคปชงแคปชั่น']}</p>
          <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="instagram" href="https://www.instagram.com/${data[i].Instagram}/"><i class="fa fa-instagram"></i></a> </li> <li><p> ${data[i].Instagram}</p></li> 
          </ul>
        </div>
        </div>`;
      }
      $("#blog-con").html(html);
    })
    .catch(error => console.error('Error fetching JSON:', error));

  function showDetails(index) {
    var selectedArtwork = data[index]; // Use the 'data' array
    // Update modal content with selected artwork details
    $(".modal img").attr("src", extractFileId(selectedArtwork['รูปภาพตัวเอง (ขอรูปที่สวย/หล่อที่สุดด)']));
    $(".modal p:nth-child(1)").text(selectedArtwork.Instagram);
    $(".modal p:nth-child(2)").text(selectedArtwork['แคปชงแคปชั่น']); // Adjusted to display description
    // Display the modal
    $(".modal").css("display", "flex");
  }

  window.showDetails = showDetails; // Expose the function globally

  // Function to extract file ID from Google Drive URL
  function extractFileId(url) {
    const match = url.match(/\/d\/(.+?)\/|\/open\?id=(.+?)$/);
    return match ? match[1] || match[2] : null;
  }
});

// Rest of your code remains unchanged

function searchartwork(room) {
  // Hide all elements with class "individual"
  $(".individual").css('display', 'none');

  // Show the elements with the specified room
  $(`.individual[data-ห้อง="${room}"]`).css('display', 'block');
}

function showAllArtwork() {
  // Show all elements with class "individual"
  $(".individual").css('display', 'block');
}
