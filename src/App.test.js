import { render, screen } from '@testing-library/react';
import App from './App';

test('deve renderizar todos os componentes principais da página de login', async () => {
  render(<App />);
  const linkElement = screen.getByText(/acessar/i);
  const inputEmail = screen.getByTitle("email");
  const inputPassword = screen.getByTitle("password");

  expect(linkElement).toBeInTheDocument();
  expect(inputEmail).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
});
