# megogo-commitlint-config

Unified [commitlint](https://github.com/marionebl/commitlint) 
and [commitizen](https://github.com/commitizen/cz-cli) config for Megogo projects

## Getting started

```
npm install --save-dev megogo-commitlint-config
```

- Create config files in your project for commitlint.config.js and commitizen.config.js

```
const config = require('megogo-commitlint-config/commitlint.js');

module.exports = config('<package-shortname>');
```

```
const config = require('megogo-commitlint-config/commitizen.js');

module.exports = config('<package-shortname>');
```

- Add commit and commitmsg scripts to package.json

```
"scripts": {
  "commit": "git-cz",
  "commitmsg": "commitlint -e $GIT_PARAMS"
}
```

- Add commitizen to package.json configs

```
"config": {
  "commitizen": {
    "path": "./commitizen.config.js"
  }
}
```

- Then just run `npm run commit` and follow the commitizen dialog

## Rules

##### Your commit message should have next structure parts:

- `project-name: shortname of your project (for example: EMB, EPG, CMS etc.)`
- `issue: number of Jira issue`
- `subject: name of Jira issue (max. 72 symbols)`
- `body (optional): long description of changes you have made`

As a result you will have commit like this `EMB-755: UiSkin fixes.`
