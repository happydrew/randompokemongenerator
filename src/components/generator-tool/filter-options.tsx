export {
    RegionsOption, TypesOption, FormsOption, RarityOption, HeightOption, WeightOption, GenerationOption,
    ColorsOption, EnvolvesOption, BabyOption, GrowthRateOption, HabitatsOption, EggGroupOption, GenderRateOption,
    ShapeOption, DefaultFormOption, FormSwitchOption, GenderDiffOption, BaseStatHpOption, BaseStatAtkOption,
    BaseStatDefOption, SpAtkOption, SpDefOption, BaseStatSpeedOption, BaseHappinessOption, CaptureRateOption,
    HatchCounterOption, GameVersionOption
}

import { TipLabelDropdown, TipLabelDropdownProps } from "./tiplabel-dropdown";
import { TipLabelNumRangeProps, TipLabelNumRange } from "./tiplabel-numrange";
import { TipLabelNumRangeDropdownProps, TipLabelNumRangeDropdown } from "./tiplabel-numrange-dropdown";

// Regions option
const regionsOptionProps: TipLabelDropdownProps = {
    id: "regions",
    dataClickTip: "Choose the region where the Pokémon might appear.",
    labelContent: "Regions",
    dataPluralName: "Regions",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Regions",
    options: [
        {
            value: "all",
            label: "All Regions",
            labelTip: "",
            dataSelectAll: "true",
            defaultChecked: true
        },
        {
            value: "kanto",
            label: "Kanto",
            labelTip: "Generation 1 (Red, Blue, and Yellow)",
            dataShortName: "Kan",
            defaultChecked: true
        },
        {
            value: "johto",
            label: "Johto",
            labelTip: "Generation 2 (Gold, Silver, and Crystal)",
            dataShortName: "Joh",
            defaultChecked: true
        },
        {
            value: "hoenn",
            label: "Hoenn",
            labelTip: "Generation 3 (Ruby, Sapphire, and Emerald)",
            dataShortName: "Hoe",
            defaultChecked: true
        },
        {
            value: "sinnoh",
            label: "Sinnoh",
            labelTip: "Generation 4 (Diamond, Pearl)",
            dataShortName: "Sin",
            defaultChecked: true
        },
        {
            value: "sinnoh_pt",
            dataShortName: "Sin_Pl",
            labelTip: "Generation 4 (Platinum)",
            label: "Sinnoh (Platinum)",
            defaultChecked: true
        },
        {
            value: "unova",
            label: "Unova",
            labelTip: "Generation 5 (Black and White)",
            dataShortName: "Uno",
            defaultChecked: true
        },
        {
            value: "unova_b2w2",
            dataShortName: "Uno_B2",
            labelTip: "Generation 5 (Black 2 and White 2)",
            label: "Unova (B2W2)",
            defaultChecked: true
        },
        {
            value: "kalos",
            dataShortName: "Kal",
            labelTip: "Generation 6 (X and Y)",
            label: "Kalos",
            defaultChecked: true
        },
        {
            value: "alola",
            dataShortName: "Alo",
            labelTip: "Generation 7 (Sun and Moon)",
            label: "Alola",
            defaultChecked: true
        },
        {
            value: "alola_usum",
            dataShortName: "Alo_US",
            labelTip: "Generation 7 (Ultra Sun and Ultra Moon)",
            label: "Alola (USUM)",
            defaultChecked: true
        },
        {
            value: "galar",
            dataShortName: "Gal",
            labelTip: "Generation 8 (Sword and Shield)",
            label: "Galar",
            defaultChecked: true
        },
        {
            value: "hisui",
            dataShortName: "His",
            labelTip: "Generation 8 (Legends: Arceus)",
            label: "Hisui",
            defaultChecked: true
        },
        {
            value: "paldea",
            dataShortName: "Pal",
            labelTip: "Generation 9 (Scarlet and Violet)",
            label: "Paldea",
            defaultChecked: true
        },
        {
            value: "kitakami",
            dataShortName: "Kit",
            labelTip: "Generation 9 (Scarlet and Violet: Teal Mask)",
            label: "Kitakami",
            defaultChecked: true
        },
        {
            value: "blueberry",
            dataShortName: "Blu_Ac",
            labelTip: "Generation 9 (Scarlet and Violet: Indigo Disk)",
            label: "Blueberry Academy",
            defaultChecked: true
        },
        {
            value: "notSpecified",
            dataShortName: "Unkn",
            labelTip: "Generation is not specified in PokeApi data.",
            label: "Unknown Data ",
            defaultChecked: true
        }
    ]
}

const RegionsOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return (
        <TipLabelDropdown
            {...regionsOptionProps}
            defaultSelected={defaultSelected}
        />)
}

