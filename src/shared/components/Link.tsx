import React from "react";
import { PropsWithChildren, ReactElement } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends PropsWithChildren {
  to: string;
  children: React.JSX.Element;
}

export default function NavigateLink({ to, children, ...props }: Props) {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(to);
  }

  return React.cloneElement(children, {
    onClick: handleOnClick,
    ...props,
  });
}
