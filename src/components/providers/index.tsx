import ReactQueryProvider from "./components/react-query.provider";
import { ThemeProvider } from "./components/theme-provider";

export default function Providers({ children }: ProvidersProps) {
  return (
    <ReactQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
