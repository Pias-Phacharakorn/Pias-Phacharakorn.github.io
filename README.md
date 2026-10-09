# Personal Portfolio

## Overview

Welcome to my personal portfolio website, showcasing my professional experience, projects,
education, and achievements. It is served by GitHub Pages at
<https://pias-phacharakorn.github.io>.

Each project has its own page, for example: Revit add-ins, ACC Data Connector to Power BI,
ACC dashboards, an n8n email-summary agent, bridge modelling, Google Sheets PDF export,
Autodesk Tandem, COBie, point clouds, an ACC handbook, BIM model BQC and a content catalog.

## Tech stack

- Plain **HTML**, **CSS** and **JavaScript**, with no build step
- Based on the [vCard personal portfolio](https://github.com/codewithsadee/vcard-personal-portfolio)
  template
- **GitHub Pages** (user site, served from the default branch)

## Project tree

```text
Pias-Phacharakorn.github.io/
├── index.html                       # Main page: about, resume, portfolio list, contact
├── assets/
│   ├── css/style.css                # Main styles
│   ├── css/projectstyle.css         # Styles for the project pages
│   ├── js/script.js                 # Navigation, filters, modals
│   ├── project/                     # One page per project (1_RevitAddIns.html, ...)
│   └── images/                      # Avatar, icons, and one folder of images per project
└── README.md
```

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Updating

- **New project:** add a page in `assets/project/` named `<n>_<Name>.html`, put its images in
  `assets/images/<n>_<Name>/`, and link it from the portfolio list in `index.html`.
- **Publishing:** push to the default branch and GitHub Pages republishes the site.

## Acknowledgements

This portfolio is based on the existing [Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) template. Special thanks to the original creator for providing such a versatile and user-friendly design.

Additionally, I would like to extend my gratitude to Ishank Sharma for his support in HTML, CSS, and Java. His guidance and expertise have been valuable in helping me improve and customize this portfolio.
For any inquiries or collaborations, he can be reached via [email](mailto:ishankdev@gmail.com)  or through his [GitHub](https://github.com/ishank-dev) profile.
