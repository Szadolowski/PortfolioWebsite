type props = {
  children: string;
  title: string;
  icon: string;
};

export default function ServiceItem({ children, title, icon }: props) {
  return (
    <div className="relative rounded-lg bg-gradient-to-br from-[#616165] to-grayBackground to-50% p-[1px] shadow-shadow2 ">
      <div className="p-6 rounded-lg bg-grayBackground flex flex-col items-center space-y-5">
        <div>
          <img
            src={icon}
            alt={`ICON_${title}`}
            className="min-h-11 max-h-14 min-w-11 max-w-14 bg-[#4a4a4d57] rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-2 text-center">
          <h4 className="font-bold text-lg">{title}</h4>
          <p className="text-wrap">{children}</p>
        </div>
      </div>
    </div>
  );
}
