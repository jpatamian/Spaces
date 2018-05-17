import React from 'react'

const TextField = (props) => {
  return (
    <label className='formtext'>
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
