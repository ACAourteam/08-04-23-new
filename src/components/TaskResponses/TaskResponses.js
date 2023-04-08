import { toCountTime } from "../../utils/utils";
import { useTaskResponsesStyles } from "./TaskResponses.styles";
import telephone from "../../assets/images/telephone.png";
import { v4 as uuidv4 } from "uuid";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function TaskResponses({ responses, setUpdate, update }) {
  const styles = useTaskResponsesStyles();

  const onDeleteResponseClick = (response, index, array) => {
    const arr = array.filter((item) => array.indexOf(item) !== index);
    updateDoc(doc(db, "tasks", response.taskId), {
      responses: [...arr],
    });
    setUpdate(!update);
  };

  return responses.length ? (
    <div className={styles.responses}>
      <div style={{ background: "#535353FF", padding: "10px" }}>Responses</div>
      {responses.map((response, index, array) => (
        <div key={uuidv4()} className={styles.responseValue}>
          <p> Hello I'm {response.nameSurname}</p>

          <p>{response.aboutPerson}</p>
          <p
            style={{
              background: "#6E4700FF",
              borderRadius: 10,
            }}
          >
            I suggest - {response.suggest}
          </p>
          <p>{response.email}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={telephone}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />
              <p>{response.contactNumber}</p>
            </div>
            <p>
              {toCountTime(response.time)}
              <button
                className={styles.deleteResponse}
                onClick={() => onDeleteResponseClick(response, index, array)}
              >
                x
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default TaskResponses;
