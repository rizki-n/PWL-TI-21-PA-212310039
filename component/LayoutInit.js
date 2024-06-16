import TodoSearch from './TodoSearch';
import TodoList from './TodoList';

const LayoutInit = ({ task, deleteTask, editTask, markTask }) => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <TodoSearch/>
          <section className="">
            <div className=""></div>
          </section>
          <TodoList task={task} deleteTask={deleteTask} editTask={editTask} markTask={markTask} />
        </div>
      </div>
    </div>
  );
};

export default LayoutInit;
