"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  name: string
  email: string
  status: "pending" | "processing" | "success" | "failed"
  
}

export const columns: ColumnDef<Payment>[] = [
   {
    accessorKey: "id",
    header: "ID",
  },

  {
    accessorKey: "name",
    header: "Name",
  },
    {
    accessorKey: "email",
    header: "Email",
  },
]
