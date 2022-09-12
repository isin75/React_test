import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
        value={value}
        onChange={e => onChange(e.target.value)}    
    >
        <option disabled value="">{defaultValue}</option>
        {options.map((option) => {
            <options key={option.value} value={option.value}>
                {option.name}
            </options>
        })}
    </select>
  )
}

export default MySelect