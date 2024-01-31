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
  // Display loading indicator
  $("#loading-indicator").show();

  // Fetch JSON data from a file
  fetch('https://script.google.com/macros/s/AKfycbwBbgnWdNmcw4oppVXrmWeN5t-6sRYmw6Npb3SI6v4I2aCpjxqwC4xaU1YBJkiecGFv/exec')
    .then(response => response.json())
    .then(async jsonData => {
      // Store the JSON data in the 'data' variable
      data = jsonData;

      // Process the JSON data
      var html = '';
      for (let i = 0; i < data.length; i++) {
        const fileId = extractFileId(data[i]['ผลงาน']);
        const imageUrl = `https://lh3.googleusercontent.com/d/${fileId}?authuser=0`;

        // Load the image dynamically to get its dimensions
        const imgElement = await loadImage(imageUrl);
        const imgWidth = imgElement.width;
        const imgHeight = imgElement.height;

        // Set a maximum width for the image containers
        const maxWidth = 250; // Adjust this value as needed
        

        html += `<div onclick="showDetails(${i})"
                    class="individual ${data[i].ห้อง}">
                    <img class="artwork-img" src="${imageUrl}" alt="" onload="resizeImage(this)">
                  <p style="font-size: 2vw;font-weight: 700;" class = "artwork-name">${data[i].ชื่อผลงาน}</p>
                  <p style="font-size: 1vw;">${data[i].ชื่อนามสกุล}</p>
                </div>`;
      }

      $("#artworklist").html(html);
      // Hide loading indicator after data is loaded
      $("#loading-indicator").hide();
    })
    .catch(error => {
      // Hide loading indicator in case of an error
      $("#loading-indicator").hide();
      console.error('Error fetching JSON:', error);
  });

    function extractFileId(url) {
      const match = url.match(/\/d\/(.+?)\/|\/open\?id=(.+?)$/);
      return match ? match[1] || match[2] : null;
    }

  function showDetails(index) {
    var selectedArtwork = data[index];
    var imageUrl = `https://lh3.googleusercontent.com/d/${extractFileId(selectedArtwork['ผลงาน'])}?authuser=0`;
    // Your existing showDetails function remains unchanged
    $(".modal img").attr("src", imageUrl);
    $(".modal p:nth-child(1)").text(selectedArtwork.ชื่อผลงาน);
    $(".modal p:nth-child(2)").text(selectedArtwork.ชื่อนามสกุล);
    $(".modal p:nth-child(4)").text(selectedArtwork.แนวคิดของผลงาน);
    $(".modal").css("display", "block");
  }

  window.showDetails = showDetails; // Expose the function globally
});

function resizeImage(img) {
  const container = img.parentElement;
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const imageWidth = img.naturalWidth;
  const imageHeight = img.naturalHeight;

  const widthRatio = containerWidth / imageWidth;
  const heightRatio = containerHeight / imageHeight;

  const minRatio = Math.min(widthRatio, heightRatio);

  let targetWidth = imageWidth * minRatio;
  let targetHeight = imageHeight * minRatio;

  img.style.width = `${targetWidth}px`;
  img.style.height = `${targetHeight}px`;
}

function searchartwork(ห้อง) {
  // Hide all elements with class "individual"
  $(".individual").css('display', 'none');

  // Escape special characters in the type value
  var escapedType = $.escapeSelector(ห้อง);

  // Show the elements with the specified type
  $("." + escapedType).css('display', 'block');
}

function closeModal() {
  var modal = document.querySelector('.modal-page');
        modal.classList.add('close');
  // Hide the modal
  $(".modal").css("display", "none");
}

function showAllArtwork() {
  // Show all elements with class "individual"
  $(".individual").css('display', 'block');
}

