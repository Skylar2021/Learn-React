import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register,watch, handleSubmit, formState: { errors } } = useForm();
  const {dataArr, setdataArr} = useState([])
  const onSubmit = data => console.log(data);
  console.log('errors');
  console.log(errors);
  console.log('watch');
  console.log(watch());

  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <p>{errors.firstName?.type === 'required' && "First name is required"}</p>
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

      <input type="submit" />
    </form>
    <div>
      
    </div>
    </>
  );
}