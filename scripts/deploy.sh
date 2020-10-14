echo ":: UPDATE NPM VERSION"
npm version patch
echo ":: COMMIT AND DEPLOY CHANGES"
git add .
git commit -m '[Library] - update version'
git push
echo ":: PUBLISH TO NPM"
npm publish
