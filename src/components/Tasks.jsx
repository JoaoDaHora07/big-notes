import { ChevronRightIcon, TrashIcon } from "lucide-react"

function Tasks(props){
    return(
        <ul className="space-y-4 p-6 bg-slate-950">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => props.onTaskClick(task.id)} className={`text-left p-2 w-full bg-slate-800 rounded-md ${task.isCompleted ? "line-through" : ""}`}>
                        {task.title}
                    </button> 
                    <button className="bg-slate-800 rounded-md p-2">
                        <ChevronRightIcon/> 
                    </button>
                    <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-800 rounded-md p-2">
                        <TrashIcon/> 
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks