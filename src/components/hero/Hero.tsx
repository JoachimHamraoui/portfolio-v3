import { AuroraText } from "@/components/magicui/aurora-text";
export const Hero = () => {
  return (
    <div className="w-[1240px] h-screen flex flex-col justify-center">
      <h1 className="text-8xl font-bold mb-4">
        Hi, I&lsquo;m{" "}
        <AuroraText colors={["#f035d7", "#7928CA", "#ff9d0a"]}>
          Joachim
        </AuroraText>
      </h1>
      <p className="text-xl">
        Fullstack Web Developer in Brussels — <br />
        Turning Ideas into User-Focused Digital Products
      </p>
    </div>
  );
};
