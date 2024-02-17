import categorySchema from "../Model/Category";

export const addCategoryService = async (data: any) => {
  try {
    const response = await categorySchema.create(data);
    return response;
  } catch (error) {
    return error;
  }
};
