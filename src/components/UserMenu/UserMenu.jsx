import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSelector";
import avatar from "./avatar.png"
import { postLogOutThunk } from "services/fetchAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
     <img src={avatar} alt="" width="36" />
      <p>Welcome, {user.name}</p>
          <button type="button"
              onClick={() => dispatch(postLogOutThunk())}
          >
        LogOut
      </button>
    </div>
  );
};