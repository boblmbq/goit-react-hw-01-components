import css from './TableRow.module.css';
export const TableRow = ({ data }) => {
  return data.map(({ id, type, amount, currency }) => (
    <tr key={id} className={css[type]}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
};
