import express, { Request, Response } from "express";
import { insertProductsServices } from "../services/Products";

export const addProducts = (req: Request, res: Response) => {
  const obj = req.body;

  insertProductsServices(obj)
    .then((response: any) => {
      if (response) {
        res.status(201).json({
          statusCode: 201,
          message: "Product added successfully.",
          data: response,
        });
      }
    })
    .catch((error: any) => {
      res.status(500).json({
        statusCode: 500,
        error: error,
      });
    });
};
