# tslint-config
A config for tslint for the Domo Apps Generator (https://git.empdev.domo.com/CustomApps/generator-da)

Based on Airbnb's JS and React style guides (https://github.com/airbnb/javascript) with some Typescript-specific rules added. Rules related to a section in Airbnb's style guide have a comment next to them referencing the related section i.e. `// 1.1`

In the tslint.json file, the rules are specified in the rules property. The rules are divided into three sections:
Airbnb rules
React rules
TSLint rules

Depending on what kind of rule you are adding, make sure it is added in the proper order according to the website. The Airbnb style guide is organized into sections, and the React rules are organized into numbers. Add a comment indicating what section or number the rule is coming from.
