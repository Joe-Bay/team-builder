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
        <form className = 'form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add Member</h2>
                <button>Submit</button>
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
        <label>Hobby
            <input 
                name='hobbie'
                type='text'
                placeholder='Enter Hobby'
                maxLength='15'
                /><br/>
        <label>Country
            <input 
                name='hobbie'
                type='text'
                placeholder='Enter Hobby'
                maxLength='15'
                />
            </label><br/>
            <label>Favorite Quote
            <input 
                name='favorite quote'
                type='text'
                placeholder='Enter favorite quote'
                maxLength='30'
                />
            </label>
                </label>
            </div>
        </form>
    )
}