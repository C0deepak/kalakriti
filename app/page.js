import Image from "next/image";
import banner1 from "@/public/img/banner1.png";
import banner2 from "@/public/img/banner2.png";
import CategoryCard from "@/components/Home/CategoryCard";
import Heading from "@/components/common/Heading";
import ProductCard from "@/components/Home/ProductCard";
import products from "@/data/products";
import ObjectiveCarousel from "@/components/Home/ObjectiveCarousel";
import uniqueFeatures from "@/data/unique";
import UniqueCard from "@/components/Home/UniqueCard";
import { Search, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="font-raleway">
      <div className="w-full mb-12 md:mb-16">
        <Image
          src={banner1}
          alt="Kalakriti a Handicraft in Andaman"
          className="w-full h-72 md:h-auto object-cover"
        />
      </div>

      <div className="px-4 py-12 md:py-16 md:px-16 flex flex-col gap-8 md:gap-12">
        <Heading
          subheading="top categories"
          heading="Most Popular Categories"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
          <CategoryCard
            img="https://images.unsplash.com/photo-1671167051711-1fcc8ddd7d40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kalakriti Handmade Pots - Ecofriendly and Sustainable"
            title="Handmade Pots"
            text="Crafted with care, sustainable and eco-friendly"
          />

          <CategoryCard
            img="https://images.unsplash.com/photo-1706520005435-7a0edd41ef23?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kalakriti Handmade Tokeris - Traditional and Sustainable Baskets"
            title="Handmade Tokeris"
            text="Eco-friendly baskets woven with tradition"
          />

          <CategoryCard
            img="https://images.unsplash.com/photo-1527505937496-ec9bd1d25da5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kalakriti Handmade Nariyal Shell Bowls - Unique and Sustainable"
            title="Nariyal Shell Bowls"
            text="Eco-friendly bowls made from coconut shells"
          />

          <CategoryCard
            img="https://images.unsplash.com/photo-1706520005425-cdafc8720628?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kalakriti Handmade Murtis - Artistic and Sustainable"
            title="Handmade Murtis"
            text="Artistic murtis crafted with eco-friendly materials"
          />
        </div>
      </div>

      <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2">
        <img
          src="https://i.pinimg.com/736x/65/96/e2/6596e287a8ffb5b5d618709949af5615.jpg"
          alt="Kalakriti Banner3"
          className="w-full h-72 md:h-96 object-cover"
        />
        <ObjectiveCarousel />
      </div>

      <div className="px-4 py-12 md:py-16 md:px-16 flex flex-col gap-8 md:gap-12">
        <Heading
          subheading="best of collection"
          heading="From Our Trending Collection"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              alt={product.alt}
              title={product.title}
              price={product.price}
              stars={product.stars}
            />
          ))}
        </div>
      </div>

      <div className="w-full py-12 md:py-16">
        <Image
          src={banner2}
          alt="Kalakriti a Handicraft in Andaman"
          className="w-full h-72 md:h-auto object-cover"
        />
      </div>

      <div className="px-4 py-12 md:py-16 md:px-16 flex flex-col gap-8 md:gap-12">
        <Heading
          subheading="Our Uniquness"
          heading="Handcrafted with Uniqueness"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {uniqueFeatures.map((feature) => (
            <UniqueCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              para={feature.para}
            />
          ))}
        </div>
      </div>

      <div className="py-12 md:py-16">
        <div className="px-4 py-16 md:px-16 flex items-center justify-center bg-[url('/img/texture.jpg')] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center gap-8 max-w-4xl">
            <h3 className="font-taviraj font-medium text-2xl md:text-3xl text-center">
              Stay Inspired, Stay Updated
            </h3>
            <p className="text-center">
              Join our community to receive exclusive updates, sustainable
              living tips, and early access to handcrafted treasures. Be the
              first to know and celebrate creativity with us.
            </p>
            <div className="w-full flex items-center">
              <input
                type="text"
                className="border-none outline-none w-full px-8 py-4"
                placeholder="Send a message and subscribe us for more updates..."
              />
              <span className="px-6 md:px-8 py-4 cursor-pointer bg-yellow-900 hover:bg-yellow-950 text-white transition-all duration-300 ease-in">
                <Send size={22}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
