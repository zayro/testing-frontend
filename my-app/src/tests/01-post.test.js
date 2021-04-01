//import React from 'react';

import { render, screen, React, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { unmountComponentAtNode } from "react-dom";
import userEvent from "@testing-library/user-event";


import Posts from "../components/Post";

let container = null;

beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const postsFake = [
  {
    id: 1,
    title: "My post",
    content: "lorem ipsum",
  },
];

describe("Test Component", () => {
  describe("When user fills in and submits form", () => {
    it("should list posts", async () => {
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(postsFake),
        })
      );

      // Usa la versión asíncrona de act para aplicar promesas resueltas
      await act(async () => {
        render(<Posts />, container);
      });

      const element = screen.queryByText(/By: Marlon Zayro/i);
      const search = screen.queryByText(/My post/i);
      const searchFail = screen.queryByText(/Fail/i);

      expect(element).toBeInTheDocument();
      expect(search).toBeInTheDocument();
      expect(searchFail).not.toBeInTheDocument();

      // elimina la simulación para asegurar que las pruebas estén completamente aisladas
      global.fetch.mockRestore();
    });
  });

  describe("when user submits a new post", () => {
    it("should list new post", async () => {
      jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [],
      });

      render(<Posts />);

      const newPost = {
        id: 2,
        title: "Create new post",
        content: "An interesting block of text",
      };

      jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          ...newPost,
        }),
      });

      const titleInput = screen.getByLabelText(/title/i);
      userEvent.type(titleInput, newPost.title);

      const contentInput = screen.getByLabelText(/content/i);
      userEvent.type(contentInput, newPost.content);

      const button = screen.getByRole("button", {
        name: /submit/i,
      });
      userEvent.click(button);

      console.log("************ newPost.title ******************");
      console.log(newPost.title);

      const createdPost = await screen.findByRole("heading", {
        name: newPost.title,
      });
      expect(createdPost).toBeInTheDocument();
    });
  });

  


});
