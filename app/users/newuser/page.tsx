// To inform next js, this is a client component
"use client";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useState } from "react";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label"


 import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import  Link  from "next/link";

import { SnackbarProvider, enqueueSnackbar } from 'notistack'

export default function Home() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const urlusers = "http://localhost:8080/api/users";


  


const userSchema = z.object({
  name: z.string().max(10, { message: "o usuário deve ter no máximo 10 caracteres" }),
  email: z.string().email({ message: "formato de email inválido" }),
});

const [loading, setLoading] = useState(false);

async function saveUser() {
  setLoading(true);
  try {
    userSchema.parse({ name, email });
    const response = await axios.post(urlusers, { name, email });
    console.log(response);
    setEmail('');
    setName('');

    const message = 'Usuário cadastrado com sucesso!'
    enqueueSnackbar(message,{autoHideDuration:1000})
  } catch (error) {
    if (error instanceof z.ZodError) {
      alert(error.errors[0].message);
    } else {
      console.error(error);
    }
  } finally {
    setLoading(false);
  }
}



  return (
   

    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
                   <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Menu</MenubarTrigger>

    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Novo Usuário</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem><Link href="./users">Usuarios</Link></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>


      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10  m-20   ">
  <path fillRule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>

<div className="flex flex-col gap-8 row-auto  min-h-screen ">



      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
    <div className="ml-3">
     
    </div>
    
          Novo Usuário</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo Usuário</DialogTitle>
          <DialogDescription>
            Formulário de cadastro de novos usuários no sistema.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input 
            id="name" 
            className="col-span-3" 
            value={name}
         onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              E-mail
            </Label>
            <Input 
            id="username"
            className="col-span-3"
            value={email}
            onChange={(e)=>setEmail(e.target.value) } />
          </div>
        </div>
        <DialogFooter>
          
          <Button type="submit" onClick={saveUser} disabled={loading}>
            
  {loading ? "Cadastrando..." : "Cadastrar"}
</Button>

        </DialogFooter>
      </DialogContent>
    </Dialog> 
    <SnackbarProvider />
</div>
        
      </main>
   
    </div>
  );
}
