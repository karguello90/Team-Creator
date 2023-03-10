function renderCards(teamArray) {
    const convertCards = []

function managerCard(employee) {
    return `
    <div class="card" style="width: 24rem; height: 25rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getRole()}</h5>
        <p class="card-text">${employee.getName()}</p>
        <p class="card-text">ID#: ${employee.getID()}</p>
        <p class="card-text">&#9742;: ${employee.getOfficeNumber()}</p>
        <a href="#" class="btn btn-primary">&#9993;: ${employee.getEmail()}</a>
      </div>
    </div> `
}

function engineerCard(employee) {
    return `
    <div class="card" style="width: 24rem; height: 25rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getRole()}</h5>
        <p class="card-text">${employee.getName()}</p>
        <p class="card-text">ID#: ${employee.getID()}</p>
        <p class="card-text">GitHub&#128187: ${employee.getGithub()}</p>
        <a href="#" class="btn btn-primary">&#9993;: ${employee.getEmail()}</a>
      </div>
    </div> `
}
    
function internCard(employee) {
    return `
    <div class="card" style="width: 24rem; height: 25rem;">
      <div class="card-body">
        <h5 class="card-title">${employee.getRole()}</h5>
        <p class="card-text">${employee.getName()}</p>
        <p class="card-text">ID#: ${employee.getID()}</p>
        <p class="card-text">School: ${employee.getSchool()}</p>
        <a href="#" class="btn btn-primary">&#9993;: ${employee.getEmail()}</a>
      </div>
    </div> `
}

teamArray.forEach(instance => {
    if (instance.getRole() === "Manager") {
        convertCards.push(managerCard(instance))
    }
    else if (instance.getRole() === "Engineer") {
        convertCards.push(engineerCard(instance))
    }
    else if (instance.getRole() === "Intern") {
        convertCards.push(internCard(instance))
    }
});
    return convertCards.join("")
}

module.exports = teamArray => {
    return `
    <html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <title>Team Creator</title>
</head>

<header>
  <h1>Team Profiles</h1>
</header>

<body>
<main>
  <div class ="main-container">
    ${renderCards(teamArray)}
  </div>
</main>
</body>

</html>
    `
}