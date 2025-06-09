import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { articlesPath } from "@/constants";

export const Component: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  // Load markdown file dynamically
  const loadMarkdown = async (path: string) => {
    const content = await import(`${path}?raw`);
    setMarkdown(content.default);
  };

  useEffect(() => {
    // Load the first article on initial render
    loadMarkdown(articlesPath[0].path);
  }, []);

  return (
    <main className="w-full h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/4 border-r p-4">
        {articlesPath.map((article, idx) => (
          <div key={idx}>
            <button
              className="text-blue-600 underline"
              onClick={() => loadMarkdown(article.path)}
            >
              {article.title}
            </button>
            {article.children?.map((child, cidx) => (
              <div key={cidx} className="ml-4 mt-1">
                <button
                  className="text-sm text-blue-500 underline"
                  onClick={() => loadMarkdown(child.path)}
                >
                  {child.title}
                </button>
              </div>
            ))}
          </div>
        ))}
      </aside>

      {/* Markdown Viewer */}
      <section className="w-3/4 p-6 overflow-auto prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </section>
    </main>
  );
};
