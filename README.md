# First Responder Incident Management System (FRIMS)

A full-stack Node.js and Express web application that enables first responders to document, track, and manage incident response data efficiently. Users can log key details of each incident phase, visualize incidents on an interactive map, and store all entries securely using MongoDB.

## [Live Demo](https://first-responder-site.onrender.com)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Acknowledgements](#acknowledgements)

## Project Overview

The First Responder Incident Management System (FRIMS) streamlines the process of documenting and managing incident response activities for fire, police, EMS, explosives operations.
Built on Node.js, Express, and MongoDB, FRIMS allows users to create structured incident records (including call time, contact details, item description, explosives used, and travel data), then visualize them on a Leaflet map.
This system serves as an integrated reporting and situational awareness tool for field teams and command elements.

## Features

- Secure user authentication with Passport.js (login and signup).
- Add, view, and manage incident reports with detailed response data.
- Interactive Leaflet map displaying incident locations.
- Capture essential details like:
    - Date/time call received and departure info
    - LEO or unit contact information
    - Item descriptions and explosives drawn
    - Mileage  calculation for travel tracking
- Persistent data storage using MongoDB.
- CRUD operations (Create, Read, Update, Delete) via RESTful API.
- Scalable backend architecture ready for expansion with AI or automation modules (e.g., Llama.ts integration for report summaries).

## Technologies Used

<a href="https://www.linux.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" alt="Linux" title="Linux" width="36" height="36" /></a>   <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" alt="VS Code" title="VS Code" width="36" height="36" /></a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" title="JavaScript" width="36" height="36" /></a>   <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" title="HTML5" width="36" height="36" /></a>   <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" title="CSS3" width="36" height="36" /></a>    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="NodeJS" title="NodeJS" width="36" height="36" /></a>     <a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=express" alt="ExpressJS" title="ExpressJS" width="36" height="36" /></a>  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" title="MongoDB" width="36" height="36" /></a><a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" title="Git" width="36" height="36" /></a>

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/first-responder-site.git
````

2. Navigate to the project directory:

```bash
cd first-responder-site
```

3. Install Dependencies:
```bash
npm install
```
4. Create a .env file:
```bash
MONGODB_URI=your_mongo_connection_string
SESSION_SECRET=your_secret
PORT=8080
```
5. Start the server:
```bash
npm run dev
```
6. Open your browser and go to:
```bash
http://localhost:8080
```

## Usage

1. Log in or create an account.
2. Add a new incident by entering required information.
3. Submit the form, your incident appears in the list and on the map.
4. Visualize response distribution geographically for situational awareness and reporting.

## Screenshots
[Live Demo](https://first-responder-site.onrender.com)
<img width="1075" height="672" alt="Screenshot 2025-11-12 102723" src="https://github.com/user-attachments/assets/ee506fb3-1bfd-45d6-90fb-b185aebc8232" />

## Acknowledgements
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Express.js Documentation](https://expressjs.com/)
* [MongoDB Documentation](https://www.mongodb.com/docs/)
* [MDN](https://developer.mozilla.org/en-US/)
* [Leaflet.js Documentation](https://leafletjs.com/reference.html)
* Inspired by real-world first responder workflows.

