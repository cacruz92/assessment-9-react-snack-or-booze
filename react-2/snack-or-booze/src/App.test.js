import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import App from "./App";

describe("App component", () => {
    it("renders without crashing", () => {
        render(<App />)
    });

    it("renders loading initially", async() => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText("Loading")).toBeInTheDocument();
        })
        
    });

    it("renders homepage after loading", async () => {
        render(<App />);
        await waitFor(() => {
            expect(screen.getByText("Welcome to Silicon Valley's premier dive")).toBeInTheDocument();
        })
    });
});