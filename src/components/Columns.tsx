
"use client"

import { ColumnDef, SortingFn } from "@tanstack/react-table"
import { Checkbox } from "./ui/checkbox";
import { ArrowUpDown } from "lucide-react"
import { Button } from "./ui/button";

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
// const sortStatusFn: SortingFn<Problem> = (rowA, rowB, _columnId) => {
//   const statusA = rowA.original.Rating
//   const statusB = rowB.original.Rating
//   return statusA - statusB
// }
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
    // id: "Rating",
    cell: ({ row }) => {
      return <div className="text-center">{Math.round(row.original.Rating).toString()}</div>
    },
    accessorKey: "Rating",
    size: 50,
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => {
              // console.log(column.getIsSorted())
              column.toggleSorting(column.getIsSorted() === "asc")
            }}
          >
            Rating
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )
    },

    // sortingFn: sortStatusFn
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
