import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  description: null | string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
};

const category: Category = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Banana",
  description: "",
  is_active: true,
  deleted_at: null,
  updated_at: "2024-04-27T12:00:00Z",
  created_at: "2024-04-27T10:00:00Z"
};

export const initialState = [
  category,
  { ...category, "id": "123e4567-e89b-12d3-a456-426614174001", "name": "Apples" },
  { ...category, "id": "123e4567-e89b-12d3-a456-426614174002", "name": "Pear" },
  { ...category, "id": "123e4567-e89b-12d3-a456-426614174003", "name": "Papaya" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    createCategory(state, action) {
      state.push(action.payload);
    },
    updateCategory(state, action) {
      // find index on state of category to update
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      // update category
      state[index] = action.payload;
    },
    deleteCategory(state, action) {
      // find index on state of category to update
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );
      // delete category
      state.splice(index, 1);
    },
  },
});

// Selectors
export const selectCategories = (state: RootState) => state.categories;

// Select category by id
export const selectCategoryById = (state: RootState, id: string) => {
  const category = state.categories.find(category => category.id === id);

  return category || {
    id: "",
    name: "",
    description: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: null,
  }
}

export default categoriesSlice.reducer;
export const { createCategory, updateCategory, deleteCategory } = categoriesSlice.actions;