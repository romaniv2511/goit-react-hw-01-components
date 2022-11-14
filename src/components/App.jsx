import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transactions from "../transactions.json"
import { Profile } from "./Profile/Profile.jsx";
import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory.jsx";

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  )
}