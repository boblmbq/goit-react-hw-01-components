import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ data }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TableRow data={data} />
      </tbody>
    </table>
  );
};

const TableRow = ({ data }) => {
  return data.map(({ id, type, amount, currency }) => (
    <tr key={id} className={ css[type]}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
};
