import { doc, updateDoc } from "firebase/firestore";
import { toCountTime } from "../../utils/utils";
import { useTaskCommentsStyles } from "./TaskComments.styles";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../firebase";

function TaskComments({ comments, setUpdate, update }) {
  const styles = useTaskCommentsStyles();

  const onDeleteCommentClick = (comment, index, array) => {
    const arr = array.filter((item) => array.indexOf(item) !== index);
    updateDoc(doc(db, "tasks", comment.taskId), {
      comments: [...arr],
    });
    setUpdate(!update);
  };

  return comments?.length ? (
    <div className={styles.comments} key={uuidv4()}>
      <div style={{ background: "#535353FF", padding: "10px" }}>Comments</div>
      {comments.map((comment, index, array) => (
        <div key={uuidv4()} className={styles.commentValue}>
          <p>{comment.commentValue}</p>
          <p>{toCountTime(comment.time)}</p>
          <button
            className={styles.deleteComment}
            onClick={() => onDeleteCommentClick(comment, index, array)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  ) : null;
}
export default TaskComments;
