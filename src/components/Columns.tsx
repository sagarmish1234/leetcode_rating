
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
  },
  {
    accessorKey: 'Title',
    cell: ({ row }) => {
      return <div className="text-left"><strong>{row.original.Title}</strong></div>
    },
    header: "Title",
  },
  {
    accessorFn: row => Math.round(row.Rating),
    header: "Rating",
  },
  {
    id: "select",
    header: "Status",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
]
