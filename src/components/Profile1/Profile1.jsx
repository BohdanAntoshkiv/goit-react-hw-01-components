import { Component } from 'react';

export default class Profile1 extends Component {
  render() {
    const { username, tag, avatar, location, stats, age } = this.props;

    return (
      <div className="profile">
        {console.log(this.props)}
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{stats.vievs}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </li>
          <li>
            <span className="label">Age</span>
            <span className="quantity">{age}</span>
          </li>
        </ul>
      </div>
    );
  }
}
