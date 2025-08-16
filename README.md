## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Medai query for responesive
- Custom validation using JavaScript

### What I learned

- CSS:

  - Set overlay background image over color background:

  ```css
  .signup {
    height: 100vh;
    background-color: var(--primary-red);
    background-image: url("../images/bg-intro-desktop.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  ```

  - Set error icon on input field:

  ```css
  .error-icon {
    position: absolute;
    right: var(--space-md);
    top: 40%;
    transform: translateY(-70%);
  }
  ```

  - input:focus is style on outline properties so I use border css property both on input element and input when focus

  ```css
  .input-field {
    width: 100%;
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--space-sm);

    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  .input-field::placeholder {
    font-family: var(--ff-body);
    font-weight: var(--fw-500);
  }
  .input-field:focus {
    border: 1px solid var(--blue);
    outline: none;
  }
  ```
