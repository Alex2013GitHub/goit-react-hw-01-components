import propTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.list}>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          );
        })}
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
