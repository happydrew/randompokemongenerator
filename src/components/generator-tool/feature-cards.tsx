import React from "react";
import { FeatureCard, FeatureCardProps } from "./feature-card";
import NextLink from "next/link";
import '@styles/generator-tool.css';

const generatorToolFeatureCardProps: FeatureCardProps[] = [
    {
        htmlId: "diverse-pokemon-library",
        withBackground: false,
        title: "Diverse Pokémon Library📚",
        content: `Our random Pokémon generator includes nearly 1400 Pokémon from all
				generations and game versions. Whether you're looking for a classic Pikachu ⚡ or a newer addition
				like Dracovish 🦖, we've got you covered. This extensive library ensures that our Pokémon randomizer
				can provide endless possibilities, making it the perfect tool for any Pokémon enthusiast 🏆.`,
        imageUrl: "/img/features/diverse-pokemon-library.webp",
        imageAlt: "diverse pokemon library"
    },
    {
        htmlId: "customizable-generation",
        withBackground: true,
        title: "Customizable Generation⚙️",
        content: `Tailor your Pokémon randomizer experience with extensive filter options.
				Choose from generation, region, type, form, rarity, and more. It's never been easier to generate a
				random Pokémon that fits your exact criteria 🎯. Our random Pokémon picker allows you to refine your
				search to match your preferences, ensuring you always find the perfect Pokémon 🌟.`,
        learnMoreLink: "/docs/filter-options",
        imageUrl: "/img/features/fully-customize.webp",
        imageAlt: "customizable generation"
    },
    {
        htmlId: "beautiful-card-display",
        withBackground: false,
        title: "Beautiful Card Display🌟",
        content: `The generated Pokémon are displayed in stunning card formats 🃏,
				showcasing detailed information like name, generation, region, abilities, and more. Our high-quality
				images enhance the visual appeal and make each card a joy to view 😍. This visually appealing
				Pokémon generator is designed to provide an engaging user experience 🖼️.`,
        learnMoreLink: "/docs/display-options",
        imageUrl: "/img/features/beautiful-display.webp",
        imageAlt: "beautiful pokemon display"
    },
    {
        htmlId: "randomized-attributes",
        withBackground: true,
        title: "Randomized Attributes🎲",
        content: `Add an element of surprise with randomly generated IVs and natures 🎲.
				This random Pokémon team generator feature ensures that each Pokémon is unique and adds to the fun
				and challenge of building your team 🛡️. The random attributes make every Pokémon encounter exciting
				and unpredictable 🎉.`,
        learnMoreLink: "/docs/display-options",
        imageUrl: "/img/features/randomized-attributes.webp",
        imageAlt: "randomized-attributes"
    },
    {
        htmlId: "history-view-shiny",
        withBackground: false,
        title: "History View & Shiny Pokémon🌈",
        content: `Keep track of up to 64 generations with our history viewing feature 📜.
				Plus, our dedicated Shiny Pokémon display stores all the shiny Pokémon you encounter locally, making
				it easy to revisit your rare finds ✨. This feature allows you to build a collection of your favorite
				Pokémon and track your progress over time 🕰️.`,
        learnMoreLink: "/docs/history-view",
        imageUrl: "/img/features/history-viewing-and-shiny.webp",
        imageAlt: "randomized-attributes"
    },
    {
        htmlId: "user-friendly-interface",
        withBackground: true,
        title: "User-Friendly Interface📱",
        content: `Our random Pokémon generator boasts an elegant interface with clear
				layouts and smooth interactions 🌟. The design is mobile-optimized 📱, ensuring a seamless
				experience on phones and tablets. The intuitive interface makes it easy for users of all ages to
				navigate and enjoy the Pokémon randomizer 🌟.`,
        imageUrl: "/img/features/user-friendly-interface.webp",
        imageAlt: "user friendly interface"
    }
]

const GeneratorToolFeatureCards: React.FC = () => {
    return (
        <section id="features-container">
            <h2 id="features-title">Looking for a fun way to discover new Pokémon? Try our Random Pokémon Generator and
                start building your dream team today!</h2>
            <div id="why-choose-us" className="feature-background">
                <h3 className="feature-background">Why Choose Our Pokémon Generator?</h3>
                <p className="feature-background">Our random Pokémon generator combines a comprehensive library 📚, extensive
                    customization options ⚙️, beautiful displays 🌟, and intelligent randomization 🎲 to deliver an
                    unmatched Pokémon generation experience. Ideal for creating unique teams, discovering new Pokémon 🕵️,
                    and enjoying a fresh experience every time 🎉, our Pokémon randomizer is your ultimate companion in the
                    world of Pokémon.</p>
            </div>
            {generatorToolFeatureCardProps.map((featureCardProps: FeatureCardProps) => <FeatureCard {...featureCardProps} />)}
            <p id="conclusion">These features make our random Pokémon generator the ultimate tool for Pokémon fans looking
                to explore and enjoy the world of Pokémon in a new and exciting way. Whether you're using it as a random
                Pokémon type generator or a random Pokémon team generator, our tool provides endless entertainment and
                customization options.<strong>Try our random Pokémon generator now 👉 <NextLink href="/#n_generator"><img
                    src="/img/generate_button.png" alt="generate button of random pokemon generator" /></NextLink> and
                    discover the endless possibilities
                    for your next Pokémon journey! 🎉</strong></p>
        </section>
    )
}

export { GeneratorToolFeatureCards };