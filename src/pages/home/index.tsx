import ReactMarkdown from "react-markdown";
// import markdown from "../../../docs/introduction.md?raw";
import remarkGfm from "remark-gfm";
import markdown from "../../../docs/0.1-markdown-test.md?raw";

export const Component = () => {
  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};
