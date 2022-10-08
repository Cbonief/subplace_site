import styles from '../styles/menu_item.module.css'

export default function MenuItem(props){
    const price_string = '$' + props.price.toFixed(2);
    const promo_price_string = '$' + (props.price*(1-(props.promo/100))).toFixed(2);
    return (
        <div className={styles.item_container}>
            <div className={styles.image_container}>    
                <img src={props.img} className={styles.item_photo} alt={props.name}/>
                {props.promo > 0 &&
                    <div className={styles.discount_container}>
                        <p>50%</p>
                    </div>
                }
            </div>
            <div className={styles.desciption_container}>
                <h1 className={styles.item_name}>{props.name}</h1>
                <p className={styles.item_description}>{props.description}</p>
            </div>
            <div className={styles.price_container} draggable={true}>
                {props.promo > 0 &&
                    <>
                        <p className={styles.item_price}><s>{price_string}</s></p>
                        <p className={styles.item_price}>{promo_price_string}</p>
                    </>
                }
                {props.promo === 0 &&
                    <p className={styles.item_price}>{price_string}</p>
                }
                
            </div>
        </div>
    );
}