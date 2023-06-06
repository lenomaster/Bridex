import React from 'react'

export default function Form() {
    const _onSubmit = (e) => {
    e.preventDefault()
    }
  return (
   <form onSubmit={_onSubmit}>
        <h1>Form</h1>
        <label >username: 
            <input type="text" />
            
        </label>
        <button>submit</button>
   </form>
  )
}
