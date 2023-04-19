import { describe, expect, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import { LayoutFactory } from "../src/LayoutFactory";
import React from 'react';

describe("Layout Section", () =>{
  render(<LayoutFactory />)

  it("should render", async () => {
    const title = await screen.findByRole("heading", {
      name: new RegExp("El Menú", "i"),
    });
    expect(title).toBeInTheDocument();
  });
});