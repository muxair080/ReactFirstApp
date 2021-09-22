// import logo from './logo.svg';
import './App.css';
import React,{useState , useCallback} from 'react'
// import Users from './componenets/users'
// import NestedLoop from './componenets/Nestedloop';
// import Reducers from './UseReducers/reducers';
// import FetchingData from './UseReducers/FetchingData';
import Title from './CallbackHook/Title';
import Age from './CallbackHook/age';
import AgeButton from './CallbackHook/AgeButton';
import Salary from './CallbackHook/Salary';
import Salarybtn from './CallbackHook/Salarybtn';
import ComponentOne from './CostomeHooks/ComponentOne';
import ComponentTwo from './CostomeHooks/ComponentTwo';
import UserForm from './CostomeHooks/UserForm';

 function App(){
   const [age, setage] = useState(30);
   const [salary, setsalary] = useState(50000);
const IncreamentAge =  useCallback(()=>{
    setage(age+1);
 },[age])
const IncreamentSalary =  useCallback(()=>{
    setsalary(salary+1000);
  },[salary])
   
  return(
    <div>
    {/* <Users count = {count}/> */}
    {/* <button onClick={()=>setcount(count+1)}>Click</button> */}
       {/* <NestedLoop/> */}
       {/* <Reducers/> */}
       {/* <FetchingData/> */}

       {/* <Title/>
       <Age value = {age} />
       <AgeButton handleClick = {IncreamentAge}/>
       <Salary value = {salary}/>
       <Salarybtn handleClick = {IncreamentSalary}/> */}

       {/* <ComponentOne/> */}
       {/* <ComponentTwo/> */}
       <UserForm/>

  </div>
  )

}
export default App;


