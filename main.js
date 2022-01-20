var key = 'dTWaCG83goCFI2yRG0ucxYRAx7eMOmBbyyqdzbOY'

async function getData(file) {
  const response = await fetch(file);
  const data = await response.json();
  return data;
}

async function Startup() {
  var CuriosityRHAZ = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=0&camera=RHAZ&api_key=' + key);
  console.log(CuriosityRHAZ);

  var img = CuriosityRHAZ.photos[0].img_src;
  console.log(img);

  var rover1 = document.getElementById("rover1");
  rover1.src = img;
}

function getRover(roverName, cameraName) {
  switch(roverName)
  {
    case 'Curiosity':
        console.log("hello!");
    break;
    case 'Opportuniy':
        console.log("hello 2!");
    break;
    case 'Spirit':
        console.log("hello 3!");
    break;
  }
}
Startup();