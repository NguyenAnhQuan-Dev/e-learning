"use client"

import React from 'react'
import {TMenuItemProps} from "@/types/index.d";
import Link from "next/link";
import {usePathname} from "next/navigation";


export const MenuItem = (props: TMenuItemProps) => {
  const pathName: string = usePathname()
  const isActive: boolean = pathName === props.path
  return (
	  <Link href={props.path} prefetch={true}
			className={`flex gap-2 items-center mb-3 text-lg ${isActive ? `text-primary font-bold` : `hover:text-primary hover:font-bold`}`}>
		{props.icon}
		{props.label}
	  </Link>
  )
}
