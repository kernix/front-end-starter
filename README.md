
# Front-End Development

## Activation Boiler CMS
```sh
Uncomment the following line 11 - 17 in the file: ./src/sass/main.scss
Uncomment import 'lity' in the file: ./src/js/main.js
Uncomment code in the file: ./src/js/front.js
```

## Installation
### Start the project (Front-End)
**PROD:**
```sh
# install dependencies (pnpm install --production && gulp --production)
cd src && pnpm start
```

**DEV:**
```sh
# install dependencies (pnpm && gulp)
cd src && pnpm start:dev
```

### SASS & JS
**SASS:**
```sh
On folder: ./src/sass
```

**JS:**
```sh
On folder: ./src/js
```

## Manual
### Installing packages and dependencies
### Add packages

```sh
# install a package and add it to package.json
pnpm add <package>
```

### Update packages
[https://www.npmjs.com/package/npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
```sh
# overwrite package file (package.json)
ncu -u

#include even those dependencies whose latest version satisfies the declared semver dependency (package.json)
ncu -a
```

## Development
### Gulp

```sh
# run gulp default
gulp

# run gulp watch
gulp watch
```

## WEB BROWSER (Cross-browser)
```sh
- Chrome (80+)
- Internet Explorer (10+)
- Microsoft Edge (78+)
- Firefox (70+)
- Safari (12+) (Safari sur Windows est exclu car il n'est plus mis à jour depuis 2016)
- Opera (60+)
```
