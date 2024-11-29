import { Box } from "@mui/material";
import ContentItem from "./ContentItem";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
const contentArray = [
  {
    title: "Get Things Done",
    description:
      " lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    img: image1,
  },
  {
    title: "Productivity Is Briliant",
    description:
      " lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    img: image2,
  },
  {
    title: "Fast Development",
    description:
      " lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.",
    img: image3,
  },
];
const Content = () => {
  return (
    <div>
      <Box
        bgcolor="#fbf2f2"
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        width="100%"
        height="10%"
      >
        {contentArray.map((cont, index) => (
          <ContentItem
            title={cont.title}
            description={cont.description}
            img={cont.img}
            key={index}
            swap={index % 2 == 0}
          />
        ))}
      </Box>
    </div>
  );
};

export default Content;
