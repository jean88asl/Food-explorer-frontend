/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/auth";

const DishContext = createContext({});

const priceFormatting = (price) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(price / 100);
};

function DishProvider({ children }) {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  const orderInfo = (total, quantity, dishId, nameDish, url) => {
    const itemExist = items.find(dish => dish.id === dishId);

    if (itemExist) {
      return alert("Esse prato já está adicionado no seu pedido.");
    }

    const item = {
      id: dishId,
      total,
      nameDish,
      url,
      quantity,
      user_id: user.id
    };

    const updatedItems = [...items, item];
    setItems(updatedItems);
    localStorage.setItem("@foodexplorer:requests", JSON.stringify(updatedItems));
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("@foodexplorer:requests");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <DishContext.Provider value={{ priceFormatting, orderInfo, items }}>
      {children}
    </DishContext.Provider>
  );
}

const useDish = () => {
  return useContext(DishContext);
};

export { DishProvider, useDish };
