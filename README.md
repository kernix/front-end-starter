# Front-End


## Installation
### Start the project (Front-End)

```sh
# install dependencies (npm install && bower install && gulp)
On folder: ./src/ -> npm start
```

## Manual
### Installing packages and dependencies

```sh
# install dependencies listed in bower.json
bower install

# install dependencies listed in package.json
npm install
```

### Add packages

```sh
# install a package and add it to bower.json
bower install <package> --save

# install a package and add it to package.json
npm install <package> --save
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
# run gulp and gulp watch
gulp

# run gulp watch
gulp watch
```
