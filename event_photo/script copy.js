$(document).ready(() => {
    // Declare 'data' variable to store the fetched JSON data
    let data;
  
    $("#loading-indicator").hide();
    // Fetch JSON data from a file
    fetch('https://script.google.com/macros/s/AKfycbyzR5KK5Zr-fg8ICz48wmzyj0iusCVJzhwaVO6WBRduALrKuhCFd3DWP_UiDiD2pJqC/exec')
      .then(response => response.json())
      .then(jsonData => {
  
        // Store the JSON data in the 'data' variable
        data = jsonData;
  
        // Process the JSON data
        var html = '';
        for (let i = 0; i < data.length; i++) {
          // Extract file ID from Google Drive URL
          const fileId = extractFileId(data[i]['img']);
  
          // Create the new URL format
          const imageUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
  
          // Add data-ห้อง attribute to store the "ห้อง" value
          html += `<div  onclick="showDetails(${i})" class="gallery-item">
                      <p>>No photos available yet</p>
                  </div>`;
        }
        $("#gallery").html(html);
  
        // Hide loading indicator after data is loaded

      })
      .catch(error => {
        // Hide loading indicator in case of an error
        console.error('Error fetching JSON:', error);
      });
  
    // Function to extract file ID from Google Drive URL
    function extractFileId(url) {
      const match = url.match(/\/d\/(.+?)\/|\/open\?id=(.+?)$/);
      return match ? (match[1] || match[2]) : null;
    }
  
    function showDetails(index) {
      var selectedArtwork = data[index];
      var imageUrl = `https://drive.google.com/thumbnail?id=${extractFileId(selectedArtwork['img'])}`;
      // Update modal content with selected artwork details
      $(".modal img").attr("src", imageUrl);
      $(".modal").css("display", "flex");
    }
  
    window.showDetails = showDetails; // Expose the function globally
  
    // Rest of your code remains unchanged
  
  });

  function closeModal() {
    // Hide the modal
    $(".modal").css("display", "none");
  }
  