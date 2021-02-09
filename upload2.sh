#! /bin/bash

function show_current_version() {
  PKG_VERSION=`node -p "require('./package.json').version"`  
  echo "now: "$PKG_VERSION;
}

show_current_version

VERSION=""
read -p "version: " VERSION
if [ "$VERSION" != "" ]
then
    yarn version --new-version $VERSION
fi


read -p "With Build? Y/N " ANSWER

case "$ANSWER" in 
  [yY] | [yY][eE][sS])
    cp ./envs/.env.prod .env
    yarn build
    ;;
  [nN] | [nN][oO])
    echo "Ok, without build"
    ;;
  *)
    echo "Please enter y/yes or n/no"
    ;;
esac

GREEN='\033[0;32m'
NC='\033[0m' # No Color

function upload() {
  # if $1 === "Latest"
  aws s3 sync ./build s3://webtest.stayjanda.cloud/$1 --acl public-read
  echo -e "upload ${GREEN}${TARGET}${NC} in version ${GREEN}$1${NC} is ${GREEN}done${NC}"
}

while true;do
echo "select the operation ************"
echo "  1)Next 1"
echo "  2)Stable 2"
echo "  3)Latest 3"

read n
case $n in
  1) upload "next";;
  2) upload "";;
  3) upload "latest";;
  *) "invalid option";;
esac
done
