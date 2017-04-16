#!bin/sh

npm run build
tar cvfz - dist/index.html dist/static | ssh root@119.29.148.154  "cd /usr/share/nginx/pages/baiyun; rm -rf dist.tar.gz; tar xvfz -;"

exit
