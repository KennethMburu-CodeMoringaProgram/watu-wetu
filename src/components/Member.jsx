
const Member = ({ dob, dod, name, Featured_artists,Featured_artist,Genre,Artist ,Nomination ,description, showAdditional ,image, Released, Award }) => {
    return <div className="card">
        <img src={image} alt="" className="card-img-top" />

        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="card-text">
                <p className="lead">{description}</p>
                <p>{Artist}</p>
                <p>{Released}</p>
                <p>{Award}</p>
                <p>{Featured_artist}</p>
                <p>{Nomination}</p>
                <p>{Genre}</p>
                <p>{Featured_artists}</p>
                 
                <div className="d-flex justify-content-between">
                    <strong className="text-warning">{dob}</strong>
                    <strong className="text-danger">{dod}</strong>
                    {/* <button className="btn btn-success" onClick={() => showAdditional(additional)}>More Info</button> */}
                </div>
            </div>
        </div>
    </div>;
}

export default Member;