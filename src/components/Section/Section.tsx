import React from "react";

export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section
        className="container flex flex-col items-center justify-center"
        style={{
          height: "100vh",
          width: "100%",
        }}
      >
        {children}
      </section>
    </>
  );
};
