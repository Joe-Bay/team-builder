import React, { useState } from 'react';
import './App.css';
import MemberForm from './MemberForm'
import Member from './Member'
import styled from 'styled-components'



const styledMembers = styled.div`
background-color: lightgray;
border-radius: '10px';
`
// const initialMembers= [
//   {
//     id: 0,
//     name: 'Joe',
//     email: 'joe@joe.com',
//     role: 'Student'
//   }
// ]


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([])
  console.log(members)

  const [formValues, setFormValues] = useState(initialFormValues)


const updateForm = (inputName, inputValue) => { // this is what makes it so our state will update when typing in the input
  
  setFormValues({ // this takes a spread of the values, and changes one depending on the values below which are usually event objects 
    ...formValues,
    [inputName]: inputValue,
  })
}

const submitForm = () => {
  const newMember = {// this is what creates a new member, the trim cuts any white space (spaces that someone may have inserted in the input box)
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),
  }
  if(!newMember.name || !newMember.email || !newMember.role) {return}

  setMembers([newMember, ...members])
  setFormValues(initialFormValues)

}



  return (
    <div className="App">
      <MemberForm 
      update = {updateForm}
      submit = {submitForm}
      values = {formValues}
      />
      <styledMembers>
      {
       members.map(member => {
         return (
        <Member key={members[member]} details={member}/>
         )
       })

      }
      </styledMembers>
    </div>
  );
}

export default App;
