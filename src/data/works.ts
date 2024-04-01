import hubside from "@/assets/works/hubside.svg";
import julien from "@/assets/works/julien.svg";
import uggy from "@/assets/works/uggy.svg";
import h3campus from "@/assets/works/h3campus.svg";
import orange from "@/assets/works/orange.svg";

type WorkType = {
  title: string;
  description: string;
  color: string;
  picture: string;
  order: number;
};

export const works: WorkType[] = [
  {
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend euismod ultrices. Fusce non nisl vel ante pellentesque elementum.",
    picture: julien,
    color: "#202234",
    order: 1,
  },
  {
    title: "Editeur de site web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend euismod ultrices. Fusce non nisl vel ante pellentesque elementum.",
    picture: hubside,
    color: "#010043",
    order: 2,
  },
  {
    title: "Plateforme de e-récompenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend euismod ultrices. Fusce non nisl vel ante pellentesque elementum.",
    picture: uggy,
    color: "#09365F",
    order: 3,
  },
  {
    title: "Formations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend euismod ultrices. Fusce non nisl vel ante pellentesque elementum.",
    picture: h3campus,
    color: "#FFF",
    order: 4,
  },
  {
    title: "IoT Journey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend euismod ultrices. Fusce non nisl vel ante pellentesque elementum.",
    picture: orange,
    color: "#FF7900",
    order: 5,
  },
  {
    title: "Vidéos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend euismod ultrices. Fusce non nisl vel ante pellentesque elementum.",
    picture: h3campus,
    color: "#FFF",
    order: 6,
  },
  {
    title: "Foreground",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend euismod ultrices. Fusce non nisl vel ante pellentesque elementum.",
    picture: orange,
    color: "#FF7900",
    order: 7,
  },
];
