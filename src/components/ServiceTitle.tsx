type props = {
  children: string;
};

export default function ArticleTitle({ children }: props) {
  return <h3 className="font-bold text-lg mb-2 py-1">{children}</h3>;
}
