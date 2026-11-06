import Link from "next/link";

export default function Navbar(){

    return(
        <header className="border-b border-gray-200 bg-white">
            <nav className="mx-auto flex max-w-5xl item-center justify-between px-6 py-4">
                <Link href="/" className = "text-xl font-bold text-orange-600">
                Pixel & Plate
                </Link>

                <div className="flex gap-6 text-gray-700">
                    <Link href ="/" className="hover:text-orange-600">
                    Home
                    </Link>
                    <Link href ="/" className="hover:text-orange-600">
                    Favourites
                    </Link>
                </div>
            </nav>
        </header>
    );
    
}