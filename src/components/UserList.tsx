import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";

const UserList: React.FC = () => {
  const {users, error, loading}  = useTypedSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUsers())
  }, []);

  if (loading) {
    return (
      <h2>Loading...</h2>
    );
  }

  if (error) {
    return (
      <h2>{error}</h2>
    );
  }

  return (
    <div>
      {users.map(user =>
          <div key={user.id}>{user.name}</div>
        )
      }
    </div>
  );
};

export default UserList;
