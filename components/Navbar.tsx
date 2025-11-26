import CardNav from "../components/CardNav";

const Navbar = ({ className = "" }) => {
  const items = [
    {
      label: "Introduction",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Main Idea",
          ariaLabel: "About the Idea",
          href: "hero-section",
        },
        {
          label: "System",
          ariaLabel: "About the System Architecture",
          href: "system-section",
        },
      ],
    },
    {
      label: "About",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Team", ariaLabel: "About Team" },
        { label: "The Problem", ariaLabel: "About Problem" },
        { label: "The Solution", ariaLabel: "About Solution" },
      ],
    },
    // {
    //   label: "Projects",
    //   bgColor: "#0D0716",
    //   textColor: "#fff",
    //   links: [
    //     {
    //       label: "Featured",
    //       ariaLabel: "Featured Projects",
    //       href: "/featured",
    //     },
    //     { label: "Case Studies", ariaLabel: "Project Case Studies" },
    //   ],
    // },
  ];

  return (
    <CardNav
      className={className}
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
