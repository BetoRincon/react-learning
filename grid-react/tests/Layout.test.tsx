import { describe, expect, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import { LayoutFactory } from "../src/LayoutFactory";
import { categories as Categories, products as Products } from '../responses';
import { renderWithRouter } from './renderWithRouter';

import React from 'react';

describe("Layout Section", () =>{

  it("should show the title", async () => {
    renderWithRouter(<LayoutFactory />)
    const title = await screen.findByRole("heading", {
      name: new RegExp("El Menú", "i"),
    });
    expect(title).toBeInTheDocument();
  });

  // it("should show the Categories", async () => {
  //   renderWithRouter(<LayoutFactory />)
  //   const firstCategory = Categories[0];
  //   const category = await screen.findByRole("heading", {
  //     name: firstCategory.name,
  //   } );
  //   expect(category).toBeInTheDocument();
  // });

  it("should show the Products", async () => {
    renderWithRouter(<LayoutFactory />)
    const firstProduct = Products[0];
    const product = await screen.findByRole("heading", {
      name: firstProduct.name,
    } );
    expect(product).toBeInTheDocument();
  });

});