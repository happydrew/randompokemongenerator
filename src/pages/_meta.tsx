export default {
  index: {
    type: "page",
    display: "hidden",
    theme: {
      layout: "raw",
    },
  },
  docs: {
    type: "page",
    title: "Documentation",
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
      "random-type-generator": {
        title: "Random Pokemon Type Generator",
        // href: "/community/resources/official-channels"
      },
      "random-pokemon-generator": {
        title: "Random Pokemon Generator",
        href: "/"
      }
    }
  }
  // codeofconduct: {
  //   display: "hidden",
  //   theme: {
  //     breadcrumb: false,
  //     sidebar: false,
  //   },
  // },
  // users: {
  //   display: "hidden",
  //   theme: {
  //     typesetting: "article",
  //     toc: false,
  //     sidebar: false,
  //     breadcrumb: false,
  //     timestamp: false,
  //   },
  // },
  // conf: {
  //   display: "hidden",
  //   type: "page",
  //   title: "GraphQLConf",
  //   route: "/conf/2024",
  // }
  // "graphqljs": {
  //   display: "hidden",
  //   type: "page",
  //   title: "GraphQL.JS Tutorial"
  // },
}
