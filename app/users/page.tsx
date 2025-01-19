import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import axios, { Axios } from "axios"



async function getUser() {
  try {
    const response = await axios.get('http://localhost:8080/users');
    console.log(response);
    return response.data
  } catch (error) {
    console.error(error);
  }
}




async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  return [
    {
      id: "728ed52f",
      email:"email" ,
      name: "name",
      status: "pending",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()
  const dataUser=await getUser()
  
  return (

    <div  className="container mx-auto py-10">
     <DataTable columns={columns} data={dataUser} />
      
     
      
    </div>
   
  )
}
