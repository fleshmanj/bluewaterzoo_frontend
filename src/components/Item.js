
const Item = ({ item }) => {
    console.log(item)
    return (
        <div className={"pet"} key={item._id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    )
}
export default Item;