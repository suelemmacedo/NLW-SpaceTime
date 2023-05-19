import { User } from "lucide-react";
import nlwLogo from "../assets/nlw-spacetime-logo.svg";
import Image from "next/image"; // Exigência do next para utilização de imagens. O next otimiza a imagem automaticamente, e faz com que a imagem seja carregada de forma mais rápida.

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      {/* items-start, pois os itens estão alinhados para a esquerda e justify-between pois quero que o espaçamento esteja entre os elementos. 
      O relative é para que tudo que eu coloque dentro div fique relativo a ela.*/}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" /> {/* imagem de usuário */}
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* Hero */
        /* space-y-5 coloca espaço em todos os elementos da div de 20px*/}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
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

        {/* Copyright */}

        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{" "}
          {/*Essa funcionalidade (rel="noreferrer") pode ser útil em situações em que deseja-se ocultar a origem do tráfego, 
          fornecer uma camada adicional de privacidade ou evitar possíveis problemas de segurança.*/}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-100"
            href="https://www.rocketseat.com.br/"
          >
            Rocketseat
          </a>
        </div>
      </div>

      {/* Rigth */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        {/* items-center e justify-center para alinhar algo totalmente ao centro. */}
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
