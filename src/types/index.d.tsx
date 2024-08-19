import React from "react";

type TMenuItemProps = {
  key: number;
  path: string;
  icon: React.ReactNode;
  label: string;
};

type TCourseItem = {
  id: number;
  urlImg: string;
  title: string;
  rating: string;
  view: string;
  price: string;
};

export type { TMenuItemProps, TCourseItem };
