function generateMarkdown(layout) {
  return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Generator</title>
    </head>
    
    <body>
        <header class="nav justify-content-center navbar navbar-dark bg-primary text-light fs-1">Team</header>
        
        <div class="card" style="width: 18rem;">
            <div class="card-header">
              Manager
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"></li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
          
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              Engineer
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            </div>
          
            <div class="card" style="width: 18rem;">
            <div class="card-header">
              Intern
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
          
          
    </body>
    </html>`

}

module.exports = generateMarkdown;