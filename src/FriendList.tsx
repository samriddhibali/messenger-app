import "./FriendList.css";

const FriendList = ({
  friends,
  selectedFriend,
  setSelectedFriend,
}: {
  friends: string[];
  selectedFriend: string;
  setSelectedFriend: (friend: string) => void;
}) => {
  return (
    <div className="friend-list">
      <h2>Friends</h2>
      <ul>
        {friends.map((friend: string, index: number) => (
          <li
            key={`${friend}-${index}`}
            className={friend === selectedFriend ? "selected" : ""}
            onClick={() => setSelectedFriend(friend)}
          >
            {friend}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
