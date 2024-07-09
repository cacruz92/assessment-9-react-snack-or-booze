import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import Menu from "./Menu";

const mockItems = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" }
  ];

describe("Menu component", () => {
    it("renders without crashing", () => {
        render(<Menu />)
    });

    it("renders correct category title", () => {
        render(<Menu category="Snacks" items={mockItems} />);
        expect(screen.getByText("Snacks Menu")).toBeInTheDocument();
      });

    it("renders list of items", () => {
        render(<Menu category="Snacks" items={mockItems} />);
        mockItems.forEach(item => {
            expect(screen.getByText(item.name)).toBeInTheDocument();
        })
    })

    it("renders differently for full menu", () => {
        render(<Menu category="Menu" items={mockItems} />);
        expect(screen.getByText("Full Menu")).toBeInTheDocument();
    });
});
