var key = 'DgsSpbkbk2teleVmEcqYgrAZ13m5BfE5qXv9IRjH'
async function getData(file) {
  const response = await fetch(file);
  const data = await response.json();
  return data;
}

async function Startup() {

  // Curiosity Data
  // MAST, Sol 1000
/*   var CuriosityMAST = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=0&camera=MAST&api_key=' + key);
  console.log(CuriosityMAST);
 */
  // RHAZ, Sol 580
  var CuriosityRHAZ = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=580&page=0&camera=RHAZ&api_key=' + key);
  console.log(CuriosityRHAZ);
  // FHAZ, Sol 580
/*   var CuriosityFHAZ = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=580&page=0&camera=FHAZ&api_key=' + key);
  console.log(CuriosityFHAZ); */

  // Opportunity Data
  // RHAZ, Sol 580
  var OpportunityRHAZ = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=580&page=0&camera=RHAZ&api_key=' + key);
  console.log(OpportunityRHAZ);

  // FHAZ, Sol 580
/*   var OpportunityFHAZ = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=580&page=0&camera=FHAZ&api_key=' + key);
  console.log(OpportunityFHAZ);

  // PANCAM, Sol 580
  var OpportunityPANCAM = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=580&page=0&camera=PANCAM&api_key=' + key);
  console.log(OpportunityPANCAM); */

  // Spirit Data
  // RHAZ Sol 200
  var SpiritRHAZ = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=200&page=0&camera=RHAZ&api_key=' + key);
  console.log(SpiritRHAZ);

  // FHAZ Sol 200
/*   var SpiritFHAZ = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=200&page=0&camera=FHAZ&api_key=' + key);
  console.log(SpiritFHAZ);

  // PANCAM Sol 200
  var SpiritPANCAM = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=200&page=0&camera=PANCAM&api_key=' + key);
  console.log(SpiritPANCAM); */


  // Render starting images
  var rover1 = document.getElementById('rover1');
  rover1.src = CuriosityRHAZ.photos[0].img_src;

  var rover2 = document.getElementById('rover2');
  rover2.src = OpportunityRHAZ.photos[0].img_src;

  var rover3 = document.getElementById('rover3');
  rover3.src = SpiritRHAZ.photos[0].img_src;

}

function getRover(roverName, cameraName) {
  switch (roverName) {
    case 'Curiosity':
      roverimagecontainer.style.display = "none";
      var popupcontainer = document.getElementById("popupcontainer");
      popupcontainer.style.display = "flex";
      var resetbutton = document.createElement("button");
      resetbutton.id = "resetbutton";
      resetbutton.value = "Reset";
      popupcontainer.append(resetbutton);
      resetbutton.addEventListener("click", Returnfrompopup());
      break;
    case 'Opportunity':
      console.log("hello 2!");
      break;
    case 'Spirit':
      console.log("hello 3!");
      break;
  }
}
function Returnfrompopup() {
  roverimagecontainer.style.display = "block";
  var resetbutton = document.getElementById("resetbutton");
  resetbutton.parentNode.removeChild(resetbutton);
  resetbutton.style.display = "none";

  console.log("HEJS!");
}

Startup();