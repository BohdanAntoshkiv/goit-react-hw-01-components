import PropTypes from 'prop-types';
import { FriendList } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </FriendList>
  );
}

FriendsList.protoTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()),
};
