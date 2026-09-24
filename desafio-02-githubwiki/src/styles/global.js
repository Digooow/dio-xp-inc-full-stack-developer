import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  :root {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --bg-tertiary: #21262d;
    --border-color: #30363d;
    --text-primary: #c9d1d9;
    --text-secondary: #8b949e;
    --text-muted: #484f58;
    --link-color: #58a6ff;
    --link-hover: #1f6feb;
    --success: #3fb950;
    --danger: #f85149;
    --warning: #d29922;
    --focus-ring: #58a6ff;
    
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;

    --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-family);
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  a {
    color: var(--link-color);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: var(--link-hover);
    text-decoration: underline;
  }


  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--bg-tertiary);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--border-color);
  }


  input, button, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }


  code, pre {
    font-family: var(--font-monospace);
    background-color: var(--bg-tertiary);
    border-radius: 6px;
    padding: 0.2em 0.4em;
    font-size: 0.9em;
  }
  pre {
    padding: 16px;
    overflow: auto;
  }


  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    font-weight: 600;
    letter-spacing: -0.02em;
  }


  ul, ol {
    list-style: none;
  }


  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
  }


  .card {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 16px;
    transition: border-color 0.2s;
    box-shadow: var(--shadow-card);
  }
  .card:hover {
    border-color: var(--text-muted);
  }


  .btn-primary {
    background-color: #238636;
    color: #fff;
    border: 1px solid rgba(240,246,252,0.1);
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .btn-primary:hover {
    background-color: #2ea043;
  }
  .btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }


  .input-gh {
    background-color: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 8px 12px;
    color: var(--text-primary);
    width: 100%;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .input-gh:focus {
    outline: none;
    border-color: var(--focus-ring);
    box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.3);
  }


  .loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-top-color: var(--link-color);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }


  .error-message {
    color: var(--danger);
    background-color: rgba(248, 81, 73, 0.1);
    border: 1px solid var(--danger);
    padding: 12px;
    border-radius: 6px;
    margin: 12px 0;
  }
`;

export default GlobalStyles;