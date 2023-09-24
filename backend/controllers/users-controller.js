const uuid = require('uuid');

const HttpError = require('../models/http-error');

let DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Max',
        email: 'test@test.com',
        password: 'test'
    }
];

const getUsers = (req, res, next) => {
    const userId = req.params.uid;
    const users = DUMMY_USERS;

    if (!users.length) {
        return next(new HttpError('No users found.', 404));
    }

    res.json({ users });
};

const signup = (req, res, next) => {
    const { name, email, password } = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if (hasUser) {
        return next(new HttpError('Email already exists!', 422));
    }
    const createdUser = {
        id: uuid.v4(),
        name,
        email,
        password
    };

    DUMMY_USERS.push(createdUser);
    res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
    const { email, password } = req.body;
    
    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        return next(new HttpError('Could not identify user!', 401));
    }

    res.json({ message: 'Logged in!' });
};

exports.getUsers = getUsers
exports.signup = signup;
exports.login = login;