// Types option
const typesOptionProps: TipLabelDropdownProps = {
    id: "types",
    dataClickTip: "Select the type(s) that the Pokémon can have. It only needs to match one of the selected types.",
    labelContent: "Types",
    dataPluralName: "Types",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Types",
    options: [
        {
            value: "all",
            defaultChecked: true,
            labelTip: "",
            dataSelectAll: "true",
            label: "All Types"
        },
        {
            value: "bug",
            dataShortName: "Bug",
            defaultChecked: true,
            labelTip: "",
            label: "Bug"
        },
        {
            value: "dark",
            dataShortName: "Dar",
            defaultChecked: true,
            labelTip: "",
            label: "Dark"
        },
        {
            value: "dragon",
            dataShortName: "Dra",
            defaultChecked: true,
            labelTip: "",
            label: "Dragon"
        },
        {
            value: "electric",
            dataShortName: "Ele",
            defaultChecked: true,
            labelTip: "",
            label: "Electric"
        },
        {
            value: "fairy",
            dataShortName: "Fai",
            defaultChecked: true,
            labelTip: "",
            label: "Fairy"
        },
        {
            value: "fighting",
            dataShortName: "Fig",
            defaultChecked: true,
            labelTip: "",
            label: "Fighting"
        },
        {
            value: "fire",
            dataShortName: "Fir",
            defaultChecked: true,
            labelTip: "",
            label: "Fire"
        },
        {
            value: "flying",
            dataShortName: "Fly",
            defaultChecked: true,
            labelTip: "",
            label: "Flying"
        },
        {
            value: "ghost",
            dataShortName: "Gho",
            defaultChecked: true,
            labelTip: "",
            label: "Ghost"
        },
        {
            value: "grass",
            dataShortName: "Gra",
            defaultChecked: true,
            labelTip: "",
            label: "Grass"
        },
        {
            value: "ground",
            dataShortName: "Gro",
            defaultChecked: true,
            labelTip: "",
            label: "Ground"
        },
        {
            value: "ice",
            dataShortName: "Ice",
            defaultChecked: true,
            labelTip: "",
            label: "Ice"
        },
        {
            value: "normal",
            dataShortName: "Nor",
            defaultChecked: true,
            labelTip: "",
            label: "Normal"
        },
        {
            value: "poison",
            dataShortName: "Poi",
            defaultChecked: true,
            labelTip: "",
            label: "Poison"
        },
        {
            value: "psychic",
            dataShortName: "Psy",
            defaultChecked: true,
            labelTip: "",
            label: "Psychic"
        },
        {
            value: "rock",
            dataShortName: "Roc",
            defaultChecked: true,
            labelTip: "",
            label: "Rock"
        },
        {
            value: "steel",
            dataShortName: "Ste",
            defaultChecked: true,
            labelTip: "",
            label: "Steel"
        },
        {
            value: "water",
            dataShortName: "Wat",
            defaultChecked: true,
            labelTip: "",
            label: "Water"
        }
    ]
}

const TypesOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...typesOptionProps} defaultSelected={defaultSelected} />
}

// Forms option
const formsOptionProps: TipLabelDropdownProps = {
    id: "forms",
    dataClickTip: "Specify the form of the Pokémon, like Mega Evolutions or Gigantamax.",
    labelContent: "Forms",
    dataPluralName: "Forms",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Forms",
    options: [
        {
            value: "all",
            defaultChecked: true,
            labelTip: "",
            label: "All Forms",
            dataSelectAll: "true",
        },
        {
            value: "normal",
            dataShortName: "Norm",
            defaultChecked: true,
            labelTip: "The standard, base forms of Pokémon as they appear in most of the games.",
            label: "Normal Forms"
        },
        {
            value: "mega",
            dataShortName: "Mega",
            defaultChecked: true,
            labelTip: "A temporary evolution that some Pokémon can undergo in battle.",
            label: "Mega Evolutions"
        },
        {
            value: "gmax",
            dataShortName: "Gmax",
            defaultChecked: true,
            labelTip: "A special transformation exclusive to Galar region Pokémon, making them gigantic and granting them unique Gigantamax moves.",
            label: "Gigantamax Forms"
        },
        {
            value: "other",
            dataShortName: "Alte",
            defaultChecked: true,
            labelTip: "Other alternate forms, such as regional forms, etc.",
            label: "Alternate Forms"
        }
    ]
}

const FormsOption: React.FC<{ fixedSelected?: string[], defaultSelected?: string[] }> = ({
    fixedSelected,
    defaultSelected
}) => {
    return <TipLabelDropdown {...formsOptionProps} fixedSelected={fixedSelected} defaultSelected={defaultSelected} />
}

// Rarity option
const rarityOptionProps: TipLabelDropdownProps = {
    id: "rarity",
    dataClickTip: "Set the rarity level for the Pokémon, such as Normal, Legendary, or Mythical.",
    labelContent: "Rarity",
    dataPluralName: "Rarity",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Rarity",
    options: [
        {
            value: "all",
            defaultChecked: true,
            labelTip: "",
            label: "All Rarity",
            dataSelectAll: "true",
        },
        {
            value: "0",
            dataShortName: "Norm",
            defaultChecked: true,
            labelTip: "",
            label: "Normal"
        },
        {
            value: "1",
            dataShortName: "SubL",
            defaultChecked: true,
            labelTip: "",
            label: "SubLegendary"
        },
        {
            value: "2",
            dataShortName: "Legd",
            defaultChecked: true,
            labelTip: "",
            label: "Legendary"
        },
        {
            value: "3",
            dataShortName: "Myth",
            defaultChecked: true,
            labelTip: "",
            label: "Mythical"
        },
        {
            value: "4",
            dataShortName: "Para",
            defaultChecked: true,
            labelTip: "",
            label: "Paradox"
        },
        {
            value: "5",
            dataShortName: "UltrB",
            defaultChecked: true,
            labelTip: "",
            label: "UltraBeast"
        }
    ]
}

const RarityOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...rarityOptionProps} defaultSelected={defaultSelected} />
}

