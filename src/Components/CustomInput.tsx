import React, { useState, ChangeEvent } from 'react';

type CustomInputProps = {
 label: string;
 value: string;
 onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
 placeholder?: string;
 infoText?: string;
 id: string;
 name?: string;
 multiline?: boolean;
 rows?: number;
 type?: string;
 validationMessage?: string | null;
};

const CustomInput: React.FC<CustomInputProps> = ({
 label,
 value,
 onChange,
 placeholder = '',
 infoText,
 id,
 name,
 multiline = false,
 rows = 3,
 type = 'text',
 validationMessage
}) => {
 const [showPassword, setShowPassword] = useState(false);

 const handleTogglePassword = () => {
  setShowPassword(!showPassword);
 };

 return (
  <div className="flex flex-col space-y-2">
   <label htmlFor={id} className="inputLabel">
    {label}
   </label>
   <div className="relative">
    {multiline ? (
     <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className="customTextarea"
     />
    ) : (
     <input
      type={type === 'password' && showPassword ? 'text' : type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="customInput"
     />
    )}
    {type === 'password' && (
     <button
      type="button"
      onClick={handleTogglePassword}
      className="showPassword"
     >
      {showPassword ? 'Hide' : 'Show'}
     </button>
    )}
   </div>
   {infoText && (
    <p className="text-sm text-gray-500">
     {infoText}
    </p>
   )}
   {validationMessage && (
    <p className="text-sm text-red-500">
     {validationMessage}
    </p>
   )}
  </div>
 );
};

export default CustomInput;
