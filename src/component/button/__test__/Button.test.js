import { render, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Button from '../Button'

test('renders without crashing', ()=>{
  const {getByLabelText, getByText, getByTestId} = render(<Button title="simpan"/>)
  
  // const linkElement = getByText(/simpan/);
  // const inputEl = getByLabelText(/Nama aku/)
  const btnEl = getByTestId("button")

  expect(btnEl).toBeInTheDocument()
  // expect(linkElement).toBeInTheDocument();
  // expect(inputEl).toBeInTheDocument()
})

test("render button corectly", ()=>{
  const { getByTestId} = render(<Button title="add to cart"/>)
  const btnEl = getByTestId("button")
  expect(btnEl).toHaveTextContent("add to cart")
})

test("ketika button di klik maka function di props onClick di panggil", ()=>{
  const fnOnclick = jest.fn() 
  const { getByText } = render(<Button title="add to cart" onClick={fnOnclick} />)
  const btnEl = getByText(/add to cart/)
  fireEvent.click(btnEl)
  expect(fnOnclick).toHaveBeenCalled()
})