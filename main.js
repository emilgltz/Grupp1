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
  var resetbutton = document.getElementById("popupbutton");
  resetbutton.addEventListener("click", function () { Returnfrompopup() });
}

async function changeCam(rover, camName, sol, imageName) {
  var newData = await getData('https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + sol + '&page=0&camera=' + camName + '&api_key=' + key);
  var selectedRover = document.getElementById(imageName);

  selectedRover.src = await newData.photos[0].img_src;
}

function getRover(roverName, cameraName) {
  switch (roverName) {
    case 'Curiosity':
      var roverimagecontainer = document.getElementById("roverimagecontainer");
      roverimagecontainer.style.visibility = "hidden";
      var resetbutton = document.getElementById("popupbutton");
      resetbutton.style.visibility = "visible";
      var textbox = document.getElementById("Rover information");
      textbox.style.visibility = "visible";
      textbox.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum neque in augue lacinia tincidunt. Quisque vulputate leo sed blandit porta. Nam iaculis congue erat eget faucibus. Sed a diam sed est lacinia mattis. Fusce arcu sem, pretium et tincidunt eget, viverra ac massa. Aliquam ac sapien gravida tellus interdum auctor. Duis suscipit et nisl in hendrerit.";
      var changablerover = document.getElementById("changablerover");
      var rover = document.getElementById("rover1");
      changablerover.style.visibility = "visible";
      changablerover.src = rover.src;
      var moverdiv = document.getElementById("popupcontainer");
      moverdiv.append(textbox);
      moverdiv.append(changablerover);
      moverdiv.append(resetbutton);
      window.scroll({
        top: 0,
        left: 0,
      });
      break;
    case 'Opportunity':
      var roverimagecontainer = document.getElementById("roverimagecontainer");
      roverimagecontainer.style.visibility = "hidden";
      var resetbutton = document.getElementById("popupbutton");
      resetbutton.style.visibility = "visible";
      var textbox = document.getElementById("Rover information");
      textbox.style.visibility = "visible";
      textbox.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum neque in augue lacinia tincidunt. Quisque vulputate leo sed blandit porta. Nam iaculis congue erat eget faucibus. Sed a diam sed est lacinia mattis. Fusce arcu sem, pretium et tincidunt eget, viverra ac massa. Aliquam ac sapien gravida tellus interdum auctor. Duis suscipit et nisl in hendrerit.";
      var changablerover = document.getElementById("changablerover");
      var rover = document.getElementById("rover2");
      changablerover.style.visibility = "visible";
      changablerover.src = rover.src;
      resetbutton.addEventListener("click", function () { Returnfrompopup() });
      var moverdiv = document.getElementById("popupcontainer");
      moverdiv.append(textbox);
      moverdiv.append(changablerover);
      moverdiv.append(resetbutton);
      window.scroll({
        top: 0,
        left: 0,
      });
      break;
    case 'Spirit':
      var roverimagecontainer = document.getElementById("roverimagecontainer");
      roverimagecontainer.style.visibility = "hidden";
      var resetbutton = document.getElementById("popupbutton");
      resetbutton.style.visibility = "visible";
      var textbox = document.getElementById("Rover information");
      textbox.style.visibility = "visible";
      textbox.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum neque in augue lacinia tincidunt. Quisque vulputate leo sed blandit porta. Nam iaculis congue erat eget faucibus. Sed a diam sed est lacinia mattis. Fusce arcu sem, pretium et tincidunt eget, viverra ac massa. Aliquam ac sapien gravida tellus interdum auctor. Duis suscipit et nisl in hendrerit.";
      var changablerover = document.getElementById("changablerover");
      var rover = document.getElementById("rover3");
      changablerover.style.visibility = "visible";
      changablerover.src = rover.src;
      resetbutton.addEventListener("click", function () { Returnfrompopup() });
      var moverdiv = document.getElementById("popupcontainer");
      moverdiv.append(textbox);
      moverdiv.append(changablerover);
      moverdiv.append(resetbutton);
      window.scroll({
        top: 0,
        left: 0,
      });
      break;
  }
}
function Returnfrompopup() {
  roverimagecontainer.style.visibility = "visible";
  var resetbutton = document.getElementById("popupbutton");
  resetbutton.style.visibility = "hidden";
  var textbox = document.getElementById("Rover information");
  textbox.style.visibility = "hidden";
  var changablerover = document.getElementById("changablerover");
  changablerover.style.visibility = "hidden";
  var moverdiv = document.getElementById("relocationdiv");
  moverdiv.append(textbox);
  moverdiv.append(changablerover);
  moverdiv.append(resetbutton);
  window.scroll({
    top: 0,
    left: 0,
  });
}
Startup();