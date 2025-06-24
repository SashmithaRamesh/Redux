import React from 'react'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
const Contact = () => {
    const users = useSelector((state) => state.usersInfo.users);
    console.log(users);
  return (
    <div>
        <h2>Contact Details</h2>
        {users?.map((user,index) =>{
            return(
                <div key={index}>
                    <h3>{user.name}</h3>
                    <h3>{user.age}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.ph}</h3>
                </div>
            );
        }
        )}
    </div>
  )
}

export default Contact