CatsImages();

function CatsImages(){
  var link = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_gbz3WIEOS0JkmySBjDRdCGjlyAVNs0vzJMMIKffmy6voFNghpPCdbWvBstbesAMF`;
  fetch(link).then((response) =>{
    return response.json();
  })
  .then((data)=>{
    let imagenes = document.querySelectorAll(".cat_img");
    let NRandom= 0;
    imagenes.forEach(element => {
      let url = data[NRandom++].url;
      element.setAttribute("src",url)
      if (NRandom == 9 ){
        NRandom =0;
      }
    });

  })

}