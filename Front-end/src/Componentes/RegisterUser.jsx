import { DevTool } from '@hookform/devtools';
import '../Styles/RegisterUser.css';
import {set, useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, * as others from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const schema = yup.object({
    username: yup.string().required('Usuário obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().min(2,'Senha com no mínimo 2 caracteres').required(),
    passwordConf: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'As senhas devem coincidir!'),
}).required();


export default function RegisterUser(){

    const [msg, setMsg] = useState();

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const { register, control, handleSubmit, formState } = form;

    const {errors} = formState;

    // const submit = async (data) => {
        
    //     try {
    //         const response = await axios.post('http://localhost:8080/auth/create', data);
    //         setMsg(response.data);
    //     } catch (error) {
    //         setMsg(error.response.data);
    //     }   
        
    // }

    return (
        <div className='RegisterUser-Container'>
      <section className='RegisterUser-Container-Body'>
        <h2 className='RegisterUser-h2'>Cadastrar</h2>
        <form  className='RegisterUser-Form'>
          <div className='RegisterUser-Container-Inputs'>
            <input type='text' placeholder='username' className='RegisterUser-Input-Username' {...register('username')}/>
            <p className='RegisterUser-erro'>{errors.username?.message}</p>

            <input type='email' placeholder='e-mail' className='RegisterUser-Input-Email'{...register('email')}/>
            <p className='RegisterUser-erro'>{errors.email?.message}</p>

            <input type='password' placeholder='senha' className='RegisterUser-Input-Senha' {...register('password')}/>
            <p className='RegisterUsererro'>{errors.password?.message}</p>

            <input type='password' placeholder='confirmar senha' className='RegisterUser-Input-ConfSenha' {...register('passwordConf')}/>
            <p className='RegisterUser-erro'>{errors.passwordConf?.message}</p>

            <button className='RegisterUser-Button-Cadastro'>Cadastrar</button>
          </div>
        </form>
        <div className='RegisterUser-div-login'>
          <Link to='/login' className='RegisterUser-link-login'>Login</Link>
        </div>
      </section>
    </div>
    )

}