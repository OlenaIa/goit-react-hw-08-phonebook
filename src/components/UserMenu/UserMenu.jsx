import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/authSelector";
import avatar from "./avatar.png"
import { postLogOutThunk } from "services/fetchAuth";
import { Avatar, Button, Toolbar } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={user.name} src={avatar} sx={{ width: 36, height: 36 }}/>
      Welcome, {user.name}!
      <Button variant="text" color='inherit' type="button" startIcon={<LogoutOutlinedIcon />}
              onClick={() => dispatch(postLogOutThunk())}
          >
        Log Out
      </Button>
    </Toolbar>
  );
};