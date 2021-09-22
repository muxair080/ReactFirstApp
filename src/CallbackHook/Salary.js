import React, {memo} from 'react'

const salary = (props) => {
    console.log('Salary is Rendered');
    return (
        <div>
            <h4>{props.value}</h4>
        </div>
    )
}

export default memo(salary)
