import Header from "@/components/Header/Hader";
import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";
import Product from "@/components/ProductScreen/Product";
import ShopWithUs from "@/components/ShopWithUs/ShopWithUs";
import Stats from "@/components/Statistics/Statistics";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <Product />
        <ShopWithUs />
        <Stats />
        <Partners />
      </main>
    </div>
  );
}
