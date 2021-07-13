# DT money
Simple project to administrate the personal finances, using React, Node and Styled Components library. The MirageJS is used to mock the API.

## Layout
The layout is available on [Figma](https://www.figma.com/file/0xmu9mj2TJYoIOubBFWsk5/dtmoney-Ignite-(Copy)?node-id=0%3A1).

## First running
```
yarn start
```

## Directory structure
- public
    - index.html
        * html base page
- src
    - assets //images
    - components
        - Dashboard
            * Top and summary
        - Header
            * New transaction button
        - NewTransactionModal
            * Transaction modal and type container
        - Summary
            * Total of deposits and withdraws
        - TransactionsTable
            * Transactions table content
        - TransactionTypeContainer
            * Deposit and Withdraw fake checkbox
    - hooks
        - useTransactions.tsx
            * Complex Context, Provider and hook transactions
        - useType
            * Simple Context, Provider and hook to fake type checkbox
    - services
        - api.ts
            * Set base api url using Axios
    - styles
        - global.ts
    - App.tsx
    - index.tsx
        * Fake api using MirageJS
        * Render

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
* [Styled Components](https://styled-components.com/docs/api#typescript)
* [Unary Plus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
* [Intl API](https://medium.com/@iamgbayer/introdu%C3%A7%C3%A3o-a-intl-api-b13b5f6bef54)