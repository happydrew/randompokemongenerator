import { Item } from "@radix-ui/react-radio-group";
import { title } from "process";

export default {
  index: {
    type: "page",
    display: "hidden",
    theme: {
      layout: "raw",
    },
  },
  tags: {
    display: "children",
    theme: {
      layout: "raw",
    },
  },
  tools: {
    type: "menu",
    title: "Tools",
    items: {
      "random-pokemon-generator": {
        title: "Random Pokemon Generator",
        href: "/"
      },
      "random-pokemon-type-generator": {
        title: "Random Pokemon Type Generator",
        href: "/tools/random-pokemon-type-generator"
      },
      "random-shiny-pokemon-generator": {
        title: "Random Shiny Pokemon Generator",
        href: "/tools/random-shiny-pokemon-generator"
      },
      "random-mega-pokemon-generator": {
        title: "Random Mega Pokemon Generator",
        href: "/tools/random-mega-pokemon-generator"
      }
    }
  },
  "gen-n-pokemon-list": {
    title: "Gen N Pokemon List",
    type: "menu",
    items: {
      "gen-1-pokemon": {
        title: "Gen 1 Pokemon",
        href: "/gen-n-pokemon-list/gen-1-pokemon"
      },
      "gen-2-pokemon": {
        title: "Gen 2 Pokemon",
        href: "/gen-n-pokemon-list/gen-2-pokemon"
      },
      "gen-3-pokemon": {
        title: "Gen 3 Pokemon",
        href: "/gen-n-pokemon-list/gen-3-pokemon"
      },
      "gen-4-pokemon": {
        title: "Gen 4 Pokemon",
        href: "/gen-n-pokemon-list/gen-4-pokemon"
      },
      "gen-5-pokemon": {
        title: "Gen 5 Pokemon",
        href: "/gen-n-pokemon-list/gen-5-pokemon"
      },
      "gen-6-pokemon": {
        title: "Gen 6 Pokemon",
        href: "/gen-n-pokemon-list/gen-6-pokemon"
      },
      "gen-7-pokemon": {
        title: "Gen 7 Pokemon",
        href: "/gen-n-pokemon-list/gen-7-pokemon"
      },
      "gen-8-pokemon": {
        title: "Gen 8 Pokemon",
        href: "/gen-n-pokemon-list/gen-8-pokemon"
      },
      "gen-9-pokemon": {
        title: "Gen 9 Pokemon",
        href: "/gen-n-pokemon-list/gen-9-pokemon"
      }
    }
  },
  // spec: {
  //   display: "hidden",
  //   type: "page",
  //   title: <span className="after:content-['_↗'] after:font-sans">Spec</span>,
  //   href: "https://spec.graphql.org",
  //   newWindow: true,
  // },
  blog: {
    // display: "hidden",
    type: "page",
    title: "Blog",
    theme: {
      layout: "raw",
      typesetting: "article",
      timestamp: false,
    },
  },
  docs: {
    type: "page",
    title: "Documentation",
  }
}