// Rarity option
const gameVersionsOptionProps: TipLabelDropdownProps = {
    id: "gameVersions",
    dataClickTip: "Select the game version from which you'd like to randomly generate a Pokémon. <br /> This filter specifies the game versions that provide the Pokémon, rather than the versions where the Pokémon was first introduced.",
    labelContent: "GameVersion",
    dataPluralName: "GameVersions",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All GameVersions",
    options: [
        {
            value: "all",
            defaultChecked: true,
            labelTip: "",
            label: "All GameVersions",
            dataSelectAll: "true",
        },
        {
            value: "red",
            dataShortName: "Red",
            defaultChecked: true,
            labelTip: "Generation I (Released in 1996): First in the series, introducing the world of Pokémon.",
            label: "Red"
        },
        {
            value: "blue",
            dataShortName: "Blue",
            defaultChecked: true,
            labelTip: "Generation I (Released in 1996): Counterpart to Red, offering slightly different Pokémon.",
            label: "Blue"
        },
        {
            value: "yellow",
            dataShortName: "Yell",
            defaultChecked: true,
            labelTip: "Generation I (Released in 1998): Enhanced version with Pikachu as the starter Pokémon.",
            label: "Yellow"
        },
        {
            value: "gold",
            dataShortName: "Gold",
            defaultChecked: true,
            labelTip: "Generation II (Released in 1999): Introduced the Johto region and 100 new Pokémon.",
            label: "Gold"
        },
        {
            value: "silver",
            dataShortName: "Slvr",
            defaultChecked: true,
            labelTip: "Generation II (Released in 1999): Counterpart to Gold, offering different legendary Pokémon.",
            label: "Silver"
        },
        {
            value: "crystal",
            dataShortName: "Crys",
            defaultChecked: true,
            labelTip: "Generation II (Released in 2000): First Pokémon game to allow choosing the player's gender.",
            label: "Crystal"
        },
        {
            value: "ruby",
            dataShortName: "Ruby",
            defaultChecked: true,
            labelTip: "Generation III (Released in 2002): Introduced the Hoenn region with double battles.",
            label: "Ruby"
        },
        {
            value: "sapphire",
            dataShortName: "Saph",
            defaultChecked: true,
            labelTip: "Generation III (Released in 2002): Counterpart to Ruby, with different legendary Pokémon.",
            label: "Sapphire"
        },
        {
            value: "firered",
            dataShortName: "FR",
            defaultChecked: true,
            labelTip: "Generation III (Released in 2004): Remake of the original Red with updated graphics and mechanics.",
            label: "Firered"
        },
        {
            value: "leafgreen",
            dataShortName: "Leaf",
            defaultChecked: true,
            labelTip: "Generation III (Released in 2004): Remake of Blue, also known as Green in Japan.",
            label: "Leafgreen"
        },
        {
            value: "emerald",
            dataShortName: "Emld",
            defaultChecked: true,
            labelTip: "Generation III (Released in 2004): Combined features of Ruby and Sapphire with added content.",
            label: "Emerald"
        },
        {
            value: "diamond",
            dataShortName: "Diam",
            defaultChecked: true,
            labelTip: "Generation IV (Released in 2006): Introduced the Sinnoh region and online trading.",
            label: "Diamond"
        },
        {
            value: "pearl",
            dataShortName: "Pear",
            defaultChecked: true,
            labelTip: "Generation IV (Released in 2006): Counterpart to Diamond with different legendary Pokémon.",
            label: "Pearl"
        },
        {
            value: "platinum",
            dataShortName: "Plat",
            defaultChecked: true,
            labelTip: "Generation IV (Released in 2008): Enhanced version of Diamond and Pearl with new content.",
            label: "Platinum"
        },
        {
            value: "heartgold",
            dataShortName: "HG",
            defaultChecked: true,
            labelTip: "Generation IV (Released in 2009): Remake of Gold with updated graphics and features.",
            label: "Heartgold"
        },
        {
            value: "soulsilver",
            dataShortName: "SS",
            defaultChecked: true,
            labelTip: "Generation IV (Released in 2009): Remake of Silver, offering enhanced features and graphics.",
            label: "Soulsilver"
        },
        {
            value: "black",
            dataShortName: "Blck",
            defaultChecked: true,
            labelTip: "Generation V (Released in 2010): Introduced the Unova region with 156 new Pokémon.",
            label: "Black"
        },
        {
            value: "white",
            dataShortName: "Wht",
            defaultChecked: true,
            labelTip: "Generation V (Released in 2010): Counterpart to Black, featuring different Pokémon.",
            label: "White"
        },
        {
            value: "black-2",
            dataShortName: "B2",
            defaultChecked: true,
            labelTip: "Generation V (Released in 2012): Sequel to Black with a new storyline and features.",
            label: "Black-2"
        },
        {
            value: "white-2",
            dataShortName: "W2",
            defaultChecked: true,
            labelTip: "Generation V (Released in 2012): Sequel to White, continuing the Unova region adventure.",
            label: "White-2"
        },
        {
            value: "omega-ruby",
            dataShortName: "OR",
            defaultChecked: true,
            labelTip: "Generation VI (Released in 2014): Remake of Ruby with updated features and Mega Evolution.",
            label: "Omega-ruby"
        },
        {
            value: "notSpecified",
            dataShortName: "Unkn",
            defaultChecked: true,
            labelTip: "",
            label: "Unknown Data"
        }
    ]
}

// gameVersion option
const GameVersionOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...gameVersionsOptionProps} defaultSelected={defaultSelected} labelTextClassName="mobile-text-2xs" />
}

// Height option
const heightProps: TipLabelNumRangeProps = {
    "tipLabelProps": {
        "forHtmlId": "height",
        "dataClickTip": "Set the height range in meters for the Pokémon.",
        "labelContent": "Height"
    },
    "numRangeProps": {
        id: "height",
        "abbr": "height",
        "min": "0",
        "max": "100",
        "min-default": "0",
        "max-default": "100",
        "step": "0.1"
    }
}

const HeightOption: React.FC = () => {
    return <TipLabelNumRange {...heightProps} />
}

// Weight option
const weightProps: TipLabelNumRangeProps = {
    "tipLabelProps": {
        "forHtmlId": "weight",
        "dataClickTip": "Set the weight range in kilograms for Pokémon.",
        "labelContent": "Weight"
    },
    "numRangeProps": {
        id: "weight",
        "abbr": "weight",
        "min": "0",
        "max": "1000",
        "min-default": "0",
        "max-default": "1000"
    }
}

const WeightOption: React.FC = () => {
    return <TipLabelNumRange {...weightProps} />
}

