import React from "react";

type Props = {
  children: React.ReactNode;
};

export const HomePageContent: React.FC<Props> = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};
