var artwork=[{
    id:1,
    img:'E37E4B84-302E-4902-BDB8-96E5E46C804D.png',
    name:'Tanyong',
    artist:' nayA ',
    description:'Lorem ipsum dolor rem totam sapiente sint perspiciatis, beatae expedita magni velit eveniet incidunt suscipit eius laborum at deleniti repellendus? Aperiam!',
    type:'M.6/1'
},{
    id:2,
    img:'579E84B9-AB65-40BE-9F99-7B108763DC2B.png',
    name:'Tanyong2',
    artist:' nayB ',
    description:'Lorem ipsum dolor rem totam sapiente sint perspiciatis, beatae expedita magni velit eveniet incidunt suscipit eius laborum at deleniti repellendus? Aperiam!',
    type:'M.6/2'
},{
    id:3,
    img:'6E17DD3D-F1E2-4952-A299-BB337899C8C2.png',
    name:'Tanyong3',
    artist:' nayC ',
    description:'Lorem ipsum dolor rem totam sapiente sint perspiciatis, beatae expedita magni velit eveniet incidunt suscipit eius laborum at deleniti repellendus? Aperiam!',
    type:'M.6/3'
}];


$(document).ready(()=> {

    var html= '';
    for (let i=0;i<artwork.length;i++){
        html+=` <div onclick="showDetails(${i})" class="individual ${artwork[i].type}">
        <img class="artwork-img" src="${artwork[i].img}" alt="">
        <p style="font-size: 1vw;">${artwork[i].name}</p>
        <p style="font-size: 1vw;">${artwork[i].artist}</p>
      </div>`;
    }
    $("#artworklist").html(html);
})

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

  function showDetails(index) {
    var selectedArtwork = artwork[index];
    // Update modal content with selected artwork details
    $(".modal img").attr("src", selectedArtwork.img);
    $(".modal p:nth-child(1)").text(selectedArtwork.name);
    $(".modal p:nth-child(2)").text(selectedArtwork.artist);
    $(".modal p:nth-child(4)").text(selectedArtwork.description);
    // Display the modal
    $(".modal").css("display", "flex");
  }

   