import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import mockData from "../mocks/resCardMockData.json"
import "@testing-library/jest-dom"

it("should load the resCard components with the props " ,() =>{
    render(<RestaurantCard  resData = {mockData}/>
   )
  

    const resName = screen.getByText("Pizza Hut");

    expect(resName).toBeInTheDocument();
})