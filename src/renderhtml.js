function renderCards(teamArray) {
    const convertCards = []

function managerCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.getRole()}</h5>
    <p class="card-text">${employee.getName()}</p>
    <p class="card-text">${employee.getID()}</p>
    <p class="card-text">${employee.getOfficeNumber()}</p>
    <a href="#" class="btn btn-primary">email: ${employee.getEmail()}</a>
  </div>
</div> `
}
    







teamArray.forEach(instance => {
    if (instance.getRole() === "Manager") {
        convertCards.push(managerCard(instance))
    }
});


    return convertCards.join("")
}


module.exports = teamArray => {
    return `
    <html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>Team Generator</title>
</head>


<header>
  
</header>


<body>
<main>
${renderCards(teamArray)}
</main>

    </body>

</html>
    
    
    `
}