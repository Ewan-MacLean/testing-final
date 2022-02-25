import { render,screen } from "@testing-library/react";
// same thing as fireEvent, a method to access DOM events
import userEvent from '@testing-library/user-event'
import Radio from '../components/radio/radio'

it('Tests to see if the state of the radio button changes on click', ()=>{

    //PREPARE
    render(<Radio/>)

    //RETRIEVE
    const pw = screen.getByTestId('radio')
    // begin the event of typing the string 'hacker'. The script enters the input for you
    userEvent.click(pw)

    //TEST
    expect(pw).toBeChecked()
})