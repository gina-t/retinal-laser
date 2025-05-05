# retinal-laser

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)
- [Questions](#questions)

## Description

A responsive, full stack MERN app featuring vite, react, gsap and typescript that animates laser therapy to a retinal tear.

## Technologies Used

- Frontend: Vite, React, TypeScript, Gsap, Tailwind CSS
- Backend: Node.js, Express, MongoDB
- Deployment: Render


## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive project gallery with detailed descriptions

### GSAP Animation Features

- Smooth scroll-triggered animations that enhance user engagement
- Element transitions using GSAP's timeline functionality

## Installation

To get started with this project, implement the following steps:

1. Clone the project:

```zsh
git clone git@github.com:gina-t/retinal-laser.git
```

2. Install `client` dependancies:

```zsh
cd client
npm install 
```

3. Install `server` dependencies:

```zsh
cd server
npm install
```

4. Specifically, this project uses GSAP for animation. Register and login to GSAP and watch the tutorial for useGSAP()Hook. Import the useGSAP() hook from @gsap/react. useGSAP() is a drop-in replacement for useEffect() or useLayoutEffect() that automatically handles cleanup using gsap.context().

```zsh
npm install gsap @gsap/react
```

5. After installation, you can start the development server:

# Start backend development server

```zsh
cd server
npm run dev
```

# Start frontend development server
```zsh
cd client
npm run dev
```


# Or run both concurrently

```zsh
npm run dev
```

6. Create separate .env.development and .env.production files in `server` directory:

```plaintext
PORT=
NODE_ENV=
LOG_LEVEL=
```

8. In `server` directory:

```zsh
npm run build
npm run start
```


## Usage

Link to deployed app url:

[retinal-laser]()

Screenshots of app demonstrating functionality:

### screenshot-1

![](./client/src/assets/screenshot-1.png)

### screenshot-2

![](./client/src/assets/screenshot-2.png)

### screenshot-3

![](./client/src/assets/screenshot-3.png)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Contributing Guidelines

To contribute, please follow these steps:

1. **Fork the Repository**:
   - Navigate to ``
   - Click "Fork" to create a copy of the repository in your GitHub account.

2. **Clone the Forked Repository**:
   ```zsh
   git clone https://github.com/YOUR-USERNAME/interstitial.git
   cd interstitial
   ```

3. **Create a Feature Branch**:
   - Create a new branch for your feature or bug fix:
     ```zsh
     git checkout -b feature/your-feature-name
     ```
4. **Make Changes**:
   - Make your changes to the codebase.
   - Ensure your changes follow the project's coding standards and guidelines.

5. **Commit Your Changes**:
   - Stage your changes:
     ```zsh
     git add -A
     ```
   - Commit your changes with a descriptive commit message:
     ```zsh
     git commit -m "Add your descriptive commit message here"
     ```

6. **Push Your Changes**:
   - Push your changes to your forked repository:
     ```zsh
     git push origin feature/your-feature-name
     ```

7. **Create a Pull Request**:
   - Navigate to the original repository.
   - Click the "New Pull Request" button.
   - Select your feature branch from your forked repository and compare it with the Develop branch of the original repository.
   - Click "Create Pull Request" to submit your changes for review.

8. **Review Process**:
   - Your pull request will be reviewed by the project maintainer.
   - Once your pull request is approved, it will be merged into the `develop` branch.

Thank you for contributing to the project.

## Testing

Component testing can be performed using Cypress.

To install and run tests:

```zsh
npm install --save-dev cypress
npx cypress open
```

## Authors and Acknowledgements

- **Dr. Gina Tsanaktsidis** - Full Stack Developer and Ophthalmologist
- Email: [ginadrcoder@gmail.com](mailto:ginadrcoder@gmail.com)


## Questions

For enquiries, please contact me at:

- Email: [ginadrcoder@gmail.com](mailto:ginadrcoder@gmail.com)

- GitHub: [gina-t](https://github.com/gina-t)
