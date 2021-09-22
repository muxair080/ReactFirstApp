import React,{useState} from 'react'

const useForm = (value) => {
    const [name, setname] = useState(value);
const reset = ()=>{
    setname(value);
}
const bind = {
    name,
    onChange : e => setname(e.target.value)
}
return [name , bind , reset];
}

export default useForm
