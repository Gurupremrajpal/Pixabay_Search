$("#searchBtn").on("click",imageSearch);
    
randomBg();

async function imageSearch(){       
  console.log("I work!");
  let q = $("#keyword").val();
  
  let orientation = $("#orientation").val();
  //console.log(orientation);

  let url = `https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=${q}&orientation=${orientation}`;
  let data = await fetchData(url);
  //console.log(data.hits[0].webformatURL);
  
    $("#images").html("");
    
    for (i = 0; i < 5; i++) {

      if(orientation == "horizontal" && q.length >=3){
          $(".message").html("");
      $("#images").css("display", "flex");
      let random = Math.floor(Math.random() * data.hits.length);
      $("#images").append(`<div class="image">Likes: ${data.hits[random].likes} <br> <img  class= "p-4" width="250px" src="${data.hits[random].webformatURL}" alt="${data.hits[random].tags} "></div>`);
      }else if(orientation == "vertical" && q.length >=3){
        $(".message").html("");
        $("#images").css("display", "inline");
        let random = Math.floor(Math.random() * data.hits.length);
        $("#images").append(`<div class="image">Likes: ${data.hits[random].likes}<br><img width="150px" src="${data.hits[random].webformatURL}" alt="${data.hits[random].tags}"></div>`);
    } else{
        $(".message").html("Error!, Enter a keyword with at least 3 characters");
    }
      //console.log(data);
    }
}

async function randomBg() {
    console.log("background images")
    let q = ["pet", "flower", "grass", "car", "mountain"];

    let rand = Math.floor(Math.random() * q.length);
    //console.log(q[rand]);
    let url = `https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=${q[rand]}&orientation=horizontal&image_type=all`;

    let data = await fetchData(url);
    console.log(data);

    let size = data.hits.length;

    let random = Math.floor(Math.random() * size);

    $('body').css('background-image', `url('${data.hits[random].largeImageURL}')`);
}


async function fetchData(url){
   let response = await fetch(url);
   let data = await response.json();
   console.log(data);
   return data;
}