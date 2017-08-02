//get image 1
let image1 = customers.results[0].picture.large;
let image2 = customers.results[1].picture.large;
let image3 = customers.results[2].picture.large;
let image4 = customers.results[3].picture.large;



//get the name values from the array
let firstName = customers.results[0].name.first;
let lastName = customers.results[0].name.last;
let fullName = firstName + " " + lastName;

//get email//
let emailContent = customers.results[0].email;

//get address//
let streetName = customers.results[0].location.street;
let cityName = customers.results[0].location.city;
let stateName = customers.results[0].location.state;
let postCodeName = customers.results[0].location.postcode;
//put address data together//
let formatedAddress = streetName + ('\n') + cityName + " " + stateName + " " + postCodeName + ('\n');

//get phone number//
let phoneNumber = customers.results[0].phone;

//get SSN
let socialSecurity = customers.results[0].id.value;

//set each box's data
let boxFirst = `
<div>
  <img src = ${image1}>
  <h3>${fullName}</h3>
  <h5>${emailContent}</h5>
  <p>${formatedAddress}${phoneNumber}</p>
  <h4 class = 'blurry'>${socialSecurity}</h4>
</div>
`

let boxSecond = `
<div>
  <img src = ${image2}>
  <h3>${fullName}</h3>
  <h5>${emailContent}</h5>
  <p>${formatedAddress}${phoneNumber}</p>
  <h4 class = 'blurry'>${socialSecurity}</h4>
</div>
`

let boxThird = `
<div>
  <img src = ${image3}>
  <h3>${fullName}</h3>
  <h5>${emailContent}</h5>
  <p>${formatedAddress}${phoneNumber}</p>
  <h4 class = 'blurry'>${socialSecurity}</h4>
</div>
`

let boxFourth = `
<div>
  <img src = ${image4}>
  <h3>${fullName}</h3>
  <h5>${emailContent}</h5>
  <p>${formatedAddress}${phoneNumber}</p>
  <h4 class = 'blurry'>${socialSecurity}</h4>
</div>
`


//combine all of the boxes into a row of data
let entireRow = boxFirst + boxSecond + boxThird + boxFourth;

//put the information on the page (each row) with HTML
document.getElementById('rowOne').innerHTML = entireRow;
document.getElementById('rowTwo').innerHTML = entireRow;
document.getElementById('rowThree').innerHTML = entireRow;




var blurrytext = document.getElementById("blurry");
blurrytext.addEventListener("hover", changeBlur);

function changeBlur(){
  if (blurrytext.style.color === "#5DBC8A") {
    blurrytext.style.color === "white";
  } else {
    blurrytext.style.color === "#5DBC8A";
  }
}
