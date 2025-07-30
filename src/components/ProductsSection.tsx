import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: product1,
      title: "Shampoo Nutritivo Premium",
      description: "Fórmula exclusiva com óleos naturais que limpa profundamente enquanto nutre e fortalece os fios.",
      price: "R$ 89,90",
      originalPrice: "R$ 109,90"
    },
    {
      id: 2,
      image: product2,
      title: "Condicionador Reparador",
      description: "Condicionador intensivo que restaura a vitalidade dos cabelos danificados e ressecados.",
      price: "R$ 79,90",
    },
    {
      id: 3,
      image: product3,
      title: "Máscara Hidratante Luxury",
      description: "Tratamento intensivo com ingredientes premium para hidratação profunda e brilho duradouro.",
      price: "R$ 129,90",
      originalPrice: "R$ 159,90"
    },
    {
      id: 4,
      image: product1,
      title: "Kit Completo Formas&Fios",
      description: "Conjunto completo com shampoo, condicionador e máscara para cuidado total dos seus cabelos.",
      price: "R$ 249,90",
      originalPrice: "R$ 299,90"
    },
    {
      id: 5,
      image: product2,
      title: "Sérum Antiquebra",
      description: "Proteção avançada contra quebra e split ends, fortalecendo os fios desde a raiz.",
      price: "R$ 69,90",
    },
    {
      id: 6,
      image: product3,
      title: "Óleo Capilar Reparador",
      description: "Blend de óleos preciosos que nutrem profundamente e proporcionam brilho intenso.",
      price: "R$ 99,90",
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Produtos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra nossa linha exclusiva de produtos capilares desenvolvidos 
            especialmente para realçar a beleza natural dos seus cabelos
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;