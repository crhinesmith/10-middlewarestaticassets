// this is similar to generateMarkdown file from homework 1 
function generateHTML(teamMembers) {
    console.log(teamMembers)
    let strCards = "<html lang='en'><head><meta charset='UTF-8' /><meta http-equiv='X-UA-Compatible'content='IE=edge' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>MiddlewareStaticAssets</title><link rel='stylesheet' href='./style.css' /></head><header>My Team</header>"
    //add the css link, add the HTML boilerplate, close the HTML tag at the end where div is c
    teamMembers.forEach((employee) => {
        strCards = strCards.concat(`
        <div>
        <h1>${employee.getName()}</h1>
        <h2>${employee.getRole()}</h2>
        <p>ID:${employee.getId()}</p>
        <p>Email:${employee.getEmail()}</p>
        `)
        switch (employee.getRole()) {
            case 'Engineer':
                strCards = strCards.concat(`<p>Github: ${employee.github}</p>`)
                break;
            case 'Intern':
                strCards = strCards.concat(`<p>School: ${employee.school}</p>`)
                break;
            default: 
                strCards = strCards.concat(`<p>Office Number: ${employee.officeNumber}</p>`)
        }
        strCards = strCards.concat(`</div>`)
    })
    return strCards.concat(`</html>`)
}

module.exports = generateHTML;