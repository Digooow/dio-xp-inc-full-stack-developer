import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormData } from '../../validations/registerSchema';
import Input from '../../components/input';
import Button from '../../components/button';
import * as S from './styles';



const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      terms: false,
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      console.log('Dados enviados:', data);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <S.Container>
      <h2>Criar conta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome completo"
          type="text"
          placeholder="Digite seu nome"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="E-mail"
          type="email"
          placeholder="exemplo@email.com"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Mínimo 6 caracteres"
          {...register('password')}
          error={errors.password?.message}
        />
        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Digite novamente"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
        <Input
          label="Data de nascimento"
          type="date"
          {...register('birthDate')}
          error={errors.birthDate?.message}
        />
        <S.TermsContainer>
          <label>
            <input type="checkbox" {...register('terms')} />
            Aceito os termos e condições
          </label>
          {errors.terms && <S.ErrorText>{errors.terms.message}</S.ErrorText>}
        </S.TermsContainer>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </form>
    </S.Container>
  );
};

export default Register;  