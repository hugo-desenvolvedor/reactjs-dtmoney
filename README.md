# DT money
Simple project to administrate the personal finances, using React, Node and Styled Components library. The MirageJS is used to mock the API.

## Layout
The layout is availabe in [Figma](https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=0%3A1) 

# First running
```
yarn start
```

## Directory structure
- public
    - index.html
- src
    - assets
    - components
        - Dashboard
        - Header
        - Summary
        - TransactionsTable
        - NewTransactionModal
    - services
        api.ts
    - styles
        - global.ts
    - index.tsx
    - App.tsx

## Dependencies
```
yarn add styled-components
yarn add @types/styled-components -D
yarn add miragejs
yarn add @types/miragejs -D
yarn add axios
yarn add @types/axios -D
yarn add react-modal
yarn add @types/react-modal -D
yarn add polished
```

## Documentation
* [Create React App](https://create-react-app.dev/docs/getting-started/)
* [Create React App Custom Templates](https://create-react-app.dev/docs/custom-templates/)
* [Mirage JS](https://miragejs.com/docs/getting-started/introduction/)
* [React Modal](https://github.com/reactjs/react-modal)