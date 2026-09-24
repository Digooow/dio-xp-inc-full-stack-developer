import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '../../components/input';
import Button from '../../components/button';
import * as S from './styles';


const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      console.log('Login enviado:', data);
      alert('Login realizado com sucesso! (simulado)');
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <S.Container>
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          {...register('password')}
          error={errors.password?.message}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
        <S.Links>
          <a href="/register">Criar conta</a>
          <a href="#">Esqueci a senha</a>
        </S.Links>
      </form>
    </S.Container>
  );
};

export default Login;