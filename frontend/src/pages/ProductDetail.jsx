

// import { useState, useEffect } from "react";
// import { useParams, Navigate } from "react-router-dom";
// import { getProductBySlug } from "../api/productApi";
// import ProductDetailHero from "../components/products/ProductDetailHero";
// import ProductDetailInfo from "../components/products/ProductDetailInfo";
// import RelatedProducts from "../components/products/RelatedProducts";
// import ContactCTA from "../components/home/ContactCTA";

// const ProductDetail = () => {
//   const { slug } = useParams();
//   const [product, setProduct] = useState(null);
//   const [notFound, setNotFound] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true);
//       setNotFound(false);
//       try {
//         const { data } = await getProductBySlug(slug);
//         setProduct(data.product);
//       } catch (error) {
//         setNotFound(true);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#faf8f2]">
//         <div className="w-10 h-10 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
//       </div>
//     );
//   }

//   if (notFound) {
//     return <Navigate to="/products" replace />;
//   }

//   return (
//     <>
//       <ProductDetailHero product={product} />
//       <ProductDetailInfo product={product} />
//       <RelatedProducts currentSlug={slug} />
//       <ContactCTA />
//     </>
//   );
// };

// export default ProductDetail;



import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProductBySlug } from "../api/productApi";
import ProductDetailHero from "../components/products/ProductDetailHero";
import ProductDetailInfo from "../components/products/ProductDetailInfo";
import RelatedProducts from "../components/products/RelatedProducts";
import ContactCTA from "../components/home/ContactCTA";

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setNotFound(false);
      try {
        const { data } = await getProductBySlug(slug);
        setProduct(data.product);
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f2]">
        <div className="w-10 h-10 border-4 border-green-800 border-t-amber-400 rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      <ProductDetailHero product={product} />
      <ProductDetailInfo product={product} />
      <RelatedProducts currentSlug={slug} />
      <ContactCTA />
    </>
  );
};

export default ProductDetail;