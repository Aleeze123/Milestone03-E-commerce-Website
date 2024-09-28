"use client";
import { Product, products } from '@/app/data/products'; 
import { useRouter, notFound } from 'next/navigation'; 
import Image from 'next/image'; 

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const router = useRouter(); 

  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => router.back()} 
        className="mb-4 text-blue-500 underline"
      >
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full">
          <Image
            src={product.image}
            alt={product.name}
            width={500} 
            height={500} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center bg-black p-4">
          <h1 className="text-2xl md:text-4xl text-white font-bold mb-2">{product.name}</h1>
          <p className="text-base md:text-lg text-gray-200 mb-2">{product.description}</p>
          <p className="text-xl md:text-3xl font-bold text-blue-600 mt-2">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
