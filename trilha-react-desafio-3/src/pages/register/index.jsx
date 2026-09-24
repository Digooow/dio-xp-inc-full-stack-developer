import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import api from '../../services/api';
import {
  Container,
  Title,
  Subtitle,
  Form,
  ErrorMessage,
  SuccessMessage,
  LinkLogin,
  Wrapper
} from './styles';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    if (data.password !== data.confirmPassword) {
      setError('As senhas não coincidem.');
      setLoading(false);
      return;
    }

    try {
      await api.post('/users', {
        name: data.name,
        email: data.email,
        senha: data.password
      });
      setSuccess(true);
      reset();
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Criar conta</Title>
          <Subtitle>Preencha os dados para se cadastrar</Subtitle>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Nome é obrigatório' }}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Nome completo"
                  disabled={loading}
                />
              )}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <Controller
              name="email"
              control={control}
              rules={{
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'E-mail inválido'
                }
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  placeholder="E-mail"
                  disabled={loading}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Senha é obrigatória',
                minLength: {
                  value: 6,
                  message: 'Senha deve ter pelo menos 6 caracteres'
                }
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Senha (mínimo 6 caracteres)"
                  disabled={loading}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              rules={{
                required: 'Confirmação de senha é obrigatória'
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Confirmar senha"
                  disabled={loading}
                />
              )}
            />

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage> Cadastro realizado com sucesso! Redirecionando...</SuccessMessage>}

            <Button
              title={loading ? 'Cadastrando...' : 'Cadastrar'}
              type="submit"
              disabled={loading}
              variant="secondary"
            />
          </Form>

          <LinkLogin>
            Já tem conta? <span onClick={() => navigate('/login')}>Faça login</span>
          </LinkLogin>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;