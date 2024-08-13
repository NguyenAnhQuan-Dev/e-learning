import React from "react";
import {BoltIcon, BookIcon, CommentIcon, GroupIcon, OrderIcon, StorageIcon} from "@/components/icons";

export const listMenuItem: {
  id: number;
  path: string;
  icon: React.ReactNode;
  label: string;
}[] = [
  {
	id: 1,
	path: "/",
	icon: <BoltIcon className="size-5"/>,
	label: "Explore",
  },
  {
	id: 2,
	path: "/study",
	icon: <BookIcon className="size-5"/>,
	label: "Study",
  },
  {
	id: 3,
	path: "/manage/courses",
	icon: <StorageIcon className="size-5"/>,
	label: "Manage Courses",
  },
  {
	id: 4,
	path: "/manage/members",
	icon: <GroupIcon className="size-5"/>,
	label: "Manage Members",
  },
  {
	id: 5,
	path: "/manage/order",
	icon: <OrderIcon className="size-5"/>,
	label: "Manage Order",
  },
  {
	id: 6,
	path: "/manage/comments",
	icon: <CommentIcon className="size-5"/>,
	label: "Manage Comments",
  },

];
