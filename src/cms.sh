#bin bash
RED=$'\e[0;31m'
GREEN=$'\e[0;32m'
NC=$'\e[0m'
# main.scss
sed -i '' -e '53,68 s|^// ||' sass/main.scss

# copy-vendor.js
sed -i '' -e '8,13 s|^// ||' tasks/copy-vendor.js

# main.js
sed -i '' -e '2 s|^// ||' js/main.js
sed -i '' -e '19,27 s|^// ||' js/main.js
sed -i '' -e '46,61 s|^    // ||' js/main.js

echo "${GREEN}CMS sass and js is activated ${NC}\n"
