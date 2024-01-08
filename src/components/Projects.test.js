import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Projects } from "./Projects";


describe ('</Projects />', () => {
    test('Renders the project component', () => {
        render(<Projects />)
    } ); 
})
