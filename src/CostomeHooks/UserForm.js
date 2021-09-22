import React,{useState} from 'react'
import useForm from '../Hooks/useForm';

const UserForm = () => {
 
    const [Fname , BindFname , ResetFname] =  useForm('');
    const [Lname , BindLname , ResetLname] =  useForm('');
    const ClickHandler = (e)=>{
        alert(`${Fname} ${Lname} Welcome`);
        ResetFname();
        ResetLname();
    }
 
    return (
        <div>
            <h1>User Login Form</h1>
            <form action="" onSubmit = {ClickHandler}>
            <div>
            <label htmlFor="Fname">FName</label>
            <input type="text" id="Fname" {...BindFname} placeholder = "Enter First Name" />
            </div>
            <div>

            <label htmlFor="Fname">LName</label>
            <input type="text" id="Lname" {...BindLname} placeholder = "Enter Last Name"/>
            </div>
            <div>
            <input type="submit"/>
            </div>
            </form>
        </div>
    )
}

export default UserForm
