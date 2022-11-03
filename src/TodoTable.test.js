import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from './TodoTable';

test('renders todotable', () => {
  const row = [
    {desc: 'Harjoittele kokeeseen', date: '3.11.2022'}
  ];
  render(<TodoTable todos={row} />);
  const tablecell = screen.getByText(/harjoittele kokeeseen/i);
  expect(tablecell).toBeInTheDocument();
});
