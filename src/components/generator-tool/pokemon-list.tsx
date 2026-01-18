export { PokemonList };
// import '../../styles/generator-tool.css'; // Moved to _app.tsx for Next.js compliance

interface PokemonListProps {
    title: string;
    ssgHtml: string;
}

const PokemonList: React.FC<PokemonListProps> = ({
    title,
    ssgHtml
}) => {
    return (
        <div className="generator-tool">
            <header>
                <h1>{title}</h1>
            </header>

            <section
                id="ssgHtml"
                className="display-pokemon-container"
                dangerouslySetInnerHTML={{ __html: ssgHtml }}
            >
            </section>
        </div>
    )
}