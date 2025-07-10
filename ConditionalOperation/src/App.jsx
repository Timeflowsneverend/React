import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import RegLogForm from "./pages/RegLogForm";

const App = () => {
  function FallbackRender({ error }) {
    const { resetBoundary } = useErrorBoundary();
    return (
      <div role="alert">
        <p>Something went wrong: {error}</p>
        <pre style={{ color: "red" }}>{error}</pre>
        <button onClick={resetBoundary}>retry</button>
      </div>
    );
  }
  const logError = (error) => {
    console.log(">>>>", error);
  };
  return (
    <ErrorBoundary fallback={<FallbackRender />} onError={logError}>
      <RegLogForm type="register" />
    </ErrorBoundary>
  );
};

export default App;
