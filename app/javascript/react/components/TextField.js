import React from 'react'

const TextField = (props) => {
  return (
    <label className='formtext'>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.content}
        placeholder={props.name}
        onChange={props.handlerFunction}
      />
    </label>
  )
}

export default TextField;
