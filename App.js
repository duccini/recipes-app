import RecipesProvider from "./src/context/Recipes";
import Routes from "./src/routes";

export default function App() {
  return (
    <RecipesProvider>
      <Routes />
    </RecipesProvider>
  );
}
