import PropTypes from 'prop-types'
const ListingItem = (props) => {
    const {url, img, title, currencyCode, price, quantity} = props

    let formatCode = currencyCode
    if (currencyCode === 'USD') formatCode = '$'
    if (currencyCode === 'EUR') formatCode = '€'
    formatCode += ` ${price}`
    
    let formatTitle = title.length > 50 ? title.slice(0, 50).concat('...') : title
     
    let formatQuantity = quantity + ' left'

    let quantityClassName = 'level-medium'
    if (quantity <= 10) quantityClassName = 'level-low'
    if (quantity > 20) quantityClassName = 'level-high'

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={img.url_570xN} alt="icon"/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{formatTitle}</p>
                <p className="item-price">{formatCode}</p>
                <p className={`item-quantity ${quantityClassName}`}>{formatQuantity}</p>
            </div>
        </div>
    )
}

ListingItem.defaultProps = {
    url: '',
    img: '',
    title: '',
    currencyCode: 'GBP',
    price: '',
    quantity: 0,
}

ListingItem.propTypes = {
    url:PropTypes.string,
    img:PropTypes.string,
    title:PropTypes.string,
    currencyCode:PropTypes.string,
    price:PropTypes.string,
    quantity:PropTypes.number,
}
export default ListingItem