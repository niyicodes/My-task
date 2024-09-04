import { useNavigate } from "react-router-dom";
import { validatePassword } from "../ReuseableFunctions";
import Button from "./Button"
import CustomInput from "./CustomInput"
import { useState } from 'react'


interface FormDetails {
 fullName: string;
 email: string;
 password: string;
}

const SignUp = () => {
 const [validationMessage, setValidationMessage] = useState<string | null>(null);

 const [formDetails, setFormDetails] = useState<FormDetails>({
  fullName: '',
  email: '',
  password: ''
 })

 const navigate = useNavigate()



 const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormDetails((prev) => ({
   ...prev,
   [name]: value,
  }));

  if (name === 'password') {
   const message = validatePassword(value);
   setValidationMessage(message);
  }
 };


 return (
  <div className="flex flex-col">
   <div className="ml-auto">
    <Button variant="transparent" children='Log in' onClick={() => navigate('/login')} />
   </div>
   <form className="w-full lg:max-w-[450px] mt-[50px]">
    {/* form header */}
    <div>
     <h2>Create an Account</h2>
     <small>It's simple and Easy!!</small>
    </div>
    {/* form area */}
    <div className="flex flex-col gap-6 mt-[30px]">
     <CustomInput
      type="text"
      label="Fullname"
      value={formDetails.fullName}
      onChange={handleFormChange}
      placeholder="Enter your fullname"
      infoText="Surname followed by others"
      id="fullName"
      name="fullName" />

     <CustomInput
      type="email"
      label="Email"
      value={formDetails.email}
      onChange={handleFormChange}
      placeholder="Enter a valid email"
      infoText="Example: man@yahoo.com"
      id="email"
      name="email" />

     <CustomInput
      type="password"
      label="Enter A Password"
      value={formDetails.password}
      onChange={handleFormChange}
      placeholder="Enter your password"
      infoText="Up to 8 characters with an Uppercase, symbol and number"
      id="password"
      name="password"
      validationMessage={validationMessage}
     />

     <Button variant="filled" onClick={()=>alert('Create account')}  children='Create Account'/>
    </div>
   </form>
  </div>
 )
}

export default SignUp