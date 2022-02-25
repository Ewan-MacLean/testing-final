import { render,screen } from "@testing-library/react";

import Textarea from "../components/textarea/textarea";

it('renders the textarea', ()=>{

    //PREPARE
    render(<Textarea/>)

    //RETRIEVE
    const inputByDisplay = screen.getByDisplayValue('type here')
    

    //TEST
    expect(inputByDisplay).toBeEnabled()
})