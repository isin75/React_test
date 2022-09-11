import React from 'react'
// Импорт через модули
import classes from './MyInput.module.css'
// Обёртывание в хук useRef(), ref - props
const MyInput = React.forwardRef((props, ref) => {
  return (
    // Импорт через модули, и передача props - ref
    <input ref={ref} className={classes.myInput}{...props}/>
  )
})

export default MyInput