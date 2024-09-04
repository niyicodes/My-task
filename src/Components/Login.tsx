import { useState } from "react";
import CustomInput from "./CustomInput";
import { validatePassword } from "../ReuseableFunctions";
import Button from "./Button";
import { useNavigate } from "react-router-dom";


interface FormDetails {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate()
  const [validationMessage, setValidationMessage] = useState<string | null>(null);

  const [formDetails, setFormDetails] = useState<FormDetails>({
    email: '',
    password: ''
  })

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
        <Button variant="transparent" children='Create Account' onClick={() => navigate('/')} />
      </div>
      <form className="w-full lg:max-w-[450px] mt-[50px]">
        {/* form header */}
        <div>
          <h2 className="text-[25px] font-extrabold">Welcome Back.</h2>
        </div>
        {/* form area */}
        <div className="flex flex-col gap-6 mt-[30px]">
          <CustomInput
            type="email"
            label="Email Address"
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

          <div><Button variant="filled" onClick={() => navigate('/dashboard')} children='Log In' /></div>
        </div>
      </form>
    </div>
  )
}

export default Login