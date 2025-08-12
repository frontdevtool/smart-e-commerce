// store/useItemStore.js
import { products } from '@/data/products'
import { create } from 'zustand'

const store = create((set) => ({
  items: [],

//   addItemToCart: (item) =>
//     set((state) => ({items: [...state.items, item],  })),
      
  

addItemToCart: (item) =>
  set((state) => {
    // التحقق إذا كان العنصر موجود بالفعل
    const exists = state.items.find((i) => i.id === item.id);
    console.log('exists: ', exists);

    // إذا موجود نرجّع نفس الحالة بدون تعديل
    if (exists) {
      return state;
    }

    // إذا مش موجود نضيفه
    return {
      items: [...state.items, item],
    };
  }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  updateItem: (id, updatedData) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      ),
    })),
}))

export default store
