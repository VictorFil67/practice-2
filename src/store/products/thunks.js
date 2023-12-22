import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, getProducts } from "API/products";

export const getProductsThunk = createAsyncThunk('products/getProducts', ({ skip, limit, query }) =>
  getProducts(skip, limit, query)
)

export const createProductThunk = createAsyncThunk('products/create', body => addProduct(body))