import styles from './DeletePopups.module.css';

const DeletePopups = ({id, b, c})=>{
    return(
        <div id={styles.deletePopup}>
            {console.log(b, c)}
            <div className={styles.popupContent}>
             <h1 className="heading">Are you sure you want to delete this user</h1>
             <p>
                <span className={styles.show1}><span className={styles.name}>ID:</span><span className={styles.value} id="id">{id}</span></span>
                <span className={styles.show1}><span className={styles.value} id="b">{b}</span></span>
                <span className={styles.show2}><span className={styles.value} id="c">{c}</span></span>
                           
             </p>
             </div>

        </div>
    )
}

export default DeletePopups;