// generation option
const generationOptionProps: TipLabelDropdownProps = {
    id: "generations",
    dataClickTip: "Pick the game generations the Pokémon was introduced in.",
    labelContent: "Generation",
    dataPluralName: "Generations",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Gens",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            labelTip: "",
            label: "All Generations"
        },
        {
            value: "1",
            dataShortName: "Gen1",
            defaultChecked: true,
            labelTip: "Generation 1 (Red, Blue, and Yellow)",
            label: "Generation-i"
        },
        {
            value: "2",
            dataShortName: "Gen2",
            defaultChecked: true,
            labelTip: "Generation 2 (Gold, Silver, and Crystal)",
            label: "Generation-ii"
        },
        {
            value: "3",
            dataShortName: "Gen3",
            defaultChecked: true,
            labelTip: "Generation 3 (Ruby, Sapphire, and Emerald)",
            label: "Generation-iii"
        },
        {
            value: "4",
            dataShortName: "Gen4",
            defaultChecked: true,
            labelTip: "Generation 4 (Diamond, Pearl, Platinum)",
            label: "Generation-iv"
        },
        {
            value: "5",
            dataShortName: "Gen5",
            defaultChecked: true,
            labelTip: "Generation 5 (Black and White, Black 2 and White 2)",
            label: "Generation-v"
        },
        {
            value: "6",
            dataShortName: "Gen6",
            defaultChecked: true,
            labelTip: "Generation 6 (X and Y)",
            label: "Generation-vi"
        },
        {
            value: "7",
            dataShortName: "Gen7",
            defaultChecked: true,
            labelTip: "Generation 7 (Sun and Moon, Ultra Sun and Ultra Moon)",
            label: "Generation-vii"
        },
        {
            value: "8",
            dataShortName: "Gen8",
            defaultChecked: true,
            labelTip: "Generation 8 (Sword and Shield, Legends: Arceus)",
            label: "Generation-viii"
        },
        {
            value: "9",
            dataShortName: "Gen9",
            defaultChecked: true,
            labelTip: "Generation 9 (Scarlet and Violet, Scarlet and Violet: Teal Mask, Scarlet and Violet: Indigo Disk)",
            label: "Generation-ix"
        }
    ]
}

const GenerationOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return (
        <TipLabelDropdown
            {...generationOptionProps}
            defaultSelected={defaultSelected}
            labelTextClassName="mobile-text-xs"
        />
    )
}

// colors option
const colorsOptionProps: TipLabelDropdownProps = {
    id: "colors",
    dataClickTip: "Choose the colors of the Pokémon.",
    labelContent: "Colors",
    dataPluralName: "Colors",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Colors",
    options: [
        {
            value: "all",
            defaultChecked: true,
            labelTip: "",
            label: "All Colors",
            dataSelectAll: "true"
        },
        {
            value: "black",
            dataShortName: "Bla",
            defaultChecked: true,
            labelTip: "",
            label: "Black"
        },
        {
            value: "blue",
            dataShortName: "Blu",
            defaultChecked: true,
            labelTip: "",
            label: "Blue"
        },
        {
            value: "brown",
            dataShortName: "Bro",
            defaultChecked: true,
            labelTip: "",
            label: "Brown"
        },
        {
            value: "gray",
            dataShortName: "Gra",
            defaultChecked: true,
            labelTip: "",
            label: "Gray"
        },
        {
            value: "green",
            dataShortName: "Gre",
            defaultChecked: true,
            labelTip: "",
            label: "Green"
        },
        {
            value: "pink",
            dataShortName: "Pin",
            defaultChecked: true,
            labelTip: "",
            label: "Pink"
        },
        {
            value: "purple",
            dataShortName: "Pur",
            defaultChecked: true,
            labelTip: "",
            label: "Purple"
        },
        {
            value: "red",
            dataShortName: "Red",
            defaultChecked: true,
            labelTip: "",
            label: "Red"
        },
        {
            value: "white",
            dataShortName: "Whi",
            defaultChecked: true,
            labelTip: "",
            label: "White"
        },
        {
            value: "yellow",
            dataShortName: "Yel",
            defaultChecked: true,
            labelTip: "",
            label: "Yellow"
        }
    ]
}

const ColorsOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...colorsOptionProps} defaultSelected={defaultSelected} />
}

// envolves option
const envolvesOptionProps: TipLabelDropdownProps = {
    id: "envolves",
    dataClickTip: "Set the evolution stage of the Pokémon.",
    labelContent: "Envolves",
    dataPluralName: "Envolves",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Envolves",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            labelTip: "",
            label: "All Envolves"
        },
        {
            value: "0",
            dataShortName: "Zero",
            defaultChecked: true,
            labelTip: "",
            label: "Unevolved"
        },
        {
            value: "1",
            dataShortName: "Once",
            defaultChecked: true,
            labelTip: "",
            label: "Envolved Once"
        },
        {
            value: "2",
            dataShortName: "Twice",
            defaultChecked: true,
            labelTip: "",
            label: "Envolved Twice"
        }
    ]
}

const EnvolvesOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...envolvesOptionProps} defaultSelected={defaultSelected} />
}

// baby option
const babyOptionProps: TipLabelDropdownProps = {
    id: "baby",
    dataClickTip: "Specify whether the generated Pokémon is a baby Pokémon.",
    labelContent: "Baby",
    dataPluralName: "BabyOrNot",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All BabyOrNot",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            labelTip: "",
            label: "All BabyOrNot"
        },
        {
            value: "yes",
            dataShortName: "Yes",
            defaultChecked: true,
            labelTip: "",
            label: "Baby"
        },
        {
            value: "no",
            dataShortName: "No",
            defaultChecked: true,
            labelTip: "",
            label: "Not Baby"
        }
    ]
}

const BabyOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...babyOptionProps} defaultSelected={defaultSelected} />
}

