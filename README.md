# CukeTypeAPI

Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format.
TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.This repository sets up a Cucumber BDD framework using TypeScript and SuperTest for API testing.

## Features

1. Awesome report
2. Execute tests on multiple environments
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Page object model

## Project structure

- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report


## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npm run test` to execute the tests
5. To run a particular test change
6. To run a particular test change

```
  paths: [
            "src/test/features/featurename.feature"
         ]
```

7. Use tags to run a specific or collection of specs

```
npm run test --TAGS="@test or @add"
```

## To choose a reporter

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report

### Folder structure

0. `src\pages` -> All the page (UI screen)
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\helper\env` -> Multiple environments are handled
5. `src\helper\types` -> To get environment code suggestions
6. `src\helper\report` -> To generate the report
7. `cucumber.json` -> One file to do all the magic
8. `package.json` -> Contains all the dependencies
