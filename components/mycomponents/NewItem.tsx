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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useState } from "react";


export default function newitem(){

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const urlusers=`http://localhost:8080/users`


async function saveUser() {
 
  try {
    
    const response = await axios.post(urlusers,{name:name,email:email});
    console.log(response);
    setEmail('')
    setName('')
    alert('usuário cadastrado com sucesso!')
  } catch (error) {
    console.error(error);
  }
}
  return
  (
    <div>


   
          <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
    <div className="ml-3">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
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
          <Button type="submit" onClick={saveUser}>Cadastrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog> 
  

    </div>
  )
}