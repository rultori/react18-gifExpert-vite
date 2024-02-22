import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";
screen

describe("prueba del componente <GifGridItem />", () => {

   const title='Saitama';
   const url='https://one-punch.com/saitama.jpg';

   test("debe hacer match con el snapshot ", () => {

      const { container } = render(<GifGridItem title={ title } url={ url } />)

      expect( container ).toMatchSnapshot();
   });

   test('debe de mostrar la imagen con URL y ALT indicado', () => {

      render(<GifGridItem title={ title } url={ url } />);
      screen.debug();
      // expect( screen.getByRole('img').scr ).toBe( url );      
      const { src, alt } = screen.getByRole("img");
      expect( src ).toBe( url );
      expect( alt ).toBe( alt );     
   });

   test('debe de mostrar el titulo en el componente', () => {

      render(<GifGridItem title={ title } url={ url } />);
      expect( screen.getAllByText( title )).toBeTruthy();     
     
   })
   
   
   
});
