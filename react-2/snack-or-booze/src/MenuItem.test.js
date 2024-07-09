import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import MenuItem from "./MenuItem";

const mockItems = [
    { id: 1, name: "Item 1", recipe: "Description 1", serve: "serve 1" },
    { id: 2, name: "Item 2", recipe: "Description 2", serve: "serve 2" }
  ];

describe("MenuItem component", () => {
    it("renders without crashing", () => {
        render(<MenuItem />)
    });

    it("renders item details correctly", () => {
        const itemId = 1;
        render(
          <MemoryRouter initialEntries={[`/snacks/${itemId}`]}>
            <Route path="/snacks/:id">
              <MenuItem items={mockItems} cantFind="/snacks" />
            </Route>
          </MemoryRouter>
        );
        const selectedItem = mockItems.find(item => item.id === itemId);
        expect(screen.getByText(selectedItem.name)).toBeInTheDocument();
        expect(screen.getByText(selectedItem.recipe)).toBeInTheDocument();
        expect(screen.getByText(`Serve: ${selectedItem.serve}`)).toBeInTheDocument();
    });
});