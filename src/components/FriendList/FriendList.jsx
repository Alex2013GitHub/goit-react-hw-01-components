import propTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.item} key={id}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} />
            <p className={css.name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    })
  ).isRequired,
};
