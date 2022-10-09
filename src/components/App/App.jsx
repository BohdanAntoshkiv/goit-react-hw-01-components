import Profile from '../Profile/Profile';
import user from '../../content/user.json';
import Statistics from '../Statistics/Statistics';
import data from '../../content/data.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../content/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../content/transactions.json';
import { Container } from '../App/App.styled';

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
      </Container>
    </div>
  );
}
