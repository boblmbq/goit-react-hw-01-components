import clsx from 'clsx';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ data }) => {
  console.log(data);
  return (
    <ul className={css.friend_list}>
      <Li data={data} />
    </ul>
  );
};

const Li = ({ data }) =>
  data.map(({ avatar, name, isOnline, id }) => (
    <li className={css.item} key={id}>
      <span
        className={clsx(css.status, {
          [css.green]: isOnline,
        })}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
