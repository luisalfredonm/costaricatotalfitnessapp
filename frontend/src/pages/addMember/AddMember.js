import React, { useState } from 'react'
import MemberForm from '../../components/memberForm/MemberForm'

const AddMember = () => {
    const initialState = {
        name: "",
    email: "",
    password:"",
    phone: "",
    bio: "",
      };

    const [members, setMembers] = useState(initialState)
  return (
    <div>

        <h3>Add New Member</h3>
        <MemberForm/>
    </div>
  )
}

export default AddMember