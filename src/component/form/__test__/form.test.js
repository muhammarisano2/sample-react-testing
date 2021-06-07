import { render, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Form from '../index'

test('renders without crashing', () => {
  const {getByLabelText } = render(<Form/>)
  const inputEl = getByLabelText(/Nama/)
  expect(inputEl).toBeInTheDocument()
})

test("render form corectly", ()=>{
  const { getByLabelText, getByText, getByTestId } = render(<Form />)
  const inputEl = getByLabelText(/Nama/)
  const btnEl = getByText(/Simpan/)
  const resultEl = getByTestId("result")
  fireEvent.change(inputEl, {target:{value: 'risano'}})
  fireEvent.click(btnEl)
  expect(resultEl).toHaveTextContent("risano")
})


