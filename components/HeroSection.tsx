import TextType from "./TextType";
import AnimatedContent from "./AnimatedContent";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="flex justify-center w-full items-center z-1">
        <AnimatedContent
          className="w-240 text-center"
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <TextType
            className="text-5xl w-120 text-center h-48"
            text={[
              "Revolutionizing Healthcare with UzMedicare",
              "Empowering Your Health, Anywhere, Anytime",
              "Smartwatch-Based Healthcare at Your Fingertips",
            ]}
            typingSpeed={75}
            pauseDuration={2500}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-xl pt-5 text-gray-600 text-center fixed top-115">
            UzMedicare is a revolutionary smartwatch-based healthcare system
            that empowers users to track their health and send analytics to
            local clinics, ensuring timely care wherever they are.
          </p>
        </AnimatedContent>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
};

export default HeroSection;
