import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom"

it("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


  const loginButton = screen.getByRole("button",{name: "login"});

  expect(loginButton).toBeInTheDocument();

});

it("should render header component with Cart items ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  
    const cartItem = screen.getByText("Cart(0)");
  
    expect(cartItem).toBeInTheDocument();
  
  });


  it("should render header component with Cart Componet ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  
    const cart = screen.getByText(/Cart/); //using Regex 
  
    expect(cart).toBeInTheDocument();
  
  });


  it("should chage login button to logout ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
  
    const loginButton = screen.getByRole("button",{name: "login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name:"logout"})
  
    expect(logoutButton).toBeInTheDocument();
  
  });