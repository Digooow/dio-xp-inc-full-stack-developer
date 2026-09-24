import styled from 'styled-components';
import { FaStar, FaCodeFork, FaCircle } from 'react-icons/fa6';

const Card = styled.div`
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  transition: border-color 0.2s, transform 0.1s;
  margin-bottom: 12px;

  &:hover {
    border-color: var(--text-muted);
    transform: translateY(-2px);
  }
`;

const RepoName = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--link-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 6px 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.85rem;
  color: var(--text-secondary);

  svg {
    margin-right: 4px;
  }
`;

const LanguageDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

function CardRepo({ repo }) {
  const languageColor = repo.language
    ? {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        TypeScript: '#3178c6',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Java: '#b07219',
        Ruby: '#701516',
        Go: '#00ADD8',
        Rust: '#dea584',
        PHP: '#4F5D95',
        C: '#555555',
        'C++': '#f34b7d',
        Shell: '#89e051',
        Swift: '#ffac45',
        Kotlin: '#A97BFF',
        Dart: '#00B4AB',
        Vue: '#41b883',
        default: '#8b949e',
      }[repo.language]
    : '#8b949e';

  return (
    <Card>
      <RepoName href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </RepoName>
      {repo.description && <Description>{repo.description}</Description>}
      <Meta>
        {repo.language && (
          <LanguageDot>
            <FaCircle color={languageColor} size={12} />
            {repo.language}
          </LanguageDot>
        )}
        <span>
          <FaStar /> {repo.stargazers_count}
        </span>
        <span>
          <FaCodeFork /> {repo.forks_count}
        </span>
        {repo.license && <span>📄 {repo.license.spdx_id}</span>}
        <span>🕒 {new Date(repo.updated_at).toLocaleDateString('pt-BR')}</span>
      </Meta>
    </Card>
  );
}

export default CardRepo;