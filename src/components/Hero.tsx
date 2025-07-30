import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful hair styling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
            Transforme
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Seus Cabelos
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 font-inter">
            Descubra produtos exclusivos para realçar a beleza natural dos seus cabelos 
            no Studio Formas&Fios
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 font-medium"
            >
              Explorar Produtos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
            >
              Saber Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-6 border-2 border-primary rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;