import React,{memo} from 'react'

const Salarybtn = (props) => {
    console.log('Salarybtn i Rendered');
    return (
        <div>
            <button onClick = {props.handleClick}>Increament-Salary</button>
        </div>
    )
}
export default memo(Salarybtn);
