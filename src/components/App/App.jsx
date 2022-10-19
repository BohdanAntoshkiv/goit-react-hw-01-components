import Profile from '../Profile/Profile';
import user from '../../content/user.json';
import Statistics from '../Statistics/Statistics';
import data from '../../content/data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../content/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../content/transactions.json';
import { Container } from '../App/App.styled';

import Profile1 from 'components/Profile1/Profile1';
import { Component } from 'react';
import { number } from 'prop-types';
import { letter } from 'prop-types';

const arr1 = ['a', 'b', 'c', 'd'];

export class Item_1 extends Component {
  render() {
    const { letter } = this.props;
    return <li>{letter}</li>;
  }
}

export class List_1 extends Component {
  render() {
    const { letter } = this.props;
    return (
      <ul>
        {arr1.map(elem => {
          return <Item_1 key={letter} letter={elem} />;
        })}
      </ul>
    );
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export class Item extends Component {
  render() {
    const { number } = this.props;
    return <li>{number}</li>;
  }
}

export class List extends Component {
  render() {
    const { array } = this.props;
    return (
      <ul>
        {array.map(el => {
          return <Item key={el} number={el} />;
        })}
      </ul>
    );
  }
}
export default function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="App">
      <Container>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
        <Statistics title="Upload status" data={data} />

        <FriendList friends={friends} />

        <TransactionHistory items={transactions} />

        <Profile1
          username="Tania"
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
          age={28}
        />
        <Profile1
          username="Bohdan"
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
          age={30}
        />
        <List array={arr} />
        <List_1 letter={arr1} />
      </Container>
    </div>
  );
}
