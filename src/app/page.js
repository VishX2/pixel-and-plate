import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";

export default function Home(){
  console.log("Home page rendered on the server");
  return(
    <main className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="text-3xl font-bold">English Classics</h1>
      <p className="mt-2 text-gray-600">Comfort food from across England.</p>

      <dv className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe)=>{
          <RecipeCard key ={recipe.slug} recipe={recipes}/>
        })}
      </dv>
    </main>
  );
}