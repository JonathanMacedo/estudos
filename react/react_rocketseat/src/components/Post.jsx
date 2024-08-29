import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/148797702?v=4"
            alt=""
          />
          <div className={styles.authorinfo}>
            <strong>Jonathan Macedo</strong>
            <span>Desenvolvedor Full-Stack</span>
          </div>
        </div>

        <time title="29 de agosto de 2024" dateTime="2024-08-29">
          Publicado a 2 horas
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
         <Comment/>
         <Comment/>
         <Comment/>
      </div>
    </article>
  );
}
