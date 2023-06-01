export type Language =
  | "python"
  | "javascript"
  | "java"
  | "typescript"
  | "vue"
  | "react"
  | "markdown"
  | "flutter"
  | "android"
  | "rust";

export type MadeWith = "mypy" | "fastapi" | "postgres";
export interface Project {
  name: string;
  href: string;
  img?: string;
  year: string;
  description?: string;
  longDescription?: string;
  langs: Language[];
  madeWith?: MadeWith[];
  license?: "AGPL-3.0" | "GPL-3.0" | "MIT" | "LGPL-3.0";
  retroHref?: string;
  inActionHref?: string;
}

// TODO: we have so many projects that they should
// be filterable by their category
// e.g., full stack, server, client, embedded

export const projects: Project[] = [
  {
    name: "Mandown",
    href: "https://github.com/potatoeggy/mandown",
    description:
      "A comic downloader and converter to CBZ / EPUB / PDF for my Kobo. Available via CLI, Qt GUI, and Python library. After splitting our homegrown converter into its own project, it now supports interconverting between all three formats!",
    longDescription: "Available via CLI and a Qt GUI!",
    langs: ["python"],
    license: "AGPL-3.0",
    img: "mandown.webp",
    year: "2022",
  },
  // {
  //   name: "Noveldown",
  //   href: "https://github.com/potatoeggy/noveldown",
  //   langs: ["python"],
  //   license: "LGPL-3.0",
  //   description:
  //     "A webnovel downloader and converter to EPUB for my Kobo, with lots of metadata!",
  //   longDescription: "Heavily borrows Mandown's design.",
  // },
  {
    name: "Jeopardy",
    href: "https://github.com/potatoeggy/jeopardy",
    img: "jeopardy.webp",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
    description:
      "Kahoot-inspired Jeopardy! game, including Final Jeopardy! A first foray into Vue 3's Composition API, heavily inspired by React hooks. Written with a heavy focus on animation, smoothness, and getting the damn thing working. Created for Bayview's Computer Club.",
    longDescription: "Created for Bayview's Computer Club.",
    year: "2022",
  },
  {
    name: "Primoprod",
    href: "https://github.com/potatoeggy/primoprod",
    img: "primoprod.webp",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
    description:
      "A game simulator to increase productivity with quests and gambling with the aim of realism and imitating the base game as much as possible. Written to start learning web development!",
    longDescription: "My first project with a JS framework!",
    year: "2021",
  },
  {
    name: "Napbot",
    href: "https://github.com/potatoeggy/napbot",
    langs: ["python"],
    license: "AGPL-3.0",
    description:
      "A Discord bot initially to increase sleep hours via leaderboards and competition. Now a local music bot that loads metadata and renders real-time synchronised lyrics.",
    img: "napbot.webp",
    year: "2021",
  },
  {
    name: "Resketch",
    href: "https://github.com/anyuan-chen/resketch",
    langs: ["typescript", "react"],
    img: "resketch.webp",
    description:
      'A "reverse-Pictionary" where you compete to have an AI recognise your drawings. Written for YRHacks 2022.',
    longDescription: "Written for YRHacks 2022.",
    year: "2022",
  },
  {
    name: "Perdiem",
    href: "https://github.com/anyuan-chen/perdiem",
    langs: ["javascript", "react"],
    license: "AGPL-3.0",
    img: "perdiem.webp",
    description:
      "A pretty budget tracking app where I learned too much about server-side rendering. Written for StormHacks 2022.",
    longDescription: "Written for StormHacks 2022.",
    year: "2022",
  },
  {
    name: "RecipeReady",
    href: "https://github.com/christopherlam888/recipe-ready-frontend",
    langs: ["python", "android", "flutter"], // SQL
    img: "recipeready.webp",
    description:
      'Android app to automagically (randomly) choose pre-scraped recipes from the web and generate a shopping list via standardising ingredient identification. Includes a web scraper, REST API, and a database. (Commonly known as a "full stack application.") Written for Hack the North 2021.',
    longDescription: "Written for Hack the North 2021.",
    year: "2021",
  },
  // {
  //   name: "AutoFicFare",
  //   href: "https://github.com/potatoeggy/autoficfare",
  //   langs: ["python"],
  //   license: "GPL-3.0",
  //   description:
  //     "Automatically update fanfiction in a Calibre database to instantly update them on your Kobo.",
  // },
  // {
  //   name: "Comicon",
  //   href: "https://github.com/potatoeggy/comicon",
  //   langs: ["python"],
  //   license: "AGPL-3.0",
  //   description: "Nothing",
  // },
  // {
  //   name: "Aoto",
  //   href: "https://github.com/potatoeggy/aoto",
  //   langs: ["typescript", "react"], // SQL, Golang
  // },
  {
    name: "PillowⓇ",
    href: "https://github.com/potatoeggy/ece198",
    langs: ["rust"], // rust
    description:
      "Water quality statistics aggregator for the STM32 microcontroller. Written in Rust because the recommended C++ platform had the worst Intellisense I have ever seen. Also, we hate segfaults in this household.",
    year: "2022",
  },
];

export default projects;
