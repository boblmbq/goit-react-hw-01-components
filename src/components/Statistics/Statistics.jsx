import css from './Statistics.module.css';
export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <Ul data={data} />
    </section>
  );
};

const Ul = ({data}) => {
  return (
    <ul className={css.stat_list}>
      {data.map(({ label, percentage, id }) => (
        <li className={css.item} key={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
