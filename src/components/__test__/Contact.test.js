import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

it("should load contact us componets" , () =>{
    render(<Contact/>);


    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();

})


