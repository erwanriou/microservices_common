echo ":: COMMIT CHANGES"
git add .
git commit -m '[Library] - update version'
echo ":: UPDATE NPM VERSION AND PUSH REPOSITORY"
npm version patch
git push
echo ":: PUBLISH TO NPM"
npm publish
