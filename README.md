# TomasinoWeb R101 PY16

## Folder structure
- `src/` folder - contains all code
  - `components/` folder - put all components here
  - `pages/` folder - each page has 2 files
    - `<pageName>.module.scss` - the stylesheet of the page, all styles are for that page only
    - `<pageName>.tsx` - the page file itself

## How to run

1. Clone this repository and checkout to the py16 branch
2. Mkae sure you have node.js and npm / yarn installed
3. Install dependencies (run yarn commands if you have yarn installed, else run npm commands)
   1. yarn: `yarn`
   2. npm: `npm install`
4. Run the dev server
   1. yarn: `yarn dev`
   2. npm: `npm run dev`