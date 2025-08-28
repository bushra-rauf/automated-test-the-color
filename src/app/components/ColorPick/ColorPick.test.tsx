import { render, screen, fireEvent } from '@testing-library/react';
import ColorPick from '.'; 

describe('testing elements, props and button functionality in ColorPick comp.', () => {
  it('renders the color heading', () => {
    render(
      <ColorPick
        color="#123456"
        colorHeading="HEX Background"
        onClick={jest.fn()}
      />
    );

    expect(
      screen.getByRole('heading', { name: /hex background/i })
    ).toBeInTheDocument();
  });

  it('renders the color value', () => {
    render(
      <ColorPick
        color="#123456"
        colorHeading="HEX Background"
        onClick={jest.fn()}
      />
    );

    expect(
      screen.getByRole('heading', { name: /#123456/i })
    ).toBeInTheDocument();
  });

  it('renders a clickable button', () => {
    render(
      <ColorPick
        color="#123456"
        colorHeading="HEX Background"
        onClick={jest.fn()}
      />
    );

    const button = screen.getByRole('link', { name: /click me!/i });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', () => {
    const handleClick = jest.fn();

    render(
      <ColorPick
        color="#abcdef"
        colorHeading="Test Color"
        onClick={handleClick}
      />
    );

    const button = screen.getByRole('link', { name: /click me!/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
 // ColorPick component renders and styles itself based on props.

 
  test ('Applies a correct color background style', () => {
    render(<ColorPick color="#ff0000" colorHeading="HEX" onClick= {()=> {}}/>)
    const container = screen.getByTestId('color-pick-container')
    expect(container).toHaveStyle({backgroundColor: "#ff0000"})
  })

  test('Applies the correct RBG background color style',() =>{
    render(<ColorPick color ="rgb(255, 255, 255)" colorHeading='RGB' onClick={()=> {}}/>)
    const container = screen.getByTestId('color-pick-container')
    expect (container).toHaveStyle({ backgroundColor:"rgb(255, 255, 255)"})
  })