import { render,screen } from "@testing-library/react";
// same thing as fireEvent, a method to access DOM events
import userEvent from '@testing-library/user-event'
import Checkbox from '../components/checkbox/checkbox'

it('Tests to see if the state of the button changes on click', ()=>{

    //PREPARE
    render(<Checkbox/>)

    //RETRIEVE
    const checkbox = screen.getByTestId('checkbox')
    userEvent.click(checkbox)

    //TEST
    expect(checkbox).toBeChecked()
})