import React, {memo} from 'react'

const age = (props) => {
    console.log('Age is Rendered');
    return (
        <div>
            <h4>{props.value}</h4>
        </div>
    )
}

export default memo(age)
