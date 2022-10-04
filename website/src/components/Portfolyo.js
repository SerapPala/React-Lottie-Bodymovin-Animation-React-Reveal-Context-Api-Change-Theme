import React from 'react'

    const Portfolyo = () => {
        const [state] = React.useState([
        {id: 1 , image: './images/1.png', name: 'Serap Pala', expert:'Front End Developer'},
        {id: 2 , image: './images/1.png', name: 'Serap Pala', expert:'Front End Developer'},
        {id: 3 , image: './images/1.png', name: 'Serap Pala', expert:'Front End Developer'}
        ]);
    return (
        <div className="portfolyo">
            <div className="container">
                <div className="portfolyo__section">
                    <div className="row">
                        <div className="col-4">
                            <div className="portfolyo__content">
                            <h6 className="portfolyo__content-h6">Çalışanlar</h6>
                            <h3 className="portfolyo__content-h3">Takım</h3>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            {state.map(user => (
                            <div className="col-4 PL-15" key={user.id}>
                            <div className="portfolyo__card">
                                <div className="portfolyo__card-img">
                                    <img src={user.image} alt="card"></img>
                                </div>
                                <h5 className="portfolyo__card-name">{user.name}</h5>
                                <p className="portfolyo__card-expert">{user.expert}</p>
                            </div>
                         </div>
                            ))}

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolyo
