import { useEffect, useState } from "react";

const FloatingUpButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setShow(scrolled > 0.75);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 shadow hover:bg-blue-800"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to Top"
    >
      ↑
    </button>
  );
};

export default FloatingUpButton;
