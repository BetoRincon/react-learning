import { describe, expect, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import { LayoutFactory } from "../src/LayoutFactory";
import { categories as Categories, products as Products } from '../responses';

import React from 'react';

describe("Layout Section", () =>{

  it("should show the title", async () => {
    render(<LayoutFactory />)
    const title = await screen.findByRole("heading", {
      name: new RegExp("El Menú", "i"),
    });
    expect(title).toBeInTheDocument();
  });

  it("should show the Categories", async () => {
    render(<LayoutFactory />)
    const firstCategory = Categories[0];
    const category = await screen.findByRole("heading", {
      name: firstCategory.name,
    } );
    expect(category).toBeInTheDocument();
  });

  it("should show the Products", async () => {
    render(<LayoutFactory />)
    const firstProduct = Products[0];
    const product = await screen.findByRole("heading", {
      name: firstProduct.name,
    } );
    expect(product).toBeInTheDocument();
  });

});