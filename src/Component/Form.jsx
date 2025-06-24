import React, { useState } from 'react'
import { setUsers } from '../Slice/userSlice';
import { useDispatch } from 'react-redux';

const Form = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name:"",
        age:"",
        email:"",
        ph:""
    });

    const handleVal = (e) => {
        const {name,value} = e.target;

        setForm((currInput) => {
            return{
                ...currInput, 
                [name]:value
            };
        });
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUsers(form));
        //console.log(setUsers(form));
    }

  return (
    <div>
        <form>
        <label>Name</label>
        <input 
            name='name'
            type='text'
            value={form.name}
            onChange={handleVal}
        ></input>
        <br></br>

        <label>Age</label>
        <input 
            name='age'
            type='number'
            value={form.age}
            onChange={handleVal}
            ></input>
        <br></br>

        <label>Email</label>
        <input 
            name='email'
            type='text'
            value={form.email}
            onChange={handleVal}
            ></input>
        <br></br>

        <label>Phone number</label>
        <input 
            name='ph'
            type='number'
            value={form.ph}
            onChange={handleVal}
            ></input>
        <br></br>

        <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Form