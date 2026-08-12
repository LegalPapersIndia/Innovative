import { useParams, Navigate } from "react-router-dom";
import { getProductBySlug } from "../data/productsData";
import ProductDetailHero from "../components/products/ProductDetailHero";
import ProductDetailInfo from "../components/products/ProductDetailInfo";
import RelatedProducts from "../components/products/RelatedProducts";
import ContactCTA from "../components/home/ContactCTA";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
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