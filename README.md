# Personal Portfolio Website

A responsive single-page portfolio made with plain HTML, CSS, and JavaScript. It uses a dark navy and blue visual theme and does not require a build step or external dependencies.

## Project structure

```text
myPortfolio/
├── assets/
│   └── images/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── .gitignore
└── README.md
```

The `assets/images/` folder is reserved for a profile photo and project images when you are ready to add them.

## Run locally

Open `index.html` in a browser, or use the VS Code Live Server extension for local preview and automatic refresh.

## Personalize the portfolio

1. Replace `[Your Full Name]` and the other bracketed prompts in `index.html` with your own information.
2. Add only skills, education, projects, certificates, awards, and seminars that accurately describe your experience.
3. Update the email, LinkedIn, and GitHub details and their links in the contact section.
4. Replace the profile placeholder with your own optimized image when available. Put it in `assets/images/` and use a relative path such as `assets/images/profile.webp`.
5. Update project descriptions, technologies, and optional screenshots with your own completed work.

The email link opens the visitor's default email application. This static website does not send messages through a server-side contact form.

## GitHub

Create a repository on GitHub, add the project files, and push the repository. The `.gitignore` excludes common editor, operating system, dependency, and deployment output files.

## Deploy to Vercel

1. Import the GitHub repository into Vercel.
2. Use the `Other` framework preset for this static HTML project.
3. Keep the project root as the root directory. No build command or dependencies are required.
4. Deploy. Vercel will serve `index.html` and the CSS and JavaScript files at their relative paths.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
