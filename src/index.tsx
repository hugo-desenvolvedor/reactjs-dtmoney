import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

type TransactionProps = {
  title: string,
  amount: number,
  type?: string,
  category: string,
}

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website freela',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-07-01')
        },
        {
          id: 2,
          title: 'Rent',
          type: 'withdraw',
          category: 'Office',
          amount: 2000,
          createdAt: new Date('2021-07-03')
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);