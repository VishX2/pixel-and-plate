import Image from "next/image"
import Link from "next/link"

export default function RecipeCard({recipe}){
    return(
        <Link
        href={`/recipes/${recipe.slug}`}
        className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow:md">
            <div className="relative h-48 w-full">
                <Image 
                src={recipe.image}
                alt={recipe.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"/>
            </div>
            <div className="p-5">
                <span className ="text-xs font-semibold uppercase text-orange-600">
                    {recipe.category}
                </span>

                <h2 className="mt-1 text-lg font-bold">{recipe.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{recipe.description}</p>
                <p className="mt-2 text-sm text-gray-500">⏱ {recipe.time}</p>

            </div>
            
        </Link>
    );
}