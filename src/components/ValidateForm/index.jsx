import React, { useState } from 'react'
import Field from './components/Field'

export default function ValidateForm() {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const onSubmit = (e) => {
        e.preventDefault()
       const errorObject = {}
     
       if(!form.email?.trim()){
        errorObject.email = 'Please fill in this filed'
       }
       if(!form.name?.trim()){
        errorObject.name = 'Please fill in this filed'
       }
       if(!form.phone?.trim()){
        errorObject.phone = 'Please fill in this filed'
       }
       setError(errorObject)
       if(Object.keys(errorObject).length == 0){
        console.log('dung');

       }else{
        console.log('asdasd');
       }
    }

    const register = (name) =>{
        return{
            error: error[name],
            value:form[name] || '',
            onChange:ev => setForm({...form, [name]:ev.target.value})
        }
    }

  return (
    <form onSubmit={onSubmit} style={{display:"flex", flexDirection:'column',gap:'50px'}}>
        <Field 
        label="Họ và Tên"
        required

        {...register('name')}
        // error={error.name}
        // value={form.name}
        // onchange={ev => setForm({...form, ['name']:ev.target.value})}
        />
          <Field 
        label="Email"
        required

        {...register('email')}
        // value={form.name}
        // onchange={ev => setForm({...form, name:ev.target.value})}
        />
          <Field 
        label="Số điện thoại"
        required
        {...register('phone')}
        // value={form.name}
        // onchange={ev => setForm({...form, name:ev.target.value})}
        />

<Field 
        label="Nội dung"
        required
        {...register('content')}
        // value={form.name}
        // onchange={ev => setForm({...form, name:ev.target.value})}
        renderInput={(props) => <textarea  {...props} rows={10} cols={30}/>}
        />
        <button style={{width: "200px", background:'blue', color:"white"}}>submit</button>
       
    </form>
  )
}
