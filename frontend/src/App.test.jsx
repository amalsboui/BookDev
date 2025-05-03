import React from 'react';
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App"; 

describe("Bookish App", () => {
    it("renders 'Bookish' on the page", () => {
        render(<App />);
        const bookishElements = screen.getAllByText(/Bookish/i);
        expect(bookishElements.length).toBeGreaterThan(0);
      });
      
});
