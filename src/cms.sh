#bin bash
RED=$'\e[0;31m'
GREEN=$'\e[0;32m'
NC=$'\e[0m'
# main.scss
sed -i '' -e '56,65 s|^// ||' sass/main.scss

# front.js
sed -i '' -e '2,3 s|^// ||' js/front.js
sed -i '' -e '67,293 s|^  // ||' js/front.js

# copy-vendor.js
sed -i '' -e '8,13 s|^// ||' tasks/copy-vendor.js

# main.js
sed -i '' -e '2 s|^// ||' js/main.js

echo "${GREEN}CMS sass and js is activated ${NC}\n"
