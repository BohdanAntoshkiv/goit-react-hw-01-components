import PropTypes from 'prop-types';
import {
  Friend,
  Status,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styled';

export default function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <Friend>
      <Status isOnline={isOnline}></Status>
      <FriendAvatar src={avatar} alt={name + ' avatar'} width="40" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
