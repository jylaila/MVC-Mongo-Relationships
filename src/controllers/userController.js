var User = require('../models/userModel');

exports.getUser = async function (req, res) {
/*
            #swagger.tags = ['Users']
            #swagger.summary = 'Get users'
            #swagger.description = 'This endpoint will get all users'

            #swagger.security = [{
                "bearerAuth": []
            }] 
        */
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res) {
    try {
        let user = new User(
            {
                name: req.body.name,
                age: req.body.age
            }
        );
        user.save();
        res.status(201).send(user.toJSON())
    } catch {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` })
    }
};

exports.details = async function (req, res) {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.update = async function (req, res) {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, { name: req.body.name, age: req.body.age });
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.delete = async function (req, res) {
    try {
        const result = await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Delete with success!")
    } catch (err) {
        res.status(500).json(err);
    }
};