import { render, screen } from '@testing-library/react'
import { Main } from 'containers'

test('renders input for insert text', () => {
  render(<Main />)
  const element = screen.getByText(/Insert text/i)
  expect(element).toBeInTheDocument()
})
