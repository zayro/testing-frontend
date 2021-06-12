import { render, screen, fireEvent } from "@testing-library/react";
//import renderer from "react-test-renderer";
import App from "./App";

describe("renders learn react link", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Testing App about link", () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Testing App about Input", () => {
    document.getElementById("cajaTexto").value = "Norris";
    const lastNameInput = screen.getByDisplayValue("Norris");
    expect(lastNameInput).toBeInTheDocument();
  });

  test("Testing App about Selected", () => {
    const selectElement = screen.getByDisplayValue("State");
    expect(selectElement).toBeInTheDocument();
  });
});

describe("renders App with Property", () => {
  test("calls onClick prop when clicked", () => {
    const handleClick = jest.spyOn(console, "log");
    const wrapper = render(<App />);
    const button = wrapper.getByText(/enviar/i);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("renders App with Wrapper button", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });
  test("calls onClick prop when clicked", () => {
    const button = wrapper.getByRole("button", { name: "modificar_query" });
    fireEvent.click(button);

    const search = wrapper.getByText(/hola mundo/i);
    expect(search).toBeInTheDocument();
  });
});

describe("renders App with Wrapper button v2", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });
  test("calls onClick prop when clicked", () => {
    const button = wrapper.getByText(/modificar_query_v2/i);
    fireEvent.click(button);

    const search = wrapper.getByText(/pratech/i);
    expect(search).toBeInTheDocument();
  });
});

describe("renders App with Input", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });
  test("Typing into input", () => {
    const input = wrapper.getByLabelText(/cajaTexto/i);
    fireEvent.change(input, {
      target: { value: "Lorem ipsum" },
    });

    const search = wrapper.getByDisplayValue(/Lorem ipsum/i);
    expect(search).toBeInTheDocument();
  });
});

describe("renders App with Select", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<App />);
  });
  test("Selected into select", () => {
    const input = wrapper.getByTestId("custom-element");
    fireEvent.change(input, {
      target: { value: "AL" },
    });
    expect(input).toBeInTheDocument();

    const selectElement = wrapper.getByDisplayValue("Alabama");
    expect(selectElement).toBeInTheDocument();
  });
});
