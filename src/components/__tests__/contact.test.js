import {render, screen} from "@testing-library/react"
import Contact from "../contact";
import "@testing-library/jest-dom";

test("should load contatc information ",()=>{
    render(<Contact />)

    const heading= screen.getByRole("heading");

    expect(heading).toBeInTheDocument();

})