import React, {useContext, useEffect, useState} from 'react';
import { createUser, getAllUsers, getUser, updateUser, deleteUser, loginUser } from './loginModule';
import './userComponent.less'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import {UserContext} from "../../../GlobalStates";

const UserComponent = () => {
    const [users, setUsers] = useState([]);
    const [functionality, setFunctionality] = useState("login");
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        password: '',
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const { userToken, setUserToken } = useContext(UserContext);


    useEffect(() => {
        if (userToken !== "") {

            console.log('User is logged in');

        } else {
            console.log('No token found');

        }
    }, [userToken]); // Depend on userToken so this runs whenever userToken changes


    //API Stuff
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleCreateUser = async (user) => {

        try {
            const response = await createUser(user);
            setSnackbarMessage('User Created: ' + user.name);
            console.log('User created: ', response.data);
            setSnackbarSeverity('success');
        } catch (error) {
            console.error('User Creation Error:', error);
            setSnackbarMessage('User Creation Error: '+error);
            setSnackbarSeverity('error');
        }
        setSnackbarOpen(true);
    };

    const handleGetAllUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    };

    const handleGetUser = async (id) => {
        const response = await getUser(id);
        console.log('User:', response.data);
    };

    const handleUpdateUser = async (id, updates) => {
        const response = await updateUser(id, updates);
        console.log('Updated user:', response.data);
    };

    const handleDeleteUser = async (id) => {
        const response = await deleteUser(id);
        console.log('Deleted user:', response.data);
    };

    const handleLoginUser = async (credentials) => {
        try {
            console.log(credentials);
            const response = await loginUser(credentials);
            console.log('Logged in:', response.data);
            console.log(response.data.token);
            setUserToken(response.data.token);
            setSnackbarMessage('Logged in successfully');
            setSnackbarSeverity('success');
        } catch (error) {
            console.error('Login failed:', error);
            setSnackbarMessage('Login failed');
            setSnackbarSeverity('error');
        }
        setSnackbarOpen(true);
    };

    //Snackbar Stuff
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <div className={"loginComponent"}>
            <div className={"wrapper"}>
                <form>
                    {
                        (functionality === "login") ?
                            <>
                                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                                <button type="button" onClick={() => handleLoginUser(formData)}>Login</button>
                            </>
                            :
                            <></>

                    }

                    {
                        (functionality === "create" || functionality === "admin")  ?
                            <>
                                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} />
                                <button type="button" onClick={() => handleCreateUser(formData)}>Create User</button>
                            </>
                            :
                            <></>

                    }
                </form>

                {
                    (functionality === "admin") ?
                        <>
                            <button type="button" onClick={() => handleUpdateUser(formData.id, formData)}>Update User</button>
                            <button onClick={() => handleGetUser(formData.id)}>Get User By ID</button>
                            <button onClick={() => handleDeleteUser(formData.id)}>Delete User</button>
                            <button onClick={handleGetAllUsers}>Get All Users</button>
                        </>
                        :
                        <>
                        </>
                }

                <ul>
                    {users.map((user) => (
                        <li key={user._id}>{user.name}</li>
                    ))}
                </ul>


                <div className = "setFunctionality">
                    <button onClick={() => setFunctionality("create")}>Create a New Account</button>
                    <button onClick={() => setFunctionality("login")}>Log in here</button>
                </div>


            </div>

            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>



        </div>

    );
};

export default UserComponent;