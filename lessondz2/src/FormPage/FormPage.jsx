import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormPage.css"

const FormPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const handleDelete = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    const clearTable = () => {
        setUsers([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input
                        {...register("name", { required: "Обьязательно" })}
                        placeholder="name"
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div>
                    <label>Username:</label>
                    <input
                        {...register("username", { required: "Обьязательно" })}
                        placeholder= "username"
                    />
                    {errors.username && <p className="error">{errors.username.message}</p>}
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register("email", { required: "Обьязательно" })}
                        placeholder="email"
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        {...register("phone", { required: "Обьязательно" })}
                        placeholder="phone"
                    />
                    {errors.phone && <p className="error">{errors.phone.message}</p>}
                </div>

                <div>
                    <label>Website:</label>
                    <input
                        {...register("website")}
                        placeholder="Enter website (optional)"
                    />
                </div>

                <div className="buttons">
                    <button type="submit">Создать</button>
                    <button type="button" onClick={clearTable}>
                        Очистить таблицу
                    </button>
                </div>
            </form>

            <div>
                {users.length > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website || "N/A"}</td>
                                <td>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Таблица пуста</p>
                )}
            </div>
        </div>
    );
};

export default FormPage;
