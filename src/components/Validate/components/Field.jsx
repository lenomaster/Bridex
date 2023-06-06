import React from 'react'
import styled from 'styled-components'


const ErrorStyled = styled.div`
color:red;
position:absolute;
top:100%;
font-size:0.875rem;
font-style: italic;
`

export default function Field({label,error, required, type='text',renderInput, ...props}) {
  return (
    <label style={{position:'relative'}}>
      <p>{label} {required && <span >*</span>}</p>
      {renderInput ? renderInput?.(props) :    <input type={type}  style={{border : '1px solid black', color:'black'}}  {...props}/>}
      {error && <ErrorStyled>{error}</ErrorStyled> }
    </label>
  )
}
