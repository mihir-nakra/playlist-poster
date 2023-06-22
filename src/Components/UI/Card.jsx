import styles from './Card.module.css'

const Card = (props) => {

        return (
        <div className={"card " + styles.customCard} onClick={() => props.onClick(props.id)}>
            <img src={props.src} className={"card-img-top " + styles.imgSize}  alt="playlist cover" />
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
