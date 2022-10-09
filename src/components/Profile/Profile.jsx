import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <StatusList>
        <StatusItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatusItem>
      </StatusList>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
