import React from 'react'
// import classes from './style.module.css'
// import classes from './styles.module.scss'

// import styled from 'styled-components'


// const BoxStyled = styled.div`
// background: aqua;
// width: 50px;
// height: 50px;
//     .demo{
//         font-size:32px;
//         background:red;
//     }


// `

// 1. inline CSS
// 2. css, css module , scss, scss module
// 3. styled components 
// 4.  tailwindcss -- yarn add -D tailwindcss autoprefixer postcss
export default function Box() {
  return (
    // <div className={classes.box}>
    //     <div className='demo'>ss</div>
    // </div>
    // <BoxStyled />
    <p className="text-3xl font-bold">
    Hello world!
  </p>
  )
}
