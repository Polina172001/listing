import ListingItem from "./ListingItem"

const Listing = ({items}) => {
    return (
        <div className="item-list">
            {items.map((item) => (
                <ListingItem
                    key={item.listing_id}
                    url={item.url}
                    listingId={item.listing_id}
                    img={item.MainImage}
                    title={item.title}
                    currencyCode={item.currency_code}
                    price={item.price}
                    quantity={item.quantity}
                />)
            )}
        </div>
    )
}

export default Listing