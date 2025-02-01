
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "./ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Problem = {
  Rating: number;
  ID: number;
  Title: string;
  TitleZH: string;
  TitleSlug: string;
  ContestSlug: string;
  ProblemIndex: string;
  ContestID_en: string;
  ContestID_zh: string;
}

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "ID",
    header: "ID",
    size: 50,
  },
  {
    accessorKey: 'Title',
    cell: ({ row }) => {
      return <div className="text-left"><strong> <a href={`https://leetcode.com/problems/${row.original.TitleSlug}`}> {row.original.Title} </a></strong></div >
    },
    size: 270,
    header: "Title",
  },
  {
    cell: ({ row }) => {
      return <div className="text-left"><strong>{Math.round(row.original.Rating)}</strong></div>
    },
    size: 50,

    header: "Rating",
  },
  {
    id: "select",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex justify-start">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    size: 50,
    enableSorting: false,
    enableHiding: false,
  },
]
