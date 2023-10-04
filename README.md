[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xnLk9Kav)
---
type: NoteCard
---

# lab - modern toolchain or tooling

In this lab, we set up an app using **_yarn_** manager and **_parcel_**.

- npm is one of the first package managers
- yarn is another package manager that is a bit faster than npm
- parcel is a zero-configuration build system

::::cal
**Requirements**

- Basic knowledge of the command line using your prefered terminal
- Text editor, such as vs-code (recommended)

::::

In this app, you create a mini portfolio for yourself using JSON. JSON stands for javascript object notation and is a widely used formal to exchange data over the web using strings.

::::cal
**Portfolio Requirements**

The aim of the portfolio is to introduce yourself using JSON format. It should include:

1.  Personal information, such as first name, last name, birthday (using this pattern YYYY-MM-DD), etc.
2.  Personal interests: Such as hobbies
3.  Personal skills: Three or more skills
4.  Personal Projects: Three or more personal projects that showcase your skills. Each project has a title, a description, and a thumbnail (a string path to an image)

::::

# Create an app

Run the following command and follow the prompts to create an app. The command will create the package.json file of the app.

```js
mkdir my-portfolio
cd my-portfolio
```

```js
npm init
```

# Explore package.json

Open and explore your package.json

```js
{
  "name": "my-portfolio",
  "version": "0.0.1",
  "description": "...",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "You",
  "license": "MIT"
}
```

# Install parcel

As a build system, parcel will be used in development mode. This why we need to install it as DevDependency (using option `-D`) so that it is not bundled when we build the app for production.

```js
yarn add parcel-bundler -D
```

# Add an html page for the app

```js
// src/index.html:
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>My portfolio</title>
  </head>
  <body>
    <h1>Hi, this is ...!</h1>
  </body>
</html>
```

Start the app using parcel. It has a built-in dev server.

```js
yarn parcel src/index.html
```

Keep parcel running in a terminal. When you make any changes on any file related to \`src/index.html\`, parcel will refresh the page.

# Add js and css main files to our app

```js
// src/index.html:
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>My portfolio</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="app.js"></script>
  </head>
  <body>
    <div>
      <h1>Hi, there!</h1>
      <main id="container"></main>
    </div>
  </body>
</html>
```

```js
// src/app.js

console.log("Hello there! here is my portfolio");
```

```js
// src/styles.css

h1 {
  color: hotpink;
}
```

# Displaying your portfolio JSON file

### Import JSON file

```js
// app.js
```

### Parse and append JSON to html page

```js
// app.js

const state = {};

const containerEl = document.getElementById("container");

containerEl.textContent = JSON.stringify(state, null, 2);
```

# Show human-readable relative dates

Showing your birthday as a YYYY-MM-DD pattern is not user-friendly.
Instead, we can show it as “18 years old” or “20 years old”, etc.

```js
// app.js
import { formatDistanceToNow } from "date-fns";

const state = {};

const containerEl = document.getElementById("container");

state.birthday = `${formatDistanceToNow(new Date(state.birthdate))} old`;

containerEl.textContent = JSON.stringify(state, null, 2);
```

::::cal
Notice that we did not install **date-fns**. That is because parcel is a zero-configuration build system. It detects dependencies that are used (based on imports) and install them.

Check your **package.json** (and **node_modules)** to see that **date-fns** dependency is installed.

::::

# Building the app

During the development parcel build and runs the app using a development server.

In production, however, we need to build the app to generete an optimized bundble of html, js, and css files.

To do so, first, stop the the parcel server running in terminal (command ctrl+c), and then run the following command:

```
yarn parcel build src/index.html
```

# Additional todos

- Add a script tag in package.json to start and build the app
- Install eslint (<http://eslint.org>)
- Add a script file .eslintrc.js to configure eslint. In this file you should at least add a rule to ban (meaning disable) “no-var”.
- Run: “yarn eslint src/app.js” to check if your file contains a eslint issues.
- Install and configure Prettier (<https://prettier.io/>).

# Examle of eslint config

    module.exports = {
      // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
      env: { browser: true, es2022: true },
      extends: ["eslint:recommended"],
      ignorePatterns: ["dist", ".eslintrc.js"],
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
      rules: {
        "no-var": 0,
      },
    };

# Parcel “dist” folder

> Explore the “dist” folder. Explain what is this folder.

…

> Explain the different files generated in dist folder. What are these files? Why they are named the way they are?

…
