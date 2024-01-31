$(document).ready(async () => {
  let data;

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }

  $("#loading-indicator").show();

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwBbgnWdNmcw4oppVXrmWeN5t-6sRYmw6Npb3SI6v4I2aCpjxqwC4xaU1YBJkiecGFv/exec');
    const jsonData = await response.json();
    data = jsonData;

    const loadImagePromises = data.map(async (item, i) => {
      const fileId = extractFileId(item['ผลงาน']);
      const imageUrl = `https://lh3.googleusercontent.com/d/${fileId}?authuser=0`;
      const imgElement = await loadImage(imageUrl);
      const imgWidth = imgElement.width;
      const imgHeight = imgElement.height;

      const maxWidth = 250;
      return `<div onclick="showDetails(${i})"
                    class="individual ${item.ห้อง}">
                    <img class="artwork-img" src="${imageUrl}" alt="" onload="resizeImage(this)">
                  <p style="font-size: 2vw;font-weight: 700;" class="artwork-name">${item.ชื่อผลงาน}</p>
                  <p style="font-size: 1vw;">${item.ชื่อนามสกุล}</p>
                </div>`;
    });

    const htmlArray = await Promise.all(loadImagePromises);
    const html = htmlArray.join('');

    $("#artworklist").html(html);
    $("#loading-indicator").hide();
  } catch (error) {
    $("#loading-indicator").hide();
    console.error('Error fetching JSON:', error);
  }

  function extractFileId(url) {
    const match = url.match(/\/d\/(.+?)\/|\/open\?id=(.+?)$/);
    return match ? match[1] || match[2] : null;
  }

  function showDetails(index) {
    var selectedArtwork = data[index];
    var imageUrl = `https://lh3.googleusercontent.com/d/${extractFileId(selectedArtwork['ผลงาน'])}?authuser=0`;

    $(".modal img").attr("src", imageUrl);
    $(".modal p:nth-child(1)").text(selectedArtwork.ชื่อผลงาน);
    $(".modal p:nth-child(2)").text(selectedArtwork.ชื่อนามสกุล);
    $(".modal p:nth-child(4)").text(selectedArtwork.แนวคิดของผลงาน);
    $(".modal").css("display", "block");
  }

  window.showDetails = showDetails;
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

