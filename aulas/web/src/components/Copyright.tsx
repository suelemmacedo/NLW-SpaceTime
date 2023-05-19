export function Copyright() {
  return (
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
  );
}
