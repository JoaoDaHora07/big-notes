import { useSearchParams } from "react-router-dom"

function TaskPage (){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return (
        <div className="p-6 h-screen w-screen bg-black text-white">
            <h1>{title}</h1>
            <h1>{description}</h1>

        </div>
    )
}

export default TaskPage