# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Auth0 Notes

# Scopes

- Auth0 has Scopes, which are essentially a system of permissions
- These scopes should be displayed in the consent UI, typically displayed to the user when first creating an account

# Tokens

- Tokens can take many forms (WS-Federated, SAML, JWT, Custom stuff, etc...)
- This app focues on JWT

## Access Tokens

- Gives you access to a resource
- Controls access to your API
- Short lived

# Refresh Tokens

- Enables you to get a new token
- Long lived
- Can be revoked

# JWT (JSON Web Token)

- Most modern applications use JWT
- It has the following parts:
  1. Header - Describes the token. Such as this is the algorithm I'm using for the signature and this is the type of token I am
  2. Payload - Has multiple properties such as a subscriber ID, name, access level, expiration date, issuer
  3. Signature - Ensures integrity of our JWT
- These JSON Web Token parts are Base64 encoded with all three concatanated with a dot and turned into a string so it can easily be passed around.
- Can easily be decoded using online decoder
