import React from "react";

export interface ButtonProps extends React.PropsWithChildren {
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}

export default Button;