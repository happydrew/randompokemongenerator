export { GeneratorTool };
import '../../styles/generator-tool.css';
import React, { useEffect } from 'react';
import {
    generateRandom, expandMoreOptions, collapseMoreOptions, expandMoreShowOptions, collapseMoreShowOptions,
    displayPrevious, displayNext, toggleShinyDisplay, clearShinies, onDOMContentLoad
} from '@/code/generator-tool/random';
import {
    RegionsOption, TypesOption, FormsOption, RarityOption, HeightOption, WeightOption, GenerationOption,
    ColorsOption, EnvolvesOption, BabyOption, GrowthRateOption, HabitatsOption, EggGroupOption, GenderRateOption,
    ShapeOption, DefaultFormOption, FormSwitchOption, GenderDiffOption, BaseStatHpOption, BaseStatAtkOption,
    BaseStatDefOption, SpAtkOption, SpDefOption, BaseStatSpeedOption, BaseHappinessOption, CaptureRateOption,
    HatchCounterOption, GameVersionOption
} from './filter-options';

import {
    ShowGeneration, ShowRegion, Natures, BackImg, BackColor, ShowAblilites,
    Sprites, ShowRarity, ShowTypes, ShowStats, Evs, Ivs, Cries, ShinyProb, ShinyTip,
    Pokedex
} from './display-options';

import Link from 'next/link';

const handleToggleShinyClick = () => {
    toggleShinyDisplay();
}

//@ts-expect-error
const handleGenerateClick = (event) => {
    event.preventDefault();
    generateRandom();
}

// event listener for SelectAll button in display options
const handleSelectAllDisplayOptionsClick = () => {
    const displayCheckBoxes = document.querySelectorAll<HTMLInputElement>('#show-options-form input[type="checkbox"]');
    if (displayCheckBoxes) {
        displayCheckBoxes.forEach((checkbox) => {
            checkbox.checked = true;
        })
    }
}

interface GeneratorToolProps {
    regionDefaultSelected?: string[];
    typesDefaultSelected?: string[];
    formsDefaultSelected?: string[];
    rarityDefaultSelected?: string[];
    generationDefaultSelected?: string[];
    colorsDefaultSelected?: string[];
    envolvesDefaultSelected?: string[];
    babyDefaultSelected?: string[];
    growthRateDefaultSelected?: string[];
    habitatsDefaultSelected?: string[];
    eggGroupDefaultSelected?: string[];
    genderRateDefaultSelected?: string[];
    shapeDefaultSelected?: string[];
    defaultFormDefaultSelected?: string[];
    formSwitchDefaultSelected?: string[];
    genderDiffDefaultSelected?: string[];
    baseStatHpDefaultSelected?: string[];
    baseStatAtkDefaultSelected?: string[];
    baseStatDefDefaultSelected?: string[];
    spAtkDefaultSelected?: string[];
    spDefDefaultSelected?: string[];
    baseStatSpeedDefaultSelected?: string[];
    gameVersionDefaultSelected?: string[];
    nDefaultSelected?: number;
    ssgHtml?: string;
    initGenerate?: boolean;
}

