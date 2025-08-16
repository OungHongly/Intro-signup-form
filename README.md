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

![](./design/image.png)

### Links

- Live Site URL: [https://ounghongly.github.io/Intro-signup-form/]

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

### JavaScript:

1. Form submit event handler

```js
form.eventListener("submit", (e) => {
  e.preventDefault();
});
```

2. e.preventDefault();

- e = the event object passed to the function when an event happens (in this case, "submit").
- By default, when you submit a form → browser reloads the page and sends the data to the server.
- preventDefault() stops that default behavior so you can handle validation with JavaScript first.

- 👉 Without this line:

  - Page refreshes immediately.
  - You don’t see your custom error messages.

- 👉 With this line:

  - Form does not reload.
  - Your JS code checks for errors first.

- input.nextElementSibling = "Find element comes right after this input."
- input.nextElementSibling.nextElementSibling = "Find element comes right after and the next after element."

- Why do you still see the default browser popup?
  -This usually happens because:
  -You didn’t disable HTML5 built-in validation.
  -For example, if your <input> has required, type="email", minlength, etc., then the browser runs its own validation before your JavaScript code executes.

  -👉 That’s why you see the popup like “Please fill out this field” or “Please include an @ in the email address”.

### Understand Email Regex:

    ```js
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(input.value.trim())) {
      // runs when value is NOT a valid email
    }
    ```

1. The Regex Pattern

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

- a. Anchors: ^ and $

  - ^ → start of the string
  - $ → end of the string
  - 👉 This means the entire input must match the pattern, not just part of it.

- b. [^\s@]+ -[...] → defines a character set (allowed characters).

  - ^ inside the brackets → means NOT.
  - \s → whitespace (space, tab, newline, etc).
  - @ → literal @ symbol.
  - So: -[^\s@]+

  - = one or more characters that are not whitespace and not @.
  - This represents the username part of the email (e.g., hello123).

- c. @
  -The literal at-sign must appear.

- d. [^\s@]+ (again)

  - Same as before → one or more non-whitespace, non-@ characters.
  - This is the domain name (e.g., gmail).

- e. \.

  - Normally . in regex means “any character”.
    Escaped with \. → means a literal dot ..

- f. [^\s@]+ (final part)

- Again → one or more characters that are not whitespace and not @.
- This is the domain extension (e.g., com, org, net).

2. The .test() Method

```js
regex.test(input.value.trim());
```

- input.value → the value typed into the input field.
- .trim() → removes whitespace at the start and end.
- .test() → returns:
- true if the string matches the regex.
- false if it doesn’t.
