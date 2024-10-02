export default function Header() {
  return (
    <header className="flex flex-row space-x-4 w-full bg-grayBackground p-4 rounded-2xl border border-elementBorder">
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/1683745326201342430/DA2905C244383E8B74E46EFA266BC6BDB42CD899/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="ProfilIMG"
        className="h-20 rounded-xl border-elementBorder border-2"
      />
      <div className="space-y-3 py-2">
        <h1 className="font-semibold text-base">Rafał Curzydło</h1>
        <div className="bg-elementBackground rounded-lg py-1 px-3 text-xs text-center w-fit">
          FrontEnd Developer
        </div>
      </div>
    </header>
  );
}
