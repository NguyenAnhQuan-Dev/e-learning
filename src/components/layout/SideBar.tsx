import { listMenuItem } from "@/constant";
import Link from "next/link";
import React from "react";
import { MenuItem } from "../common/MenuItem";

export const SideBar = () => {
  return (
    <div className="h-screen p-5 bg-slate-50">
      <Link
        href="/"
        scroll={true}
        prefetch={true}
        className="text-2xl text-center font-bold block w-full"
      >
        <span className="text-primary">E</span>-learning
      </Link>
      <ul className="py-4">
        {listMenuItem.map((item) => (
          <MenuItem
            key={item.id}
            path={item.path}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </div>
  );
};
