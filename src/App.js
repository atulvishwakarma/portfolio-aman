import "./App.css";

import Layout from "./components/layout/Layout";
function App() {
  return (
    <div className="app-portfolio bg-slate-200 dark:bg-slate-800 flex items-start flex-col pb-4 min-h-screen transition duration-500">
      <Layout />
    </div>
  );
}

export default App;
