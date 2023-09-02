import userData from 'data/user.json';
import downloadData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionInfo from 'data/transactions.json';

import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile data={userData} />
      <Statistics data={downloadData} title="Upload data" />
      <FriendListItem data={friendsData} />
      <TransactionHistory data={transactionInfo} />
    </>
  );
};
