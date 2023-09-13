# Useful Commands

## Install airbnb style guide

`npx install-peerdeps --dev eslint-config-airbnb`

Airbnb's ESLint config with TypeScript support

`npm install eslint-config-airbnb-typescript --save-dev`

## Run eslint
`npx eslint . --ext .js,.jsx,.ts,.tsx`

## Prettier
Install prettier: `npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev`

## NPM Packages
Check for outdated npm modules : `npm outdated`

Update all dependencies and `package.json` version numbers: `npm update --save`

Update a single dependency (example): 
`npm update vitest --save`


# Development dependencies used

### Build tool
- vite

### Linting, code formatting
- eslint
- prettier

### Testing
- vitest
- testing-library/react
- jsdom

# Deployment
### Deploy to Github pages
https://vitejs.dev/guide/static-deploy.html#github-pages

 Put  `base: '/react_template'` in vite.config