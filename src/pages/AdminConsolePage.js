import React, { useState } from "react";

const AdminConsolePage = () => {
    // State hooks for each input field
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");

    // Function to handle form submission
    function handleAdminConsole(event) {
        event.preventDefault(); // Prevent the default form submit action

        // Here you would usually handle the form submission, like sending data to a server
        // For example, a POST request to add a new item to the database

        console.log("Submitted the following item:");
        console.log({ name, description, price, quantity, image });

        // Reset the form fields
        setName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setImage("");
    }

    return (
        <div className="admin-console">
            <h1>Admin Console</h1>
            <form onSubmit={handleAdminConsole}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <label htmlFor="price">Price</label>
                <input
                    type="number" // Changed to number to handle numerical input
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number" // Changed to number to handle numerical input
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AdminConsolePage;
