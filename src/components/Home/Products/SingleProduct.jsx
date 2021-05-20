import classes from './products.module.css'

const SingleProduct = (props) => {
    const { Title, Description, Price } = props.product
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card my-3 shadow" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}</p>
                    <button className="btn btn-secondary">${Price}</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
