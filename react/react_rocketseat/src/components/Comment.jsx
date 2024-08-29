import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/2232217?s=200&v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jonathan Macedo</strong>
              <time title="28 de agosto as 19:00h" dateTime="2024-08-29">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom!</p>
        </div>
        <footer>
            <button className={styles.button}>
                <ThumbsUp size={20}/>
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
