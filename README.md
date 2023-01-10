# Movies Showcase web app

React app with Server-Side Rendering using the API [TheMovieDatabase](https://developers.themoviedb.org/3/getting-started/introduction).

The project is bundled with [Webpack](https://webpack.js.org/): it supports hot reloading in development mode and is optimizated for production. The bundling also takes care of cross-browser support, using [Babel](https://babeljs.io/) for modern ECMAScript and [Autoprefixer](https://github.com/postcss/autoprefixer) for browser compliant styling.

The project includes both unit and end-to-end testing. The unit tests validate each component's functionality in isolation while the end-to-end test ensures the application flow behaves as expected (see Testing section below). 

This web app is responsive across devices.

## Features
- Homepage with 3 carousels of items 
Each carousel is a different category (Western movies / Music movies / Comedy movies)
- Depending on the category of the selected item, the detail page has:
o A different font
o A different button
o A different movie genre in the additional information area
- Wishlist section where added items can be viewed

## Tech Stack
- React, Node.js, Express
- bundling with Webpack
- styling with SASS
- unit testing with Jest, React Testing Library
- end-to-end testing with Cypress

<!-- ![screenshot](readMeAssets/screenshot.png) -->

## Security 
The API TheMovieDatabase requires authentification with a private API key. To prevent the API key from being embedded in the final Webpack bundle (and being visible to anyone who inspects the code), a separate Express server calls the TheMovieDatabase API and serves the app.

## Performance 
To ensure performance in all conditions, the homepage indicates the loading of data and 
the carousel images display a placeholder during loading. API and image loading erros are also handled to ensure the best user experience. 

The bundling with Webpack is also optimized for best performance: the code and styling are minified and `source-map` is used as a dev-tool for its build speed.

## Accessibility & Cross-Browser
This app was built to be accessible to everyone. The elements are structured with semantic markup and they were built to deliver the same experience to all users. 

The Webpack bundling ensures that the app can be accessible to a broad range of browsers based on global usage (> 0.2%) for production builds.

## Local installation 

Clone the repository: 
```bash
https://github.com/AudreyKj/movies-showcase.git
```

Run these commands in the project directory:

- Install dependencies 
```bash
npm install
```

- Create an .env file and add your API key from TheMovieDatabase (see `.env-sample`)

- Run the app locally in development mode:

```bash
npm start 
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Testing 

Run these commands in the project directory:

- Unit tests using React Testing Library & Jest (`src/client/testing/unit-testing`): 

```bash
npm test-unit
```

- E2E tests using Cypress (located at: `cypress/e2e`): 

Make sure your local server is running (*npm start*).

To run the tests:
```bash
npm test-e2e
```
## Screenshots

<!-- ![screenshot](docsAssets/screenshot.png)
![screenshot 2](docsAssets/screenshot2.png) -->