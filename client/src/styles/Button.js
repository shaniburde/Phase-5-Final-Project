import styled from "styled-components";

const COLORS = {
  primary: {
    "--main": "pink",
    "--accent": "white",
  },
  secondary: {
    "--main": "white",
    "--accent": "pink",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 8px 16px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 10%;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: #242717;
  color: white;
  transition: all .3s ease-in-out;

  &:hover {
    opacity: 0.7;
    transform: scale(0.96);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: #242717;
  border: 2px solid var(--main);
  transition: all .3s ease-in-out;

  &:hover {
    background: hsl(235deg 85% 90%);
    transform: scale(0.96);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.75);
  }
`;

export default Button;
