import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Router from "routes/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
