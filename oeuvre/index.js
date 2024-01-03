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
  fetch('https://script.google.com/macros/s/AKfycby-_OX-_hYKd6s_CO0ZuY05UZZ_rmiynmOoBfaMczf70qljH5B59eUi6gxAP9iKSoXh/exec')
    .then(response => response.json())
    .then(async jsonData => {
      // Store the JSON data in the 'data' variable
      data = jsonData;

      // Process the JSON data
      var html = '';
      for (let i = 0; i < data.length; i++) {
        const fileId = extractFileId(data[i]['รูปผลงาน']);
        const imageUrl = `https://drive.google.com/uc?id=${fileId}`;

        // Load the image dynamically to get its dimensions
        const imgElement = await loadImage(imageUrl);
        const imgWidth = imgElement.width;
        const imgHeight = imgElement.height;

        // Set a maximum width for the image containers
        const maxWidth = 250; // Adjust this value as needed
        

        html += `<div onclick="showDetails(${i})"
                    class="individual ${data[i].ห้อง}">
                  <img class="artwork-img" src="${imageUrl}" alt=""  >
                  <p style="font-size: 2vw;">${data[i].ชื่อภาพ}</p>
                  <p style="font-size: 1vw;">${data[i].ชื่อจริง}</p>
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
    var imageUrl = `https://drive.google.com/uc?id=${extractFileId(selectedArtwork['รูปผลงาน'])}`;
    // Your existing showDetails function remains unchanged
    $(".modal img").attr("src", imageUrl);
    $(".modal p:nth-child(1)").text(selectedArtwork.ชื่อภาพ);
    $(".modal p:nth-child(2)").text(selectedArtwork.ชื่อจริง);
    $(".modal p:nth-child(4)").text(selectedArtwork.รายละเอียด);
    $(".modal").css("display", "block");
  }

  window.showDetails = showDetails; // Expose the function globally
});


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
