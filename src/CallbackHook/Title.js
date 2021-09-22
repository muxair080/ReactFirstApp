import React,{memo , useRef , useEffect} from 'react'

const Title = () => {
    const inputref = useRef(null);

    useEffect(() => {
        inputref.current.focus()
    },[])
    console.log('Title component is rendered');
    return (
        <div>
            <h1>Title Component</h1>
            <input ref = {inputref} type="text" placeholder = "Enter name" />
        </div>
    )
}

export default memo(Title);
