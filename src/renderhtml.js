function renderCards(teamArray) {
    const convertCards = []













    return convertCards.join("")
}


module.exports = teamArray => {
    return `
    <html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="">
    <!--created title-->
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