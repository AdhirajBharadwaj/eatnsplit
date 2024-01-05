import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from 'react';
const initialFriends = [

];
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleClick() {
    setShowAddFriend(show => !show);
  }
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);

  }
  function handleSplitBill(value) {
    setFriends((friends) => friends.map((friend) => friend.id === selectedFriend?.id ? { ...friend, balance: friend.balance + value } : friend));
    setSelectedFriend(null)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelect={handleSelection} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAdd={handleAddFriend} />}

        <Button onClick={handleClick}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>

      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} key={selectedFriend.id} />}

    </div>
  )
}
export default App;