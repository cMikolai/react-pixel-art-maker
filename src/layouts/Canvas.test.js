import { render, screen } from '@testing-library/react'
import Canvas from './Canvas'

test('has a title called canvas', () => {
  render(<Canvas />)
  const hasTitle = screen.getByText(/Canvas/i)
  expect(hasTitle).toBeInTheDocument()
})