const GeneratorTool: React.FC<GeneratorToolProps> = (props) => {
    useEffect(() => {
        onDOMContentLoad();
        if (props.initGenerate) {
            generateRandom();
        }
    }, []);
    return (
        <div className="generator-tool">
            <header>
                <h1 className="pokemon-title">Random Pok&eacute;mon Generator</h1>
            </header>
            <div className="sub-title">
                <span className="star">★</span>
                Discover the Ultimate Random Pokémon Generator!
            </div>

            {/* filter options */}
            <div className="panel-top-bar-container" id="filter-options-top-bar">
                <h2 className="panel-label" title="Filter Options for Random Pok&eacute;mon Generator.">
                    FilterOptions
                </h2>
                <div className="panel-top-tool-bar-container">
                    <button type="reset" form="filter-options-form" id="filter-options-reset">Reset</button>
                </div>
            </div>
            <form id="filter-options-form" className="menu" onSubmit={handleGenerateClick}>
                <div id="main-options" className="options-panel">
                    <RegionsOption defaultSelected={props.regionDefaultSelected} />
                    <TypesOption defaultSelected={props.typesDefaultSelected} />
                    <FormsOption defaultSelected={props.formsDefaultSelected} />
                    <RarityOption defaultSelected={props.rarityDefaultSelected} />
                    <GenerationOption defaultSelected={props.generationDefaultSelected} />
                    <GameVersionOption defaultSelected={props.gameVersionDefaultSelected} />
                </div>
                <hr id="option-panel-hr" className="default-invisible option-panel-hr" />
                <div id="more-options" className="default-invisible options-panel">
                    <HeightOption />
                    <WeightOption />
                    <ColorsOption defaultSelected={props.colorsDefaultSelected} />
                    <EnvolvesOption defaultSelected={props.envolvesDefaultSelected} />
                    <BabyOption defaultSelected={props.babyDefaultSelected} />
                    <GrowthRateOption defaultSelected={props.growthRateDefaultSelected} />
                    <HabitatsOption defaultSelected={props.habitatsDefaultSelected} />
                    <EggGroupOption defaultSelected={props.eggGroupDefaultSelected} />
                    <GenderRateOption defaultSelected={props.genderRateDefaultSelected} />
                    <ShapeOption defaultSelected={props.shapeDefaultSelected} />
                    <DefaultFormOption defaultSelected={props.defaultFormDefaultSelected} />
                    <FormSwitchOption defaultSelected={props.formSwitchDefaultSelected} />
                    <GenderDiffOption defaultSelected={props.genderDiffDefaultSelected} />
                    <BaseStatHpOption defaultSelected={props.baseStatHpDefaultSelected} />
                    <BaseStatAtkOption defaultSelected={props.baseStatAtkDefaultSelected} />
                    <BaseStatDefOption defaultSelected={props.baseStatDefDefaultSelected} />
                    <SpAtkOption defaultSelected={props.spAtkDefaultSelected} />
                    <SpDefOption defaultSelected={props.spDefDefaultSelected} />
                    <BaseStatSpeedOption defaultSelected={props.baseStatSpeedDefaultSelected} />
                    <BaseHappinessOption />
                    <CaptureRateOption />
                    <HatchCounterOption />
                </div>
            </form>
            <button id="more-button" className="more-button" onClick={expandMoreOptions}>&#x23EC; More Options</button>
            <button id="collapse-more-button" className="more-button default-invisible"
                onClick={collapseMoreOptions}>&#x23EB;Collapse</button>

            {/* display options */}
            <div id="show-option-panel-top-bar" className="panel-top-bar-container">
                <div id="show-option-panel-top-bar-left" className="panel-top-tool-bar-container">
                    <h2 className="panel-label dotted-underline"
                        title="Display options for configuring the display content of the random Pokémon generator, such as whether to display Pokémon images and whether to generate random natures.">
                        DisplayOptions</h2>
                    <button id="show-options-selectAll" onClick={handleSelectAllDisplayOptionsClick}>SelectAll</button>
                </div>
                <div className="panel-top-tool-bar-container">
                    <button type="reset" id="show-options-reset" form="show-options-form">Reset</button>
                </div>
            </div>
            <form action="?" method="get" id="show-options-form" className="menu">
                <div id="main-show-options" className="options-panel">
                    <ShowGeneration />
                    <ShowRegion />
                    <Natures />
                    <BackImg />
                    <BackColor />
                    <ShowAblilites />
                </div>
                <hr id="show-option-panel-hr" className="option-panel-hr default-invisible" />
                <div id="more-show-options" className="options-panel default-invisible">
                    <Pokedex />
                    <Sprites />
                    <ShowRarity />
                    <ShowTypes />
                    <ShowStats />
                    <Evs />
                    <Ivs />
                    <Cries />
                    <ShinyProb />
                    <ShinyTip />
                </div>
            </form >
            <button id="more-show-button" className="more-button" onClick={expandMoreShowOptions}>&#x23EC; More
                Options</button>
            <button id="collapse-more-show-button" className="more-button default-invisible"
                onClick={collapseMoreShowOptions}>&#x23EB;Collapse</button>

            <div className="n_generator" id="n_generator">
                <label htmlFor="n" title="Number of Pokémons to generate randomly.">Num:</label>
                <select form="show-options-form" name="n" id="n" required>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                        <option
                            value={n.toString()}
                            selected={(props.nDefaultSelected ? (props.nDefaultSelected == n) : (n == 6))}
                        >
                            {n}
                        </option>
                    ))}
                </select>
                <input className="generate-button" form="filter-options-form" value="Generate" type="submit" />
            </div>
            <Link className="feedback-link" target="_blank" rel="noopener"
                href="https://github.com/happydrew/randompokemongenerator/issues/new?title=Feedback&labels=feedback">Question?
                Give us feedback →</Link>

            <nav id="history">
                <button className="invisible text" id="previous" onClick={displayPrevious}>&#x23EA; Previous</button>
                <button className="invisible text" id="next" onClick={displayNext}>Next &#x23E9;</button>
            </nav>

            <section id="results" className="display-pokemon-container">
            </section>

            <section
                id="ssgHtml"
                className="display-pokemon-container"
                {...(props.ssgHtml && { dangerouslySetInnerHTML: { __html: props.ssgHtml } })}
            >
            </section>

            <button id="shiny-toggler" className="text is-hiding" onClick={handleToggleShinyClick}>
                <span className="star">★</span>
                <span id="shiny-count">0</span> shiny Pokémon
                <span className="is-showing">&and;</span><span className="is-hiding">&or;</span>
            </button>
            <section id="shiny-container" className="menu hidden">
                <div id="shinies" className="display-pokemon-container"></div>
                <button className="text" onClick={clearShinies}>&#x274C; Clear your shiny Pokémon</button>
            </section>
        </div>
    )
}