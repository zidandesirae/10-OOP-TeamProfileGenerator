const generateHTML = function (teamString) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Profile Generator</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>
<div class="container mt-4">
  <div class="jumbotron">
    <h1 class="display-4">Meet the Team!</h1>
    <hr class="my-4">
    <div class="row row-cols-1 row-cols-md-3">
      ${teamString} 
    </div>
  </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>         
</body>
</html>`
}

//arr is the employee object and looking for the properties in that class
const generateCard = function (arr) {
    //if else statement
    let roleInfo;

    if (arr.title === "Manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        roleInfo = `Github Username: ${arr.github}`
    } else if (arr.title === "Intern") {
        roleInfo = `School: ${arr.school}`
    }

    return `<div class="col mb-4">
    <div class="card">
        <div class="card-header">
          <h2 class="card-title">${arr.name}</h2>
          <h4><i class="fa fa-user"></i> ${arr.title}</h4>
        </div>
      <div class="card-body">
        <p class="card-text">
            <ul style="list-style-type:none">
              <li>ID: ${arr.id}</li>
              <li>Email: ${arr.email}</li>
              <li>${roleInfo} </li>
            </ul>
        </p>
      </div>
    </div>
  </div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;