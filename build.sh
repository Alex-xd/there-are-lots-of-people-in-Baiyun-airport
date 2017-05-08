#!bin/sh

npm run build
cp dist/static/sw.js dist/sw.js
cp dist/static/sw-toolbox.js dist/sw-toolbox.js
rm -f dist/static/sw.js
rm -f dist/static/sw-toolbox.js
tar cvfz - dist | ssh root@119.29.148.154  "cd /usr/share/nginx/pages/baiyun; rm -rf dist.tar.gz; tar xvfz -;"

exit
