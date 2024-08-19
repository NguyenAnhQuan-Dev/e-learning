import React from "react";

const LayoutCourses = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-3 gap-5">{children}</div>;
};

export default LayoutCourses;
