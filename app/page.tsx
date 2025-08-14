import {
  Heart,
  Sparkles,
  PawPrint,
  Sun,
  Moon,
  Trophy,
  MapPin,
  Droplets,
  Scissors,
  Cross,
  ShoppingBag,
  MessageCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-slate-600">
        <Heart className="w-6 h-6" />
      </div>
      <div className="absolute top-40 right-20 text-slate-600">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute bottom-20 left-20 text-slate-600">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="absolute bottom-40 right-10 text-slate-600">
        <Sparkles className="w-6 h-6" />
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-2">
          <PawPrint className="w-8 h-8 text-white" />
          <span className="text-xl font-bold">PetLove</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Serviços
          </a>
          <a
            href="#contato"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contato
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 lg:py-20 gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Cuidamos do seu pet com{" "}
            <span className="text-orange-400">carinho</span>,{" "}
            <span className="text-blue-400">inovação</span> e tudo o que ele
            precisa!
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Banho, tosa, produtos selecionados e atendimento especial para seu
            melhor amigo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full">
              Agende um atendimento
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full"
            >
              Conheça nossos serviços
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative max-w-lg">
          <div className="relative">
            <Image
              src="/GoldenTomandoBanho.png" // Caminho corrigido
              alt="Golden retriever sendo cuidado em um pet shop"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />

            {/* Small circular image overlay */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full overflow-hidden border-4 border-slate-800 shadow-lg">
              <Image
                src="/DogsLombrados.png"
                alt="Pets felizes"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="bg-white text-gray-900 py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Sobre o PetLove
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Amor pelos pets</h3>
              <p className="text-gray-600">
                Tratamos cada pet como se fosse nosso, com carinho e atenção em
                cada detalhe.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Qualidade garantida
              </h3>
              <p className="text-gray-600">
                Produtos e serviços da primeira qualidade para seu melhor amigo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inovação</h3>
              <p className="text-gray-600">
                Sempre em busca das melhores práticas e tecnologias para pets.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Na PetLove, acreditamos que cada pet merece ser tratado com amor,
              respeito e profissionalismo. Nossa equipe é formada por
              profissionais qualificados e apaixonados por animais que oferecem
              cuidados especiais, inovação e muito carinho em cada atendimento.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-yellow-500 mb-2">
                5000+
              </div>
              <div className="text-gray-600">Pets atendidos</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
                50+
              </div>
              <div className="text-gray-600">Especialistas</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                100%
              </div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600">
              Oferecemos o que há de melhor para seu pet com amor e cuidado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Banho
              </h3>
              <p className="text-gray-600">
                Banho completo com produtos de qualidade e muito carinho.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Tosa</h3>
              <p className="text-gray-600">
                Tosa artística e higiênica feita por profissionais
                especializados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cross className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Veterinário
              </h3>
              <p className="text-gray-600">
                Consultas e cuidados veterinários com profissionais
                qualificados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Loja de Produtos
              </h3>
              <p className="text-gray-600">
                Produtos selecionados para alimentação, higiene e diversão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Updated */}
      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-600">
              A satisfação dos nossos clientes é nossa maior prioridade
            </p>
          </div>

          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-yellow-200 relative">
              <Image
                src="/DogsLombrados.png"
                alt="Pet cliente feliz"
                width={80}
                height={80}
                className="object-cover"
              />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-white fill-current" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Serviço excepcional de cuidado! Minha Luna ama vir aqui."
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/PessoaSorridente01.jpg"
                    alt="Ana Silva"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Ana Silva</p>
                  <p className="text-sm text-gray-500">Dona da Luna</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Profissionais dedicados, meu Bob fica sempre lindo!"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/PessoaSorridente02.jpg"
                    alt="Carlos Santos"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Carlos Santos</p>
                  <p className="text-sm text-gray-500">Dono do Bob</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Atendimento cuidadoso e carinhoso, meu gato ama vir aqui!"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/PessoaSorridente03.jpg"
                    alt="Maria Costa"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Maria Costa</p>
                  <p className="text-sm text-gray-500">Dona do Mimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-16 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fale conosco
            </h2>
            <p className="text-gray-600">
              Entre em contato e agende um horário para cuidar do seu pet
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-black text-gray-900 bg-white"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Telefone/WhatsApp"
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-black text-gray-900 bg-white"
                />
              </div>

              <div>
                <select className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-black text-gray-900 bg-white">
                  <option value="">Tipo de Pet</option>
                  <option value="cao">Cão</option>
                  <option value="gato">Gato</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Descreva o que você precisa..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-black text-gray-900 bg-white resize-none"
                ></textarea>
              </div>

              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg">
                Quero receber novidades!
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Ao enviar seus dados, você concorda com nossa{" "}
                <a href="#" className="text-yellow-600 hover:underline">
                  Política de Privacidade
                </a>
                . Seus dados estão seguros conosco.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="w-8 h-8 text-yellow-500" />
                <span className="text-xl font-bold">PetLove</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Cuidamos do seu pet com carinho, inovação e tudo o que ele
                precisa. Nossa equipe é especializada em oferecer os melhores
                cuidados para seu melhor amigo.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contatos</h3>
              <div className="space-y-2 text-gray-400">
                <p>(81) 9999-9999</p>
                <p>Rua Belmiro Pereira 301</p>
                <p>contato@petlove.com.br</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-2">@petlove.oficial</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>© 2024 PetLove. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
