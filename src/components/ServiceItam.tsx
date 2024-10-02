type props = {
  children: string;
  title: string;
  icon: string;
};

export default function ServiceItem({ children, title, icon }: props) {
  return (
    <div className="bg-borderGradientServiceItem relative rounded-lg overflow-hidden border-4 border-transparent">
      <div className="bg-gradientServiceItem p-6 rounded-lg shadow-md">
        <img src={icon} alt={`ICON_${title}`} />
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
