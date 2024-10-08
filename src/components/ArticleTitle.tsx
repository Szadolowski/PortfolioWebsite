type props = {
  children: string;
};

export default function ArticleTitle({ children }: props) {
  return (
    <div className="w-8 border-yellow-500 border-b-4 text-nowrap">
      <h2 className="font-[600] text-[24px] mb-2">{children}</h2>
    </div>
  );
}
