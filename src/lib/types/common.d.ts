declare type SearchParams = string | string[] | undefined;

declare type RouteProps = {
  params: { locale: Locale; productSlug: string; productId: string };
  searchParams: SearchParams;
};

declare type LayoutProps = {
  children: React.ReactNode;
} & Pick<RouteProps, "params">;

export interface User {
  id: string;
  username: string;
  name: string;
  role: "admin" | "employee";
}
