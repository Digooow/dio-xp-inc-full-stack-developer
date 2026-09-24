import { useState } from 'react';
import api from '../services/api';
import Input from '../components/Input';
import Button from '../components/Button';
import CardRepo from '../components/CardRepo';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #f0f6fc, #58a6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SearchBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  input {
    flex: 1;
    min-width: 200px;
    max-width: 500px;
  }
`;

const RepoList = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function App() {
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/users/${username}/repos`);
      setRepositories(response.data);
    } catch (err) {
      setError('Usuário não encontrado ou erro na requisição.');
      setRepositories([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <Container>
      <Header>
        <h1>📚 GitHub Wiki</h1>
        <SearchBox>
          <Input
            type="text"
            placeholder="Digite o nome do usuário (ex: facebook)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button onClick={handleSearch} disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </SearchBox>
      </Header>

      {error && <div className="error-message">{error}</div>}

      <RepoList>
        {repositories.map((repo) => (
          <CardRepo key={repo.id} repo={repo} />
        ))}
      </RepoList>

      {!loading && repositories.length === 0 && !error && (
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: 40 }}>
          Nenhum repositório encontrado. Faça uma busca acima.
        </p>
      )}
    </Container>
  );
}

export default App;