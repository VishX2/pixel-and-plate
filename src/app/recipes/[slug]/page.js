import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes } from "../../../data/recipes";

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <Link href="/" className="text-sm text-orange-600 hover:underline">
        ← Back to recipes
      </Link>

      <div className="relative mt-4 h-72 w-full overflow-hidden rounded-xl">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <span className="mt-6 block text-xs font-semibold uppercase text-orange-600">
        {recipe.category}
      </span>
      <h1 className="mt-1 text-3xl font-bold">{recipe.title}</h1>
      <p className="mt-2 text-gray-600">{recipe.description}</p>
      <p className="mt-2 text-sm text-gray-500">⏱ {recipe.time} min</p>

      <h2 className="mt-8 text-xl font-bold">Ingredients</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold">Method</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6">
        {recipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </main>
  );
}