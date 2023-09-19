import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.item} key={id}>
      <span className={`${css.status} ${css[isOnline]}`} />
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};
