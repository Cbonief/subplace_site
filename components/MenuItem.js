import styles from '../styles/menu_item.module.css'

export default function MenuItem(props){
    const price_string = '$' + props.price.toFixed(2);

    return (
        <div className={styles.item_container}>
            <img src={props.img} className={styles.item_photo}/>
            <div className={styles.desciption_container}>
                <h1 className={styles.item_name}>{props.name}</h1>
                <p className={styles.item_description}>{props.description}</p>
            </div>
            <div className={styles.price_container}>
                <p className={styles.item_price}>{price_string}</p>
            </div>
        </div>
    );
}