import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export async function Layout({
  children,
}: LayoutProps): Promise<React.ReactElement> {
  return (
    <div>
      <Header />
      <div className="flex justify-center pt-20">{children}</div>
    </div>
  );
}
