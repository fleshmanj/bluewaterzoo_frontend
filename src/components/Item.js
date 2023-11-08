
const Item = ({ item }) => {
    console.log(item)
    return (
        <div className={"card"} key={item._id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="price">${item.price}.00</p>
        </div>
    )
}
export default Item;