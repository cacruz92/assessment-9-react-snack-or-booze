import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
    it("renders without crashing", () => {
        render(<Home />)
    });

    it("renders correct message", () => {
            expect(screen.getByText("Welcome to Silicon Valley's premier dive")).toBeInTheDocument();
    });
});