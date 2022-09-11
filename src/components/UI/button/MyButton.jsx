import React from 'react';
// Обычный импорт css
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return(
        // Обычный импорт css
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton