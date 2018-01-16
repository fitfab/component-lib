### UI Component with styled-component

install

`yarn add fitfab-ui`

usesage

`import { Button } from 'fitfab-ui'`

### using local copy of fitfab-ui

_NPM LINK_

* from the root of 'fitfab-ui' run: `npm link`
* from the root of your app run: `npm link fitfab-ui`

Then start using as normal:

`import { Button } from 'fitfab-ui'`

### Publishing to NPM

a) Make sure repo is clean -- ready to be pushed.

b) Update package version (major | minor | patch | prerelease | preminor | premajor)

`npm version patch -m "Version %s - relevant comments"` 

c) Update remote repo and tag

`git push && git push --tags`

d) Finally publish to NPM

`npm publish`
