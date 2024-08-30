

import { useDrop } from 'react-dnd';
import Card from '../card/Card';

const Column = ({ title, tasks, id, handleDelete, handleEdit, handleViewDetails, moveCard }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: (item) => {
      moveCard(item.index, 0, id, item.taskId);
    },
  });

  return (
    <div ref={drop} className="rounded-md p-3 border">
      <div className="bg-blue-400">
        <p className="px-2 p-3">{title}</p>
      </div>
      <div>
      
        {tasks?.map((task, index) => (
          <div className="my-3" key={task._id} >
            <Card
              title={task.taskTitle}
              description={task.taskDescription}
              date={task.createdAt}
              taskId={task._id}
              index={index}
              onDelete={() => handleDelete(task._id)}
              onEdit={() => handleEdit(task._id)}
              onViewDetails={() => handleViewDetails(task._id)}
              moveCard={(dragIndex, hoverIndex) => moveCard(dragIndex, hoverIndex, id, task._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;
