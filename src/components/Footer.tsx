export const Footer = () => {
  return (
    <footer className=" border-t py-4">
      <div className="container flex place-content-center">
        <p className="leading-7">
          {"Made with 💾 by "}
          <a
            className="font-medium text-primary underline underline-offset-4"
            href="https://jeremy.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeremy Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};
