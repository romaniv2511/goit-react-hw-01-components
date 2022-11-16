import user from "../dataes/user.json"
import data from "../dataes/data.json"
import friends from "../dataes/friends.json"
import transactions from "../dataes/transactions.json"
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

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