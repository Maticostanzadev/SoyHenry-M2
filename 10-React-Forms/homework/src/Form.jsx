import React from 'react';
import { validate } from './Validate';

export default function  Form() {
   const [input, setInput] = React.useState({
      username: "",
      password: "",
   })

   const [errors, setErrors] = React.useState({});

   const handleInputChange = function(e) {
      setInput({...input, [e.target.name]: e.target.value});
      setErrors(validate({...input, [e.target.name]: e.target.value}));
   }

   return (
      <form>
         <div>
            <label>Username:</label>
            <input className={errors.username && "danger"} type="text" name="username" value={input.username} onChange={handleInputChange} />
            {errors.username && (
            <p className="danger">{errors.username}</p>
            )}
         </div>
         <div>
            <label>Password:</label>
            <input className={errors.password && "danger"} type="password" name="password" value={input.password} onChange={handleInputChange}/>
            {errors.password && (
            <p className="danger">{errors.password}</p>
            )}
         </div>
      </form>
   )
}