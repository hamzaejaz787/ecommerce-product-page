import ProductImage from "../ProductImage/ProductImage";
import Product from "../Product/Product";

import imageOne from "../../assets/image-product-1.jpg";
import imageTwo from "../../assets/image-product-2.jpg";
import imageThree from "../../assets/image-product-3.jpg";
import imageFour from "../../assets/image-product-4.jpg";

import productImageThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import productImageThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import productImageThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import productImageThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

import "./main-content.css";

const MainContent = () => {
  const images = [imageOne, imageTwo, imageThree, imageFour];
  const thumbnailImages = [
    productImageThumbnail1,
    productImageThumbnail2,
    productImageThumbnail3,
    productImageThumbnail4,
  ];
  return (
    <main className="main">
      <ProductImage images={images} thumbnailImages={thumbnailImages} />
      <Product />
    </main>
  );
};

export default MainContent;
