import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import CantFind from "./CantFind";

describe("CantFind component", () => {
    it("renders without crashing", () => {
        render(<CantFind />)
    });

    it("renders proper message", () => {
        render(<CantFind />);
        expect(screen.getByText("Hmmm. I can't seem to find what you want.")).toBeInTheDocument();        
    });

});