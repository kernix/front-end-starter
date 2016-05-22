# Framework UI
A light framework aimed for quick use by Front-End Developers.

## Installation
### Installing packages and dependencies

```sh
# install dependencies listed in bower.json
bower install

# install dependencies listed in package.json
npm install

# install dependencies (npm install && bower install && gulp)
npm start
```

### Add packages

```sh
# install a package and add it to bower.json
bower install <package> --save

# install a package and add it to package.json
npm install <package> --save
```

## Development
### Gulp

```sh
# run gulp and gulp watch
gulp
```

## Structure

```
|-- dist
|  |-- css
|  |  |-- map
|  |  |  |-- theme.css.min.map
|  |  |-- theme.min.css
|  |-- fonts
|  |-- img
|  |  |-- favicons
|  |-- js
|  |  |-- main.min.js
|  |-- vendor (bower_components)
|-- docs
|-- src
|  |-- img
|  |  |-- favicon
|  |-- js
|  |  |-- main.js
|  |-- less (all less)
|-- www
```
