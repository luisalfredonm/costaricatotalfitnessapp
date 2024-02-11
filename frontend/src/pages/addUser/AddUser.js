import React, { useState } from 'react'
import UserForm from '../../components/userForm/UserForm'

import {useDispatch, useSelector} from "react-redux"
import { createUser, selectIsLoading } from '../../redux/features/user/userSlide'
import Loader from '../../components/loader/Loader'
import { useNavigate } from 'react-router-dom'


const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "123456",
    bio: "",
    photo: "",
}



const AddUser = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();

const [user, setUser] = useState(initialState)
const [userPhoto, setUserPhoto] = useState("")
const [photoPreview, setPhotoPreview] = useState(null)
const [bioDescription, setBioDescription] = useState("")

const isLoading = useSelector(selectIsLoading)

const {name, email, phone, password, bio, photo} = user

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
};

const handlePhotoChange = (e) => {
  setUserPhoto(e.target.files[0])
  setPhotoPreview(URL.createObjectURL(e.target.files[0]))
  
};

const saveUser = async( e) => {

  e.preventDeafult()
  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('phone', phone)
  formData.append('password', password)
  formData.append('bio', bio)
  formData.append("photo", photo)

  console.log(...formData)
await dispatch(createUser(formData))
navigate("/dashboard")

}

  return (
    <div>
{isLoading && <Loader/>}
        <h3 className="--mt">Add New Client</h3>
        <UserForm
        user={user}
        userPhoto={userPhoto}
        photoPreview={photoPreview}
        bioDescription={bioDescription}
        setBioDescription={setBioDescription}
        handleInputChange={handleInputChange}
        handlePhotoChange={handlePhotoChange}
        saveUser={saveUser} 
        />
    </div>
  )
}

export default AddUser