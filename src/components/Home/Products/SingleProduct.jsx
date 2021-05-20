import classes from './products.module.css'

const SingleProduct = (props) => {
    const { Title, Description, Price } = props.product
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card my-3 shadow">
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Description}</p>
                    <p className="btn myBtn">${Price}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
