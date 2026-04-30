

const Card = ({children, title, text, url}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            {children}
        <div className ="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href={url} className="btn btn-primary">
                Go Somewhere
            </a>
            </div>
        </div>
    );
};

export default Card;