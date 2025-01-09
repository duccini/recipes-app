const { createContext, useState } = require("react");

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  return (
    <RecipesContext.Provider
      value={{ recipes, setRecipes, healthyRecipes, setHealthyRecipes }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
