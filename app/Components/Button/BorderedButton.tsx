import Link from "next/link";

interface ButtonProps {
  content: string;
  href: string;
}

const BorderedButton: React.FC<ButtonProps> = ({ content, href }) => {
  return (
    <button
      type="submit"
      className="relative z-10 flex items-center justify-center gap-2 px-4 py-2 mx-auto overflow-hidden text-lg border-2 rounded-full shadow-xl lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-300 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-l before:from-colorPrimary before:to-colorPrimaryDark hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-400 group text-colorWhite  drop-shadow-md bg-gradient-to-t from-colorPrimaryDark/20 to-coloWhite/0"
    >
      <Link href={href}>{content}</Link>
      <svg
        className="justify-end w-8 h-8 p-2 duration-150 ease-linear rotate-45 border rounded-full group-hover:rotate-90 group-hover:bg-gradient-to-r group-hover:from-colorSecondary group-hover:to-colorSecondaryDark border-colorWhite"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-colorSecondary group-hover:fill-colorWhite animate"
        ></path>
      </svg>
    </button>
  );
};

export default BorderedButton;
