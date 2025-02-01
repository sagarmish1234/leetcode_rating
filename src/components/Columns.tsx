
"use client"

import { ColumnDef } from "@tanstack/react-table"

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
    accessorKey: "Title",
    header: "Title",
  },
  {
    accessorKey: "Rating",
    header: "Rating",
  },
]
