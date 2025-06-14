import { AlertTriangle } from "lucide-react";
import { useState } from "react"

function AddTasks({onAddTaskSubmit}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-slate-950 rounded-md shadow flex flex-col">
            <input type="text" placeholder="Digite o titulo da tarefa" className="border border-slate-white outline-slate-100 px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)}/>
            <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-white outline-slate-100 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)}/>
            <button onClick={() => {
                if(!title.trim() || !description.trim()){
                    return alert("Preencha o titulo e a descricao da tarefa.");   
                }

                onAddTaskSubmit(title,description)
                setTitle("");
                setDescription("");
                
            }} className="bg-slate-800 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
        </div>
    )
}

export default AddTasks