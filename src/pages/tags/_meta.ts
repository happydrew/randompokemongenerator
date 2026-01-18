import { createCatchAllMeta } from "nextra/catch-all"
// @ts-ignore - MDX file import
import { getStaticPaths } from "./[slug].mdx"

export default () => {
  const { paths } = getStaticPaths() as unknown as {
    paths: { params: { slug: string } }[]
  }

  const options = {
    display: "hidden",
  }

  return createCatchAllMeta(
    paths.map(p => "/" + p.params.slug),
    Object.fromEntries(paths.map(p => [p.params.slug, options])),
  )
}
