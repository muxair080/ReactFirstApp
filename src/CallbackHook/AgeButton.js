import React,{memo} from 'react'

const AgeButton = (props) => {
    console.log('AgeButton is Rendered');
    return (
        <div>
            <button onClick = {props.handleClick}>Increament Age</button>
        </div>
    )
}

export default memo(AgeButton);
