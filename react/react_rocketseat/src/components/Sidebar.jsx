import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
return(
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div className={styles.profile}>
           <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/148797702?v=4" alt="" />

            <strong>Jonathan Macedo</strong>
            <span>Desenvolvedor FullStack</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
    </aside>
)
}