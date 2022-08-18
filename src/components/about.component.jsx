const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an experienced full stack developer from Ghaziabad India working
          with reactjs and nextjs. Additionally trained with python , C++ ,
          Javascript. I have made various projects in react and django in my
          first and second year of graduation time. i have a goal in which i
          want to keep learning , achieving and always take failure as a one
          step towards success.
        </p>

        <br />

        <p className="text-xl">
          My hunger for knowledge gave me enough determination to turn my ideas
          in to live projects.My projects are the proof of my determination in
          which i used reactjs,firebase,hooks and redux.
        </p>
      </div>
    </div>
  );
};

export default About;
