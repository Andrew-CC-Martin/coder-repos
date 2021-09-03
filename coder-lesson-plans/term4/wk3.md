# Cypress codealong

## Netlify react-router issue

- create `public/_redirects` with following content:
```
/* /index.html 200
```

## Intro

- show the promo video on vimeo
- `yarn add cypress`
- `yarn run cypress open`
- show the GUI
- show the generated files (and commit)

## Eslint config update

- add cypress eslint config `$ yarn add eslint-plugin-cypress`
- Create `cypress/.eslintrc.json` and add following:

```json
{
  "plugins": [
    "cypress"
  ],
  "extends": [
    "plugin:cypress/recommended"
  ]
}
```

## Sign up flow tests

- create `integration/users/signup.test.js`
- write the tests, based on the existing business logic requirements

- Mention that the tests should run independently, and not coupled together

## Run in prod

## Add to CI/CD pipeline
