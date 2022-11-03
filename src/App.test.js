import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('add todo', () => {
  render(<App />);
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Harjoittele kokeeseen'}});
  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '3.11.2022'}});
  const button = screen.getByText('Add');
  fireEvent.click(button);
  const tablecell = screen.getByText(/harjoittele kokeeseen/i);
  expect(tablecell).toBeInTheDocument();
});

test('clear todos', () => {
  render(<App />);
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Harjoittele kokeeseen'}});
  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '3.11.2022'}});
  const button = screen.getByText('Clear');
  fireEvent.click(button);
  const tablecell = screen.queryByText(/harjoittele kokeeseen/i);
  expect(tablecell).not.toBeInTheDocument();
});

