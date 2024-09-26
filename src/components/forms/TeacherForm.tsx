"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';

const schema = z.object({
    username: z.string()
    .min(3, { message: 'Username must be at least 3 characters long' })
    .max(20, { message: 'Username must be at most 20 characters long' }),
    email: z.string().email({message : "Invalid email address!"}),
    password: z.string().min(8, {message : "Password must be at least 8 characters long!"}),
    firstname: z.string().min(1, {message : "First name is required!"}),
    lastname: z.string().min(1, {message : "First name is required!"}),
    phone: z.string().min(1, {message : "Last name is required!"}),
    address: z.string().min(1, {message : "Phone no is required!"}),
    birthday: z.date({message : "Birthday is required!"}),
    sex: z.enum(["male","female"],{message : "Message is required!"}),
    img: z.instanceof(File,{ message : "Image is required"})
  });

const TeacherForm = ({
    type,
    data,
    
}: {type: "create" | "update"; 
    data?: any;

}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });

  return (
    <form className="">
        
    </form>
  ) 
}

export default TeacherForm