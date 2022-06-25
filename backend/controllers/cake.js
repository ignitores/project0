import express from "express";
import {Cakes} from "../models/Cake.js";
// temporary function 1 (for test)
export const testFunction1 = async (req, res) => {
    try {
        res.status(200).send("Working Fine Welcome ignitores Testing Function 1");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// temporary function 2 (for test)
export const testFunction2 = async (req, res) => {
    try {
        res.status(200).send("Working Fine Welcome ignitores Testing Function 2");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const newCake = async (req,res) => {
    try{
        let cake = new Cakes(req.body);
        cake = await cake.save();
        res.status(200).json({
            status: 200,
            data: cake,
        });
    } catch (err) {
        res.status(400).json({
          status: 400,
          message: err.message,
        });
    }
}