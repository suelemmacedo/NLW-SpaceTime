import nlwLogo from "../assets/nlw-spacetime-logo.svg";
import Image from "next/image"; // Exigência do next para utilização de imagens. O next otimiza a imagem automaticamente, e faz com que a imagem seja carregada de forma mais rápida.

export function Hero() {
  return (
    <div className="space-y-5">
      {/* space-y-5 coloca espaço em todos os elementos da div de 20px*/}
      <Image src={nlwLogo} alt="NLW Spacetime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href=""
      >
        {" "}
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  );
}