// growthRate option
const growthRateProps: TipLabelDropdownProps = {
    id: "growthRate",
    dataClickTip: "Select the growth rate category for the Pokémon.",
    labelContent: "GrowRate",
    dataPluralName: "Growth",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Growth",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            labelTip: "",
            label: "All GrowthRate"
        },
        {
            value: "slow",
            defaultChecked: true,
            labelTip: "",
            label: "Slow"
        },
        {
            value: "medium",
            dataShortName: "Med",
            defaultChecked: true,
            labelTip: "",
            label: "Medium"
        },
        {
            value: "fast",
            defaultChecked: true,
            labelTip: "",
            label: "Fast"
        },
        {
            value: "medium-slow",
            dataShortName: "Med_S",
            defaultChecked: true,
            labelTip: "",
            label: "Medium Slow"
        },
        {
            value: "slow-then-very-fast",
            dataShortName: "Slow_F",
            defaultChecked: true,
            labelTip: "",
            label: "Slow Then Very Fast"
        },
        {
            value: "fast-then-very-slow",
            dataShortName: "Fast_S",
            defaultChecked: true,
            labelTip: "",
            label: "Fast Then Very Slow"
        }
    ]
}

const GrowthRateOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...growthRateProps} defaultSelected={defaultSelected} />
}

// habitats option
const habitatsOptionProps: TipLabelDropdownProps = {
    id: "habitats",
    dataClickTip: "Choose the habitats of generated Pokémons.",
    labelContent: "Habitats",
    dataPluralName: "Habitats",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Habitats",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            labelTip: "",
            label: "All Habitats"
        },
        {
            value: "cave",
            dataShortName: "Cave",
            defaultChecked: true,
            labelTip: "",
            label: "Cave"
        },
        {
            value: "forest",
            dataShortName: "Fore",
            defaultChecked: true,
            labelTip: "",
            label: "Forest"
        },
        {
            value: "grassland",
            dataShortName: "Gras",
            defaultChecked: true,
            labelTip: "",
            label: "Grassland"
        },
        {
            value: "mountain",
            dataShortName: "Moun",
            defaultChecked: true,
            labelTip: "",
            label: "Mountain"
        },
        {
            value: "rare",
            dataShortName: "Rare",
            defaultChecked: true,
            labelTip: "",
            label: "Rare"
        },
        {
            value: "rough-terrain",
            dataShortName: "RougT",
            defaultChecked: true,
            labelTip: "",
            label: "Rough Terrain"
        },
        {
            value: "sea",
            dataShortName: "Sea",
            defaultChecked: true,
            labelTip: "",
            label: "Sea"
        },
        {
            value: "urban",
            dataShortName: "Urba",
            defaultChecked: true,
            labelTip: "",
            label: "Urban"
        },
        {
            value: "waters-edge",
            dataShortName: "WateE",
            defaultChecked: true,
            labelTip: "",
            label: "Waters Edge"
        },
        {
            value: "notSpecified",
            dataShortName: "Unkn",
            defaultChecked: true,
            labelTip: "",
            label: "Unknown Data"
        }
    ]
}

const HabitatsOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...habitatsOptionProps} defaultSelected={defaultSelected} />
}

// eggGroup option
const eggGroupOptionProps: TipLabelDropdownProps = {
    id: "eggGroup",
    dataClickTip: "Specify the egg group for breeding compatibility.",
    labelContent: "EggGroup",
    dataPluralName: "EggGroup",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All EggGroups",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            labelTip: "",
            label: "All EggGroups"
        },
        {
            value: "monster",
            dataShortName: "Mons",
            defaultChecked: true,
            labelTip: "",
            label: "Monster"
        },
        {
            value: "water1",
            dataShortName: "Wat1",
            defaultChecked: true,
            labelTip: "",
            label: "Water1"
        },
        {
            value: "water2",
            dataShortName: "Wat2",
            defaultChecked: true,
            labelTip: "",
            label: "Water2"
        },
        {
            value: "water3",
            dataShortName: "Wat3",
            defaultChecked: true,
            labelTip: "",
            label: "Water3"
        },
        {
            value: "bug",
            dataShortName: "Bug",
            defaultChecked: true,
            labelTip: "",
            label: "Bug"
        },
        {
            value: "flying",
            dataShortName: "Flyi",
            defaultChecked: true,
            labelTip: "",
            label: "Flying"
        },
        {
            value: "ground",
            dataShortName: "Grou",
            defaultChecked: true,
            labelTip: "",
            label: "Ground"
        },
        {
            value: "fairy",
            dataShortName: "Fair",
            defaultChecked: true,
            labelTip: "",
            label: "Fairy"
        },
        {
            value: "plant",
            dataShortName: "Plan",
            defaultChecked: true,
            labelTip: "",
            label: "Plant"
        },
        {
            value: "humanshape",
            dataShortName: "Huma",
            defaultChecked: true,
            labelTip: "",
            label: "Humanshape"
        },
        {
            value: "mineral",
            dataShortName: "Mine",
            defaultChecked: true,
            labelTip: "",
            label: "Mineral"
        },
        {
            value: "indeterminate",
            dataShortName: "Inde",
            defaultChecked: true,
            labelTip: "",
            label: "Indeterminate"
        },
        {
            value: "ditto",
            dataShortName: "Ditt",
            defaultChecked: true,
            labelTip: "",
            label: "Ditto"
        },
        {
            value: "dragon",
            dataShortName: "Drag",
            defaultChecked: true,
            labelTip: "",
            label: "Dragon"
        },
        {
            value: "no-eggs",
            dataShortName: "No-E",
            defaultChecked: true,
            labelTip: "",
            label: "No-Eggs"
        },
        {
            value: "notSpecified",
            dataShortName: "Unkn",
            defaultChecked: true,
            labelTip: "",
            label: "Unknown Data"
        }
    ]
}

const EggGroupOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...eggGroupOptionProps} defaultSelected={defaultSelected} />
}

// genderRate option
const genderRateOptionProps: TipLabelDropdownProps = {
    id: "genderRate",
    dataClickTip: "Specify the gender rate of generated Pokémons.",
    labelContent: "GendRate",
    dataPluralName: "GenderRate",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All GenderRate",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            labelTip: "",
            label: "All GenderRate"
        },
        {
            value: "0",
            dataShortName: "100%M",
            defaultChecked: true,
            labelTip: "",
            label: "100%Male 0%Female"
        },
        {
            value: "1",
            dataShortName: "87.5%M",
            defaultChecked: true,
            labelTip: "",
            label: "87.5%Male 12.5%Female"
        },
        {
            value: "2",
            dataShortName: "75%M",
            defaultChecked: true,
            labelTip: "",
            label: "75%Male 25%Female"
        },
        {
            value: "4",
            dataShortName: "50%M",
            defaultChecked: true,
            labelTip: "",
            label: "50%Male 50%Female"
        },
        {
            value: "6",
            dataShortName: "25%M",
            defaultChecked: true,
            labelTip: "",
            label: "25%Male 75%Female"
        },
        {
            value: "7",
            dataShortName: "12.5%M",
            defaultChecked: true,
            labelTip: "",
            label: "12.5%Male 87.5%Female"
        },
        {
            value: "8",
            dataShortName: "0%M",
            defaultChecked: true,
            labelTip: "",
            label: "0%Male 100%Female"
        },
        {
            value: "-1",
            dataShortName: "Genl",
            defaultChecked: true,
            labelTip: "",
            label: "Genderless"
        }
    ]
}

const GenderRateOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...genderRateOptionProps} defaultSelected={defaultSelected} />
}
// shape option
const shapeOptionProps: TipLabelDropdownProps = {
    id: "shape",
    dataClickTip: "Pick the body shape category of the Pokémon.",
    labelContent: "Shape",
    dataPluralName: "Shapes",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All Shapes",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            label: "All Shapes"
        },
        {
            value: "ball",
            dataShortName: "Ball",
            defaultChecked: true,
            label: "Ball"
        },
        {
            value: "squiggle",
            dataShortName: "Squi",
            defaultChecked: true,
            label: "Squiggle"
        },
        {
            value: "fish",
            dataShortName: "Fish",
            defaultChecked: true,
            label: "Fish"
        },
        {
            value: "arms",
            dataShortName: "Arms",
            defaultChecked: true,
            label: "Arms"
        },
        {
            value: "blob",
            dataShortName: "Blob",
            defaultChecked: true,
            label: "Blob"
        },
        {
            value: "upright",
            dataShortName: "Upri",
            defaultChecked: true,
            label: "Upright"
        },
        {
            value: "legs",
            dataShortName: "Legs",
            defaultChecked: true,
            label: "Legs"
        },
        {
            value: "quadruped",
            dataShortName: "Quad",
            defaultChecked: true,
            label: "Quadruped"
        },
        {
            value: "wings",
            dataShortName: "Wing",
            defaultChecked: true,
            label: "Wings"
        },
        {
            value: "tentacles",
            dataShortName: "Tent",
            defaultChecked: true,
            label: "Tentacles"
        },
        {
            value: "heads",
            dataShortName: "Head",
            defaultChecked: true,
            label: "Heads"
        },
        {
            value: "humanoid",
            dataShortName: "Huma",
            defaultChecked: true,
            label: "Humanoid"
        },
        {
            value: "bug-wings",
            dataShortName: "BugW",
            defaultChecked: true,
            label: "Bug Wings"
        },
        {
            value: "armor",
            dataShortName: "Armo",
            defaultChecked: true,
            label: "Armor"
        },
        {
            value: "notSpecified",
            dataShortName: "Unkn",
            defaultChecked: true,
            label: "Unknown Data"
        }
    ]
}

const ShapeOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...shapeOptionProps} defaultSelected={defaultSelected} />
}

// defaultForm option
const defaultFormOptionProps: TipLabelDropdownProps = {
    id: "defaultForm",
    dataClickTip: "Specify the gender rate of generated Pokémons.",
    labelContent: "DefaultForm",
    dataPluralName: "DefaultForm",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All DefaultForm",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            label: "All DefaultFormOrNot"
        },
        {
            value: "yes",
            dataShortName: "Yes",
            defaultChecked: true,
            label: "DefaultForm"
        },
        {
            value: "no",
            dataShortName: "No",
            defaultChecked: true,
            label: "Not DefaultForm"
        }
    ]

}

const DefaultFormOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...defaultFormOptionProps} defaultSelected={defaultSelected} />
}

// formSwitchable option
const formSwitchableOptionProps: TipLabelDropdownProps = {
    id: "formSwitchable",
    dataClickTip: "Whether or Not the Pokémon has multiple forms and can switch between them.",
    labelContent: "FormSwitch",
    dataPluralName: "",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All SwitchableOrNot",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            label: "All SwitchableOrNot"
        },
        {
            value: "yes",
            dataShortName: "Yes",
            defaultChecked: true,
            label: "FormSwitchable"
        },
        {
            value: "no",
            dataShortName: "No",
            defaultChecked: true,
            label: "Not FormSwitchable"
        }
    ]
}

const FormSwitchOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...formSwitchableOptionProps} defaultSelected={defaultSelected} />
}

