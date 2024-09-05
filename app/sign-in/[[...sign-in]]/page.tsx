import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="flex h-[100dvh] w-screen overflow-y-scroll scrollbar-thin"
      style={{
        backgroundColor: "#202020", // Color de fondo oscuro
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.07) 1px, transparent 1px)", // Opacidad reducida a 0.05
        backgroundSize: "40px 40px",
        transform: "none",
        opacity: 1,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {/* Contenedor de imágenes */}
      <div className="flex-1 relative hidden lg:flex">
        <div className="absolute top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-[24vw] h-[24vw] relative overflow-hidden flex rounded-2xl max-w-[600px] max-h-[600px]">
            <img
              alt="NotasAI app"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://notas.ai/chat-1x1.jpeg"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
        </div>
        <div className="absolute top-[56%] left-1/2 transform -translate-x-[88%] -translate-y-1/2 z-[9]">
          <div className="w-[24vw] h-[24vw] relative overflow-hidden flex rounded-2xl max-w-[600px] max-h-[600px]">
            <img
              alt="NotasAI app"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://notas.ai/studio-1x1.jpeg"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
        </div>
        <div className="absolute top-[68%] left-[68%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[24vw] h-[24vw] relative overflow-hidden flex rounded-2xl max-w-[600px] max-h-[600px]">
            <img
              alt="NotasAI app"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              src="https://notas.ai/search-1x1.jpeg"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
        </div>
      </div>
      {/* Contenedor del formulario de inicio de sesión */}
      <div className="flex-1 flex items-center justify-center p-5">
        <SignIn
          path="/sign-in"
          routing="path"
          appearance={{
            variables: {
              colorPrimary: "black",
              colorText: "black",
              colorBackground: "white",
              colorInputBackground: "white",
              colorInputText: "black",
            },
            elements: {
              formButtonPrimary: {
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
              },
              footer: { display: "none" },
            },
          }}
        />
      </div>
    </div>
  );
}
