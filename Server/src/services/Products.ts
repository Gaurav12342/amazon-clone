import express from "express";
import productSchema from '../Model/Products';

export const insertProductsServices = async (data: any) => {
    try {
        const response = await productSchema.create(data);
        return response;
    } catch (error) {
        return error
    }
};
