import { Request, Response } from "express";
import { addCategoryService } from "../services/Category";

export const addCategory = (req: Request, res: Response) => {
  const obj = req.body;

  if (req.body) {
    addCategoryService(obj)
      .then((response: any) => {
        if (response) {
          res.status(201).json({
            statusCode: 201,
            message: "Category added successfully.",
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
  }
};
