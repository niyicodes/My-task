import Button from "../Components/Button"
import { useState } from 'react'
import EmptyTasks from "../Components/EmptyTasks"
import Task from "../Components/Task";
import CreateTask from "../Components/Modals/CreateTask";

const Tasks = () => {
  const [tasks, setTasks] = useState<any[]>(
    [
      { id: '1', title: 'Create a Design System for Enum Workspace.', name: 'goat', status: 'pending' },
      { id: '1', title: 'Create a Design System for Enum Workspace.', name: 'goat', status: 'in-progress' },
      { id: '1', title: 'Create a Design System for Enum Workspace.', name: 'goat', status: 'pending' },
      { id: '1', title: 'Create a Design System for Enum Workspace.', name: 'goat', status: 'in-progress' },
      { id: '1', title: 'Create a Design System for Enum Workspace.', name: 'goat', status: 'completed' },
      { id: '1', title: 'Create a Design System for Enum Workspace.', name: 'goat', status: 'pending' },
      { id: '1', title: 'Create a Design System for Enum Workspace.', name: 'goat', status: 'completed' },
    ]
  );
  const [isCreatingTask, setIsCreatingTask] = useState<boolean>(false)

  const openModal = () => setIsCreatingTask(true);
  const closeModal = () => setIsCreatingTask(false);

  const [activeTab, setActiveTab] = useState<string>('all');

  const Tabs = [
    { id: 'all', label: 'All Tasks' },
    { id: 'pending', label: 'Pending' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const getTaskCount = (status: string) => {
    return tasks.filter(task => status === 'all' || task.status === status).length;
  };

  const filteredTasks = tasks.filter(task => activeTab === 'all' || task.status === activeTab);

  return (
    <section>

      <div className="flex justify-between">
        <article>
          <h1 className="text-[35px] font-extrabold text-[#101C56]">Tasks</h1>
          <small className="text-[20px] text-[#636363]">Your created tasks</small>
        </article>
        {tasks.length > 0 && <div><Button children='Create Task' variant="filled" onClick={openModal} /></div>}
      </div>
      {/* the created task area */}
      <div>
        {
          tasks.length < 1 ?
            (
              <div className="flex justify-center items-center h-[50vh]">
                <EmptyTasks createTask={openModal} />
              </div>
            )
            :
            (
              <section className="mt-[35px]">
                {/* tab area */}
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {Tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${activeTab === tab.id
                        ? 'bg-cerulean-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                      {tab.label} ({getTaskCount(tab.id)})
                    </button>
                  ))}
                </div>

                {/* tasks area */}
                <div className="gap-4 mt-4">
                  {filteredTasks.length === 0 ? (
                    <div className="flex justify-center items-center h-1/2 text-gray-600">
                      {activeTab === 'pending' && <p>No pending tasks at the moment.</p>}
                      {activeTab === 'in-progress' && <p>No tasks are currently in progress.</p>}
                      {activeTab === 'completed' && <p>No tasks have been completed yet.</p>}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-4">
                      {filteredTasks.map((task, index) => (
                        <Task
                          key={index}
                          index={index + 1}
                          status={task.status}
                          title={task.title}
                          onViewTask={() => alert(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )
        }
      </div>
      {isCreatingTask && <CreateTask onClose={closeModal} />}
    </section>
  )
}

export default Tasks