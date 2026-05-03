const Card = (props) => {

    const imageStyle = {
        height: "300px",
        objectFit: "cover",
        width: "100%"
    };

    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 text-center">
                <img 
                    className="card-img-top" 
                    src={props.imageUrl} 
                    alt="Card cap" 
                    style={imageStyle} 
                />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <a href={props.buttonUrl} className="btn btn-primary">
                        {props.buttonLabel}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;