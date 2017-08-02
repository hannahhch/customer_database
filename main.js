//get the name values from the array
let firstName = customers.results[0].name.first;

let lastName = customers.results[0].name.last;

let fullName = firstName + " " + lastName;

//set each box's data
let boxFirst = `
<span>
${fullName}
</span>
`

let boxSecond = `
<span>
${fullName}
</span>
`

let boxThird = `
<span>
${fullName}
</span>
`

let boxFourth = `
<span>
${fullName}
</span>
`


//combine all of the boxes into a row of data
let entireRow = boxFirst + boxSecond + boxThird + boxFourth;

//put the information on the page (each row) with HTML
document.getElementById('rowOne').innerHTML = entireRow;
document.getElementById('rowTwo').innerHTML = entireRow;
document.getElementById('rowThree').innerHTML = entireRow;
