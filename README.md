to install on a existing project:
install `npm install eslint-plugin-functional --save-dev`

to set up to see resulting validations:
`eslint --plugin functional {targetFiles}`

to add eslint to code editor, add "plugin:functional/recommended" or "plugin:functional/lite" depending on how strictly rules we want functional programming to be. 

if FP is only required for a folder, in a project

app - ....
    - eslintrc.js
    - functionalProgrammingProject - ....
                                   - eslintrc.js

Just add this in the subdirectory eslintrc: (cascading configuration - https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy)
```
 module.exports = {
  "plugins": ["functional"],
  "extends": [
    "plugin:functional/recommended"
  ]
};
```
