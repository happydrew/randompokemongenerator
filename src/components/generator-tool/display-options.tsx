export {
    ShowGeneration, ShowRegion, Natures, BackImg, BackColor, ShowAblilites,
    Sprites, ShowRarity, ShowTypes, ShowStats, Evs, Ivs, Cries, ShinyProb, ShinyTip
};
import React from 'react';
import { TipLabelCheckbox, TipLabelCheckboxProps } from '@/components/generator-tool/tipLabel-checkbox';
import { TipLabel, TipLabelProps } from './tiplabel';

const showGeneration: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to display the generation of the Pokémon.",
        labelContent: "Generation"
    },
    checkboxId: "showGeneration",
    defaultChecked: false
};

const ShowGeneration: React.FC = () => {
    return <TipLabelCheckbox {...showGeneration} />;
}

const showRegion: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to show the region where the Pokémon maybe found.",
        labelContent: "Region"
    },
    checkboxId: "showRegion",
    defaultChecked: false
};

const ShowRegion: React.FC = () => {
    return <TipLabelCheckbox {...showRegion} />;
}

const natures: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to randomly assign a nature to each generated Pokémon.",
        labelContent: "Natures"
    },
    checkboxId: "natures"
};

const Natures: React.FC = () => {
    return <TipLabelCheckbox {...natures} />;
}

const backImg: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Background image is based on the type of Pokemon's first slot, to enhance the visual appeal.",
        labelContent: "BackImg"
    },
    checkboxId: "backImg",
    defaultChecked: false
};

const BackImg: React.FC = () => {
    return <TipLabelCheckbox {...backImg} />;
}

const backColor: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to display the background color for the Pokémon, based on pokemon's color.",
        labelContent: "BackColor"
    },
    checkboxId: "backColor",
    defaultChecked: false
};

const BackColor: React.FC = () => {
    return <TipLabelCheckbox {...backColor} />;
}

const showAblilites: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to display the Pokémon's abilities.",
        labelContent: "Ablilites"
    },
    checkboxId: "showAblilites",
    defaultChecked: false
};

const ShowAblilites: React.FC = () => {
    return <TipLabelCheckbox {...showAblilites} />;
}

const sprites: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to show the image of the Pokémon.",
        labelContent: "Sprites"
    },
    checkboxId: "sprites"
};

const Sprites: React.FC = () => {
    return <TipLabelCheckbox {...sprites} />;
}

const showRarity: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to display the rarity level of the Pokémon.",
        labelContent: "Rarity"
    },
    checkboxId: "showRarity",
    defaultChecked: false
};

const ShowRarity: React.FC = () => {
    return <TipLabelCheckbox {...showRarity} />;
}

const showTypes: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to show the type(s) of the Pokémon.",
        labelContent: "Types"
    },
    checkboxId: "showTypes",
    defaultChecked: false
};

const ShowTypes: React.FC = () => {
    return <TipLabelCheckbox {...showTypes} />;
}

const showStats: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to display the base stats of the Pokémon.",
        labelContent: "BaseStats"
    },
    checkboxId: "showStats",
    defaultChecked: false
};

const ShowStats: React.FC = () => {
    return <TipLabelCheckbox {...showStats} />;
}

const evs: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to show the effort values for the Pokémon.",
        labelContent: "Evs"
    },
    checkboxId: "evs",
    defaultChecked: false
};

const Evs: React.FC = () => {
    return <TipLabelCheckbox {...evs} />;
}

const ivs: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Whether to randomly assign individual values for the Pokémon.",
        labelContent: "Ivs"
    },
    checkboxId: "ivs",
    defaultChecked: false
};

const Ivs: React.FC = () => {
    return <TipLabelCheckbox {...ivs} />;
}

const cries: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Toggle to show or hide the play button for the Pokémon's cry sound.",
        labelContent: "Cries"
    },
    checkboxId: "cries",
    defaultChecked: false
};

const Cries: React.FC = () => {
    return <TipLabelCheckbox {...cries} />;
}

const shinyTipLabelProps: TipLabelProps = {
    dataClickTip: "Set the probability of generating a Shiny Pokémon, expressed as a percentage.",
    labelContent: "Shiny"
};

const ShinyProb: React.FC = () => {
    return (
        <div className="option-unit-small">
            <TipLabel {...shinyTipLabelProps} />
            <input type="number" id="shinyProb" min="0" max="100" defaultValue="1" />
            <span className="percent-sign">&nbsp;%</span>
        </div>
    );
}

const shinyTip: TipLabelCheckboxProps = {
    tipLabelProps: {
        dataClickTip: "Display a pop-up notification when encountering a shiny Pokémon, allowing for quick access to a list of previously acquired shiny Pokémon.",
        labelContent: "ShinyTip"
    },
    checkboxId: "shinyTip"
};

const ShinyTip: React.FC = () => {
    return <TipLabelCheckbox {...shinyTip} />;
}
