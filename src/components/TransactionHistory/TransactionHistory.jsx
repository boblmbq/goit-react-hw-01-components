import css from './TransactionHistory.module.css';
import { TableRow } from 'components/TableRow/TableRow';
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


