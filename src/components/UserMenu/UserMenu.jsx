import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSelector";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <p>Welcome, {user.name}</p>
          <button type="button"
            //   onClick={() => dispatch(logOut())}
          >
        LogOut
      </button>
    </div>
  );
};