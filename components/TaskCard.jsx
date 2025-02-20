import React from "react";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete-pink.png";
import editIcon from "../assets/edit-pink.png";

const TaskCard = ({
  title,
  tags,
  handleEdit,
  handleDelete,
  index,
  setActiveCard,
}) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className="both_icons">
          <div className="task_edit">
            <img
              src={editIcon}
              className="edit_icon"
              onClick={() => handleEdit(index)}
            />
          </div>
          <div className="task_delete">
            <img
              src={deleteIcon}
              className="delete_icon"
              onClick={() => handleDelete(index)}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
