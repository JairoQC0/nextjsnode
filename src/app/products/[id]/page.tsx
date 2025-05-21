type Params = {
    params: {
        id: string;
    }
}

export async function generateStaticParams(){
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return products.map((product:any)=> {
        id: product.id.toString();
    })
}

export default async function ProductPage({params}: Params){
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await res.json();

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex fle-col md:flex-row gap-6">
                <img src={product.image} alt={product.title} className="w-full max w-sm object-contain border rounded-md shadow-md" />
                <div>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-lg font-semibold text-green-600">Precio: ${product.price}</p>
                </div>
            </div>
        </div>
    )
}