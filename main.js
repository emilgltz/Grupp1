var key = 'dTWaCG83goCFI2yRG0ucxYRAx7eMOmBbyyqdzbOY'

async function getData(file) {
  const response = await fetch(file);
  const data = await response.json();
  return data;
}

async function test() {
  
  var test = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=0&camera=RHAZ&api_key=' + key);
  console.log(test);
  var img = test.photos[0].img_src;

  console.log(img);

  var rover1 = document.getElementById("rover1");
  rover1.src = img;
}

function Curiosity()
{
    
}

function Opportunity()
{

}
function Spirit()
{

}
test();