import Empty from '../assets/Empty task.png'
import Button from './Button'

type EmptyTask = {
 createTask: () => void
}

const EmptyTasks: React.FC<EmptyTask> = ({ createTask }) => {
 return (
  <article className='flex flex-col gap-[20px] items-center w-full md:w-[350px]'>
   <div>
    <img src={Empty} alt="empty task" />
   </div>
   <div className='flex flex-col gap-4 text-center'>
    <h3>No Tasks Yet</h3>
    <div className='flex flex-col gap-2 font-medium text-[#636363]'>
     <small>You have no task created in your workspace yet.</small>
     <small>Get productive. Create a Task Now.</small>
    </div>

    <Button variant='filled' children='Create a Task' onClick={createTask} />
   </div>
  </article>
 )
}

export default EmptyTasks