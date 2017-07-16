# Front-End Development

## Installation
### Start the project (Front-End)

```sh
PROD:
# install dependencies (npm install && bower install && gulp)
On folder: ./src/ -> npm start
```
```sh
DEV:
# install dependencies (yarn && gulp)
On folder: ./src/ -> npm run start:dev
```
### SASS & JS
```sh
SASS:
On folder: ./src/sass
```
```sh
JS:
On folder: ./src/js
```

## Manual
### Installing packages and dependencies

```sh
# install dependencies listed in bower.json
bower install

# install dependencies listed in package.json
npm i
```

### Add packages

```sh
# install a package and add it to bower.json
bower install <package> --save

# install a package and add it to package.json
yarn add <package> --dev
```

### Update packages

```sh
# overwrite package file (package.json)
ncu -u

#include even those dependencies whose latest version satisfies the declared semver dependency (package.json)
ncu -a

# will use bower.json and check versions in bower
ncu -m bower
```

## Development
### Gulp

```sh
# run gulp default
gulp

# run gulp watch
gulp watch
```

## WEB BROWSER
```sh
IE : +10
CHROME : latest
FIREFOX : latest
```
