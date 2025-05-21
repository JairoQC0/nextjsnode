export default async function ProductsPage() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return(
        <div className="p-6">
            <h1 className="text-2xl font-bold">Productos</h1>
            <ul className="mt-4 space-y-2">
                {products.map((product: any)=>(
                    <li key={product.id}>
                        <a href={`/products/${product.id}`} className="text-blue-600 underline">
                        {product.title}
                        </a>
                        </li>
                ))}
            </ul>
        </div>
    );
}