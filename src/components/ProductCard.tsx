import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
}

const ProductCard = ({ image, title, description, price, originalPrice }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Heart Icon */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>

          <Button 
            size="sm" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Comprar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;