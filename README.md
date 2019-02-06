# angular-library-elements
Example showing how to use custom elements that are stored in an Angular library

Shows Angular project with custom library.  Another application consumes components from this library and exposes the components as custom elements.

Contains:
  1. Host Application
  2. Library - my-library
  3. Elements Application - where custom elements are defined
  4. elements directory - where bundled elements.js and standalone index.html are stored

## Usage

`npm install`

`npm run bundle:elements`

from elements directory `http-server -c-1`

