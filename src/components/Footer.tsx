import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold bg-gradient-primary bg-clip-text text-transparent">
              Studio Formas&Fios
            </h3>
            <p className="text-background/80 leading-relaxed">
              Especialistas em cuidados capilares, oferecendo produtos premium 
              para realçar a beleza natural dos seus cabelos.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5 text-primary" />
              </div>
              <div className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#produtos" className="text-background/80 hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Política de Troca</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">Rua da Beleza, 123 - Centro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80 text-sm">contato@formasefios.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Studio Formas&Fios. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm mt-2 md:mt-0">
              Desenvolvido com ❤️ para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;