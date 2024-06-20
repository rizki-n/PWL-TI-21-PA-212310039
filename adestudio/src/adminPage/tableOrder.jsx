import React, { useState, useEffect } from "react";
import axios from "axios";

const TableOrder = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers();
    }, []);

    const getCustomers = async () => {
        const response = await axios.get("http://localhost:5000/api/customer/fetch-all");
        setCustomers(response.data);
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Paket</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={customer._id}>
                            <td>{index + 1}</td>
                            <td>{customer.username}</td>
                            <td>{customer.email}</td>
                            <td>{customer.address}</td>
                            <td>{customer.paket}</td>
                            <td>{customer.harga}</td>
                            <td>
                                <button className="btn btn-primary">Accept</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableOrder;
