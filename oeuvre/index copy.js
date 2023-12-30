var html = '';
for (let i = 0; i < data.length; i++) {
  // Create a new Image object
  var tempImage = new Image();

  // Set the source of the Image object to the image's source
  tempImage.src = data[i].img;

  // Use the onload event to ensure that the image is fully loaded before accessing its dimensions
  tempImage.onload = function () {
    html += `<div onclick="showDetails(${i})"
                class="individual ${data[i].type}"
                style="height: ${tempImage.height}px; width: ${tempImage.width}px;">
              <img class="artwork-img" src="${data[i].img}" alt="">
              <p style="font-size: 1vw;">${data[i].name}</p>
              <p style="font-size: 1vw;">${data[i].artist}</p>
            </div>`;

    // Update the HTML after all images are loaded
    if (i === data.length - 1) {
      $("#artworklist").html(html);
    }
  };
}

