import { render } from '@testing-library/react'
import App from './App'

test('renders App', () => {
  const app = render(<App />)
  expect(app).toBeTruthy()
})
