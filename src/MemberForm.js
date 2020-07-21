// code for the member form
import React from 'react'

export default function MemberForm(props) {
    const { values, update, submit } = props

    const onChange = event => {// 
        const {name, value} = event.target

        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className = 'form container' >
            <div className='form-group submit'>
                <h1>Add Member</h1>
                <button onClick={onSubmit}>Submit</button>
            </div>

            <div className='form-group-inputs'>
                <h4>Member Information</h4>

        <label>Name
            <input 
                name='name'
                type='text'
                placeholder='Enter Name'
                maxLength='15'
                value={values.name}
                onChange={onChange}
                /><br/>
                </label>
        <label>Email
            <input 
                name='email'
                type='email'
                placeholder='Enter email'
                maxLength='20'
                value={values.email}
                onChange={onChange}
                /><br/>
        <label>Role
                <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>Select a Role</option>
                    <option value='Front-End Engineer'>Front-End Engineer</option>
                    <option value='Food Truck Operator'>Food Truck Operator</option>
                    <option value='Chicken Nugget Specialist'>Chicken Nugget Specialist</option>
                </select>
            </label>
                </label>
            </div>
        </form>
    )
}