// hasGenderDiff option
const hasGenderDiffOptionProps: TipLabelDropdownProps = {
    id: "hasGenderDiff",
    dataClickTip: "Whether or Not the Pokémon has visual gender differences.",
    labelContent: "GenderDiff",
    dataPluralName: "",
    dataAllowShowingTwo: "true",
    buttonDefaultShow: "All HasGenderDiffOrNot",
    options: [
        {
            value: "all",
            dataSelectAll: "true",
            defaultChecked: true,
            label: "All HasGenderDiffOrNot"
        },
        {
            value: "yes",
            dataShortName: "Yes",
            defaultChecked: true,
            label: "HasGenderDifferences"
        },
        {
            value: "no",
            dataShortName: "No",
            defaultChecked: true,
            label: "Not HasGenderDifferences"
        }
    ]
}

const GenderDiffOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    return <TipLabelDropdown {...hasGenderDiffOptionProps} defaultSelected={defaultSelected} />
}

// base stats hp
const hpProps: TipLabelNumRangeDropdownProps = {
    "tipLabelProps": {
        "forHtmlId": "hp_range",
        "dataClickTip": "Set the range for the base HP stat, and the effort value.",
        "labelContent": "Hp"
    },
    "numRangeProps": {
        id: "hp_range",
        "abbr": "hp",
        "min": "0",
        "max": "255",
        "min-default": "0",
        "max-default": "255"
    },
    "dropdownProps": {
        "id": "hp_effort",
        "dataPluralName": "Efforts",
        "dataAllowShowingTwo": "true",
        "buttonDefaultShow": "All Efforts",
        "options": [
            {
                "value": "all",
                "label": "All Efforts",
                "dataSelectAll": "true",
                "dataShortName": "all",
                "defaultChecked": true
            },
            {
                "value": "0",
                "label": "0",
                "dataShortName": "0",
                "defaultChecked": true
            },
            {
                "value": "1",
                "label": "1",
                "dataShortName": "1",
                "defaultChecked": true
            },
            {
                "value": "2",
                "label": "2",
                "dataShortName": "2",
                "defaultChecked": true
            },
            {
                "value": "3",
                "label": "3",
                "dataShortName": "3",
                "defaultChecked": true
            }
        ]
    }
}

const BaseStatHpOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    if (defaultSelected != undefined && defaultSelected != null) {
        hpProps.dropdownProps.defaultSelected = defaultSelected
    }
    return <TipLabelNumRangeDropdown {...hpProps} />
}

// base stats attack
const attackProps: TipLabelNumRangeDropdownProps = {
    tipLabelProps: {
        forHtmlId: "attack_range",
        dataClickTip: "Set the range for the base Attack stat, and the effort value.",
        labelContent: "Attack"
    },
    "numRangeProps": {
        id: "attack_range",
        "abbr": "attack",
        "min": "0",
        "max": "255",
        "min-default": "0",
        "max-default": "255"
    },
    "dropdownProps": {
        "id": "attack_effort",
        "dataPluralName": "Efforts",
        "dataAllowShowingTwo": "true",
        "buttonDefaultShow": "All Efforts",
        "options": [
            {
                "value": "all",
                "label": "All Efforts",
                "dataSelectAll": "true",
                "dataShortName": "all",
                "defaultChecked": true
            },
            {
                "value": "0",
                "label": "0",
                "dataShortName": "0",
                "defaultChecked": true
            },
            {
                "value": "1",
                "label": "1",
                "dataShortName": "1",
                "defaultChecked": true
            },
            {
                "value": "2",
                "label": "2",
                "dataShortName": "2",
                "defaultChecked": true
            },
            {
                "value": "3",
                "label": "3",
                "dataShortName": "3",
                "defaultChecked": true
            }
        ]
    }
}

const BaseStatAtkOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    if (defaultSelected != undefined && defaultSelected != null) {
        attackProps.dropdownProps.defaultSelected = defaultSelected
    }
    return <TipLabelNumRangeDropdown {...attackProps} />
}

// base stats defense
const defenseProps: TipLabelNumRangeDropdownProps = {
    "tipLabelProps": {
        "forHtmlId": "defense_range",
        "dataClickTip": "Set the range for the base Defense stat, and the effort value.",
        "labelContent": "Defense"
    },
    "numRangeProps": {
        id: "defense_range",
        "abbr": "defense",
        "min": "0",
        "max": "255",
        "min-default": "0",
        "max-default": "255"
    },
    "dropdownProps": {
        "id": "defense_effort",
        "dataPluralName": "Efforts",
        "dataAllowShowingTwo": "true",
        "buttonDefaultShow": "All Efforts",
        "options": [
            {
                "value": "all",
                "label": "All Efforts",
                "dataSelectAll": "true",
                "dataShortName": "all",
                "defaultChecked": true
            },
            {
                "value": "0",
                "label": "0",
                "dataShortName": "0",
                "defaultChecked": true
            },
            {
                "value": "1",
                "label": "1",
                "dataShortName": "1",
                "defaultChecked": true
            },
            {
                "value": "2",
                "label": "2",
                "dataShortName": "2",
                "defaultChecked": true
            },
            {
                "value": "3",
                "label": "3",
                "dataShortName": "3",
                "defaultChecked": true
            }
        ]
    }
}

const BaseStatDefOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    if (defaultSelected != undefined && defaultSelected != null) {
        defenseProps.dropdownProps.defaultSelected = defaultSelected
    }
    return <TipLabelNumRangeDropdown {...defenseProps} />
}

// base stats spAtk
const spAtkProps: TipLabelNumRangeDropdownProps = {
    "tipLabelProps": {
        "forHtmlId": "spAttack_range",
        "dataClickTip": "Set the range for the base Special Attack stat, and the effort value.",
        "labelContent": "SpAtk"
    },
    "numRangeProps": {
        id: "spAttack_range",
        "abbr": "spAttack",
        "min": "0",
        "max": "255",
        "min-default": "0",
        "max-default": "255"
    },
    "dropdownProps": {
        "id": "spAttack_effort",
        "dataPluralName": "Efforts",
        "dataAllowShowingTwo": "true",
        "buttonDefaultShow": "All Efforts",
        "options": [
            {
                "value": "all",
                "label": "All Efforts",
                "dataSelectAll": "true",
                "dataShortName": "all",
                "defaultChecked": true
            },
            {
                "value": "0",
                "label": "0",
                "dataShortName": "0",
                "defaultChecked": true
            },
            {
                "value": "1",
                "label": "1",
                "dataShortName": "1",
                "defaultChecked": true
            },
            {
                "value": "2",
                "label": "2",
                "dataShortName": "2",
                "defaultChecked": true
            },
            {
                "value": "3",
                "label": "3",
                "dataShortName": "3",
                "defaultChecked": true
            }
        ]
    }
}

const SpAtkOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    if (defaultSelected != undefined && defaultSelected != null) {
        spAtkProps.dropdownProps.defaultSelected = defaultSelected
    }
    return <TipLabelNumRangeDropdown {...spAtkProps} />
}

// base stats spDef
const spDefProps: TipLabelNumRangeDropdownProps = {
    "tipLabelProps": {
        "forHtmlId": "spDefense_range",
        "dataClickTip": "Set the range for the base Special Defense stat, and the effort value.",
        "labelContent": "SpDef"
    },
    "numRangeProps": {
        id: "spDefense_range",
        "abbr": "spDefense",
        "min": "0",
        "max": "255",
        "min-default": "0",
        "max-default": "255"
    },
    "dropdownProps": {
        "id": "spDefense_effort",
        "dataPluralName": "Efforts",
        "dataAllowShowingTwo": "true",
        "buttonDefaultShow": "All Efforts",
        "options": [
            {
                "value": "all",
                "label": "All Efforts",
                "dataSelectAll": "true",
                "dataShortName": "all",
                "defaultChecked": true
            },
            {
                "value": "0",
                "label": "0",
                "dataShortName": "0",
                "defaultChecked": true
            },
            {
                "value": "1",
                "label": "1",
                "dataShortName": "1",
                "defaultChecked": true
            },
            {
                "value": "2",
                "label": "2",
                "dataShortName": "2",
                "defaultChecked": true
            },
            {
                "value": "3",
                "label": "3",
                "dataShortName": "3",
                "defaultChecked": true
            }
        ]
    }
}

const SpDefOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    if (defaultSelected != undefined && defaultSelected != null) {
        spDefProps.dropdownProps.defaultSelected = defaultSelected
    }
    return <TipLabelNumRangeDropdown {...spDefProps} />
}

// base stats speed
const speedProps: TipLabelNumRangeDropdownProps = {
    "tipLabelProps": {
        "forHtmlId": "speed_range",
        "dataClickTip": "Set the range for the base Speed stat, and the effort value.",
        "labelContent": "Speed"
    },
    "numRangeProps": {
        id: "speed_range",
        "abbr": "speed",
        "min": "0",
        "max": "255",
        "min-default": "0",
        "max-default": "255"
    },
    "dropdownProps": {
        "id": "speed_effort",
        "dataPluralName": "Efforts",
        "dataAllowShowingTwo": "true",
        "buttonDefaultShow": "All Efforts",
        "options": [
            {
                "value": "all",
                "label": "All Efforts",
                "dataSelectAll": "true",
                "dataShortName": "all",
                "defaultChecked": true
            },
            {
                "value": "0",
                "label": "0",
                "dataShortName": "0",
                "defaultChecked": true
            },
            {
                "value": "1",
                "label": "1",
                "dataShortName": "1",
                "defaultChecked": true
            },
            {
                "value": "2",
                "label": "2",
                "dataShortName": "2",
                "defaultChecked": true
            },
            {
                "value": "3",
                "label": "3",
                "dataShortName": "3",
                "defaultChecked": true
            }
        ]
    }
}

const BaseStatSpeedOption: React.FC<{ defaultSelected?: string[] }> = ({
    defaultSelected
}) => {
    if (defaultSelected != undefined && defaultSelected != null) {
        speedProps.dropdownProps.defaultSelected = defaultSelected
    }
    return <TipLabelNumRangeDropdown {...speedProps} />
}

// baseHappiness
const baseHappinessProps: TipLabelNumRangeProps = {
    "tipLabelProps": {
        "forHtmlId": "baseHappiness",
        "dataClickTip": "Set the base happiness range of generated Pokémons.",
        "labelContent": "BaseHappy"
    },
    "numRangeProps": {
        id: "baseHappiness",
        "abbr": "baseHappiness",
        "min": "0",
        "max": "140",
        "min-default": "0",
        "max-default": "140"
    }
}

const BaseHappinessOption: React.FC = () => {
    return <TipLabelNumRange {...baseHappinessProps} />
}

// captureRate
const captureRateProps: TipLabelNumRangeProps = {
    "tipLabelProps": {
        "forHtmlId": "captureRate",
        "dataClickTip": "Set the base capture rate range of the Pokémon, up to 255. The higher the number, the easier the catch.",
        "labelContent": "CatchRate"
    },
    "numRangeProps": {
        id: "captureRate",
        "abbr": "captureRate",
        "min": "0",
        "max": "255",
        "min-default": "0",
        "max-default": "255"
    }
}

const CaptureRateOption: React.FC = () => {
    return <TipLabelNumRange {...captureRateProps} />
}

// hatchCounter
const hatchCounterProps: TipLabelNumRangeProps = {
    "tipLabelProps": {
        "forHtmlId": "hatchCounter",
        "dataClickTip": "Set the number of cycles needed for the Pokémon to hatch.",
        "labelContent": "HatchCount"
    },
    "numRangeProps": {
        id: "hatchCounter",
        "abbr": "hatchCounter",
        "min": "0",
        "max": "120",
        "min-default": "0",
        "max-default": "120"
    }
}

const HatchCounterOption: React.FC = () => {
    return <TipLabelNumRange {...hatchCounterProps} />
}

