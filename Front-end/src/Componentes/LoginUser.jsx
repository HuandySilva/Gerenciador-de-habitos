import { DevTool} from '@hookform/devtools';
import '../Styles/LoginUser.css';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import axios, * as others from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup.string().min(2,'Senha com no mínimo 2 caracteres').required()
}).required();


export default function LoginUser() {

  const [msg, setMsg] = useState(' ');

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const { register, control, handleSubmit, formState } = form;

    const {errors} = formState;

    //  const submit = async (data) => {
    //     try {
    //       const response = await axios.post('http:localhost:8080/auth/login', data);
    //       sessionStorage.setItem('token', response.data);
    //       setMsg('Usuário Autenticado');
    //     } catch (error) {
    //       setMsg(error.response.data);
    //     }

    //  onSubmit={handleSubmit(submit)} noValidate
    // }
    
    // if(msg.includes('Usuário Autenticado')){
    //   return <Navigate to='/home'/>
    // }

  return (
    <div className='LoginUser-Container'>
      <section className='LoginUser-Container-Body'>
        <h2 className='LoginUser-h2'>Login</h2>
        <form className='LoginUser-Form'>
          <div className='LoginUser-Container-Inputs'>
            <input type="email" placeholder='e-mail' className='LoginUser-Input-Email' {...register('email')}/>
            <p className='LoginUser-erro'>{errors.email?.message}</p>
            <input type="password" placeholder='senha' className='LoginUser-Input-Senha' {...register('password')}/>
            <p className='LoginUser-erro'>{errors.password?.message}</p>
            <Link to='/home' className='LoginUser-Button-Login'>Entrar</Link>
          </div>
        </form>
        <div className='LoginUser-div-cadastro'>
          <p className='LoginUser-p-cadastro'>Não possui conta?</p>
          <Link to='/register-user' className='LoginUser-link-cadastro'>Cadastrar</Link>
        </div>
      </section>
    </div>
  );
}
