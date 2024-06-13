import Profile from "../Profile/Profile";
import css from "../App/App.module.css";
import { username, tag, location, avatar, stats } from "../../userData.json";
import friends from "../../friends.json";
import FriendsList from "../FriendsList/FriendsList";

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        name={username}
        tag={tag}
        location={location}
        imageUrl={avatar}
        stats={stats}
      />
      <FriendsList friends={friends} />
    </div>
  );
}
