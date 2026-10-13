import React,{useEffect,useState} from 'react';
import Header from "./components/Header";
import Profile from "./components/Profile";
import TaskStats from "./components/TaskStats";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./Task.css";
function Task(){
    const[user,setUser]=useState({
        name:"",
        email:"",
        role:""
    });
    //task information
    const[tasks,setTasks]=useState([
        {
            id:1,
            name:"complete react task",
            priority:"high",
            completed:false
        },
        {
            id:2,
            name:"study javascript",
            priority:"medium",
            completed:true
        },
        {
            id:3,
            name:"prepare project report",
            priority:"low",
            completed:false
        }
    ]);
    //dark mode
    const[darkMode,setDarkMode]=useState(false);

    // Fetch user information when website starts
    useEffect(()=>{
        const fetchUser=async()=>{
            const userData={
                name:"Karthika",
                email:"karthikavaratharajan617@gmail.com",
                role:"student"
            };
            setUser(userData);
        }
        fetchUser();
    }, []);

    //add new task
    const addTask=(taskName,priority)=>{
        if(taskName.trim()=== ""){
            alert("please enter a task name");
            return;
        }
        const newTask={
            id:Date.now(),
            name:taskName,
            priority:priority,
            completed:false
        };
        setTasks([...tasks,newTask]);
    };

    //delete task
     const deleteTask=(id)=>{
        const updatedTasks=tasks.filter((task)=>{
            return task.id!==id;
        });
        setTasks(updatedTasks);
     };

     //completed task
     const completeTask=(id)=>{
        const updatedTasks=tasks.map((task)=>{
            if(task.id===id){
                return {
                    ...task,
                    completed:!task.completed
                };
            }
            else{
                return task;
            }
        });
        setTasks(updatedTasks);
     };

     //task counts
     const totalTasks = tasks.length;
    const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

     const pendingTasks=tasks.filter((task)=>
        !task.completed).length;
     return(
        <div className={darkMode ? "app dark" : "app"}>
            <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            />
            <main className="container">
             {/*profile*/}
                  <Profile user={user}/>
            {/* Task Statistics */}
                <TaskStats
                totalTasks={totalTasks}
                completedTasks={completedTasks}
                 pendingTasks={pendingTasks}/>
            {/* Add Task */}
                <AddTask
                addTask={addTask}/>
            {/* Task List */}
              <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              completeTask={completeTask}
        />
            </main>

            <footer>
                <p>TaskFlow © 2026 | Built with React.js</p>
            </footer>

        </div>
     )
}
export default Task;

