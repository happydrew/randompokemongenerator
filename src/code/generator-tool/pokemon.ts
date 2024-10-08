export type { Pokemon, PokemonDetail };
export { displayPokemon, DisplayPokemon, toHtml };

import { getRandomElement, randomInteger, getTrueByProbability } from './utils';
import { ShowParams } from './options';

interface Stats {
	hp: {
		effort: number;
		base_stat: number;
	};
	attack: {
		effort: number;
		base_stat: number;
	};
	defense: {
		effort: number;
		base_stat: number;
	};
	"special-attack": {
		effort: number;
		base_stat: number;
	};
	"special-defense": {
		effort: number;
		base_stat: number;
	};
	speed: {
		effort: number;
		base_stat: number;
	};
}

interface PokemonDetail {
	/** National Pokédex number. */
	id: number;
	speciesGeneration: string;
	region: string[];
	speciesColor: string;
	height: number;
	speciesIsLegendary: number;
	speciesIsMythical: number;
	types: { [key: string]: number };
	stats: Stats;
	abilities: string[];
}

interface Pokemon {
	/** National Pokédex number. */
	id: number;
	/** The display name of this Pokémon. */
	name: string;
}


class DisplayPokemon {
	// @ts-expect-error -- fixme
	id: number;
	// @ts-expect-error -- fixme
	name: string;
	// @ts-expect-error -- fixme
	pokemonDetail: PokemonDetail;
	// @ts-expect-error -- fixme
	showParams: ShowParams;
	nature?: string;
	// @ts-expect-error -- fixme
	typesArray: string[];
	// @ts-expect-error -- fixme
	ivs: {
		[key: string]: number
		// hp?: number,
		// attack?: number,
		// defense?: number,
		// "special-attack"?: number,
		// "special-defense"?: number,
		// speed?: number
	};
	// @ts-expect-error -- fixme
	shiny: boolean;
	// 生成时间（毫秒时间戳）
	// @ts-expect-error -- fixme
	generateTime: number;

	constructor(displayPokemon: DisplayPokemon | null, pokemon?: Pokemon, pokemonDetail?: PokemonDetail, showParams?: ShowParams) {
		if (displayPokemon) {
			Object.assign(this, displayPokemon);
			return;
		} else {
			this.id = pokemon!.id;
			this.name = pokemon!.name;
			this.pokemonDetail = pokemonDetail!;
			this.showParams = showParams!;
			if (showParams!.natures) {
				this.nature = generateNature();
			}
			if (showParams!.ivs) {
				this.ivs = {
					hp: randomInteger(32),
					attack: randomInteger(32),
					defense: randomInteger(32),
					"special-attack": randomInteger(32),
					"special-defense": randomInteger(32),
					speed: randomInteger(32),
				};
				this.ivs.total = this.ivs.hp + this.ivs.attack + this.ivs.defense + this.ivs["special-attack"] + this.ivs["special-defense"] + this.ivs.speed;
			}
			// 以一定的概率生成shiny的pokemon
			// 概率让用户设置？
			this.shiny = getTrueByProbability(showParams!.shinyProb ? showParams!.shinyProb / 4096 : 1.0/4096);
			this.generateTime = Date.now();
		}
	}

	/**
	 * 
	 * @returns 是否极简模式
	 */
	isMinimalist(): boolean {
		return !this.showParams.showGeneration && !this.showParams.showRegion &&
			!this.showParams.background_image && !this.showParams.background_color &&
			!this.showParams.showRarity && !this.showParams.showTypes &&
			!this.showParams.showStats && !this.showParams.evs && !this.showParams.ivs &&
			!this.showParams.showAblilites && !this.showParams.cries;
	}

	toHtml(): string {
		return `<li>
				<div class="pokecard-containter" id="${this.id.toString()}" style="${this.showParams.background_color ? `background-color:${this.getBackgroudColorHex()};` : `background-color:transparent;border:none`}">
					<div class=${this.isMinimalist() ? "pokecard-minimalist" : "pokecard"}>
						<div class="pokecard-pokeimage-container">
						    ${this.showParams.background_image ? `<img class="pokecard-pokeimage-back" src="${this.getBackgroundImage()}" alt=${this.pokemonDetail ? `"back image of pokemon type ${this.getTypesArray()[0]}"` : `""`}>` : ""}
						    ${this.showParams.sprites ? `
							  <img class="pokecard-pokeimage" src="${this.getSpritePathWebp()}"
								alt="random generated pokemon ${this.name}">` : ""}
							${(this.showParams.showRarity && (this.getRarity() === "Mythical" || this.getRarity() === "Legendary")) ? `<div class="pokecard-header-rarity" style="background-color: ${this.getRarityColor()}">${this.getRarity()}</div>` : ""}	
							${this.shiny ? `<div class="pokecard-header-shiny"><span class="star">&starf;</span>Shiny</div>` : ""}  
							${(this.showParams.showTypes && this.pokemonDetail) ? `<div class="pokecard-types-container" style="background: ${this.getTypesArray().length > 1 ? `linear-gradient(105deg, ${this.getTypeBackColor(this.getTypesArray()[0])} 48%, ${this.getTypeBackColor(this.getTypesArray()[1])} calc(48% + 1px))` : this.getTypeBackColor(this.getTypesArray()[0])}">
								<div class="pokecard-type click-tip" data-click-tip="${this.getTypesArray()[0]}" onclick="processClickTipEvent(this,event)" onmouseenter="processMouseEnterTipEvent(this,event)" onmouseleave="processMouseLeaveTipEvent(this,event)" tool-tip-style="color:${this.getTypeBackColor(this.getTypesArray()[0])}">
									<img src="/img/type-icons/40px-${this.getTypesArray()[0]}_icon.png"
										alt="icon of type ${this.getTypesArray()[0]}">
								</div>
							${this.getTypesArray().length > 1 ? `
							    <div class="pokecard-type click-tip" data-click-tip="${this.getTypesArray()[1]}" onclick="processClickTipEvent(this,event)" onmouseenter="processMouseEnterTipEvent(this,event)" onmouseleave="processMouseLeaveTipEvent(this,event)" tool-tip-style="color:${this.getTypeBackColor(this.getTypesArray()[1])}">
									<img src="/img/type-icons/40px-${this.getTypesArray()[1]}_icon.png"
										alt="icon of type ${this.getTypesArray()[1]}">
								</div>`: ""}
							</div>`: ""}
							
							${this.showParams.cries ? `
								<button class="pokecard-cries" onclick="playAudioOnClick(this,event)" data-audio-src="${this.getCriesAudioPath()}"><svg width="24" height="24" viewBox="0 0 24 24"
									focusable="false" class=" NMm5M">
									<path
										d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z">
									</path>
									<path
										d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z">
									</path>
								</svg>
							</button>`: ""}
						</div>
						<div class="pokecard-infobar-container${this.isMinimalist() ? "" : " pokecard-infobar-title"}">
						  <div class="pokecard-infobar pokecard-titile light-scrollbar">
						  ${this.showParams.pokedex ? `<span style="color:#ff8f07;font-weight:bold;font-size:0.9em">#${this.id.toString()}</span>&nbsp;` : ""}
						  ${this.showParams.natures ? `<span class="pokecard-titile-natrue">${this.nature}</span>&nbsp;` : ""}
						  <a href="https://bulbapedia.bulbagarden.net/wiki/${this.name.split("-")[0]}" target="_blank">${this.name}</a>
						  </div>
						</div>
						${(this.showParams.showGeneration || this.showParams.showRegion) ? `
						<div class="pokecard-infobar-container pokecard-infobar-container-genregion">
						    ${this.showParams.showGeneration ? `
							<div class="pokecard-infobar-container pokecard-infobar-container-generation">
							  <div class="pokecard-infobar light-scrollbar">Gen-<span class="pokecard-generation-arabic">${this.getGenerationArabic()}</span></div>
							</div>` : ""}
						    ${this.showParams.showRegion ? `
							<div class="pokecard-infobar-container pokecard-infobar-container-region">
							  <div class="pokecard-infobar light-scrollbar">${this.getRegionText()}</div>
							</div>` : ""}
						</div>`: ""}
						${(this.showParams.showAblilites) ? `
							<div class="pokecard-infobar-container pokecard-infobar-container-abilities">
							  <div class="pokecard-infobar pokecard-abilities light-scrollbar">${this.pokemonDetail ? this.pokemonDetail.abilities.join(", ") : "loading..."}</div>
							</div>` : ""}
						${(this.showParams.showStats || this.showParams.ivs || this.showParams.evs) ?
				`<div class="pokecard-stats">
							<table class="table table-bordered">
								<tbody>
								${this.showParams.ivs ? `
									<tr>
										<td class="col-totle stats-title">IV</td>
										<td class="col-hp">${this.ivs.hp}</td>
										<td class="col-atk">${this.ivs.attack}</td>
										<td class="col-def">${this.ivs.defense}</td>
										<td class="col-spa">${this.ivs["special-attack"]}</td>
										<td class="col-spd">${this.ivs["special-defense"]}</td>
										<td class="col-spe">${this.ivs.speed}</td>
										<td class="col-totle">${this.ivs.total}</td>
									</tr>` : ""}
								${this.showParams.evs ? `
									<tr class="tr-evs">
										<td class="col-totle stats-title">EV</td>
										<td class="col-hp">${this.pokemonDetail ? this.pokemonDetail.stats.hp.effort : "&nbsp;"}</td>
										<td class="col-atk">${this.pokemonDetail ? this.pokemonDetail.stats.attack.effort : "&nbsp;"}</td>
										<td class="col-def">${this.pokemonDetail ? this.pokemonDetail.stats.defense.effort : "&nbsp;"}</td>
										<td class="col-spa">${this.pokemonDetail ? this.pokemonDetail.stats["special-attack"].effort : "&nbsp;"}</td>
										<td class="col-spd">${this.pokemonDetail ? this.pokemonDetail.stats["special-defense"].effort : "&nbsp;"}</td>
										<td class="col-spe">${this.pokemonDetail ? this.pokemonDetail.stats.speed.effort : "&nbsp;"}</td>
										<td class="col-totle">${this.pokemonDetail ? this.pokemonDetail.stats.hp.effort +
						this.pokemonDetail.stats.attack.effort +
						this.pokemonDetail.stats.defense.effort +
						this.pokemonDetail.stats["special-attack"].effort +
						this.pokemonDetail.stats["special-defense"].effort +
						this.pokemonDetail.stats.speed.effort : "&nbsp;"}</td>
									</tr>`: ""}
								${this.showParams.showStats ? `
									<tr class="tr-stats">
										<td class="col-totle stats-title">BS</td>
										<td class="col-hp">${this.pokemonDetail ? this.pokemonDetail.stats.hp.base_stat : "&nbsp;"}</td>
										<td class="col-atk">${this.pokemonDetail ? this.pokemonDetail.stats.attack.base_stat : "&nbsp;"}</td>
										<td class="col-def">${this.pokemonDetail ? this.pokemonDetail.stats.defense.base_stat : "&nbsp;"}</td>
										<td class="col-spa">${this.pokemonDetail ? this.pokemonDetail.stats["special-attack"].base_stat : "&nbsp;"}</td>
										<td class="col-spd">${this.pokemonDetail ? this.pokemonDetail.stats["special-defense"].base_stat : "&nbsp;"}</td>
										<td class="col-spe">${this.pokemonDetail ? this.pokemonDetail.stats.speed.base_stat : "&nbsp;"}</td>
										<td class="col-totle">${this.pokemonDetail ? this.pokemonDetail.stats.hp.base_stat +
						this.pokemonDetail.stats.attack.base_stat +
						this.pokemonDetail.stats.defense.base_stat +
						this.pokemonDetail.stats["special-attack"].base_stat +
						this.pokemonDetail.stats["special-defense"].base_stat +
						this.pokemonDetail.stats.speed.base_stat : "&nbsp;"}</td>
									</tr>` : ""}
									<tr>
										<th class="col-totle"></th>
										<th class="col-hp">HP</th>
										<th class="col-atk">Atk</th>
										<th class="col-def">Def</th>
										<th class="col-spa">SpA</th>
										<th class="col-spd">SpD</th>
										<th class="col-spe">Spe</th>
										<th class="col-totle">Tot</td>
									</tr>
								</tbody>
							</table>
						</div>`: ""}
					</div>
				</div>
			</li>`;
	}

	getCriesAudioPath(): string {
		return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${this.id}.ogg`;
	}

	getBackgroudColorHex(): string {
		if (!this.pokemonDetail) {
			return "transparent";
		} else {
			switch (this.pokemonDetail.speciesColor) {
				case "black":
					return "#000000";
				case "blue":
					return "#0000FF";
				case "brown":
					return "#A52A2A";
				case "gray":
					return "#808080";
				case "green":
					return "#008000";
				case "pink":
					return "#FFC0CB";
				case "purple":
					return "#800080";
				case "red":
					return "#FF0000";
				case "white":
					return "#FFFFFF";
				case "yellow":
					return "#FFFF00";
				default:
					return "transparent";
			}
		}
	}

	getBackgroundImage(): string {
		if (!this.pokemonDetail) {
			return "";
		}
		let firstType = "normal";
		for (const type in this.pokemonDetail.types) {
			if (this.pokemonDetail.types[type] == 1) {
				firstType = type;
				break;
			}
		}
		if (firstType == "stellar" || firstType == "unknown") {
			firstType = "normal";
		}
		return `/img/background-types/type_background_${firstType}.webp`;
	}

	getRarity(): string {
		if (!this.pokemonDetail) {
			return "";
		}
		if (this.pokemonDetail.speciesIsLegendary != undefined && this.pokemonDetail.speciesIsLegendary == 1) {
			return "Legendary";
		} else if (this.pokemonDetail.speciesIsMythical != undefined && this.pokemonDetail.speciesIsMythical == 1) {
			return "Mythical";
		} else {
			return "Normal";
		}
	}

	getRarityColor(): string {
		if (this.pokemonDetail.speciesIsLegendary != undefined && this.pokemonDetail.speciesIsLegendary == 1) {
			return "#ff8500";
		} else if (this.pokemonDetail.speciesIsMythical != undefined && this.pokemonDetail.speciesIsMythical == 1) {
			return "#ff00ff";
		} else {
			return "#b0b0b0";
		}
	}

	getGenrationTextColor(): string | undefined {
		switch (this.pokemonDetail.speciesGeneration) {
			case "1":
				return `background: linear-gradient(to right, #FF0000, #0000FF);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "2":
				return `background: linear-gradient(to right, #FFD700, #C0C0C0);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "3":
				return `background: linear-gradient(to right, #FF6347, #008080);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "4":
				return `background: linear-gradient(to right, #FF6347, #008080);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "5":
				return `background: linear-gradient(to right, #000000, #FFFFFF);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "6":
				return `background: linear-gradient(to right, #FF4500, #4169E1);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "7":
				return `background: linear-gradient(to right, #FFD700, #800080);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "8":
				return `background: linear-gradient(to right, #6A0DAD, #FF69B4);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "9":
				return `background: linear-gradient(to right, #00CED1, #FFA500);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
		}
	}

	getGenerationTextHtml(): string | undefined {
		switch (this.pokemonDetail.speciesGeneration) {
			case "1":
				return `Gen-<span style="${this.getGenrationTextColor()}">I</span>`;
			case "2":
				return `Gen-<span style="${this.getGenrationTextColor()}">II</span>`;
			case "3":
				return `Gen-<span style="${this.getGenrationTextColor()}">III</span>`;
			case "4":
				return `Gen-<span style="${this.getGenrationTextColor()}">IV</span>`;
			case "5":
				return `Gen-<span style="${this.getGenrationTextColor()}">V</span>`;
			case "6":
				return `Gen-<span style="${this.getGenrationTextColor()}">VI</span>`;
			case "7":
				return `Gen-<span style="${this.getGenrationTextColor()}">VII</span>`;
			case "8":
				return `Gen-<span style="${this.getGenrationTextColor()}">VIII</span>`;
			case "9":
				return `Gen-<span style="${this.getGenrationTextColor()}">IX</span>`;
		}
	}

	getGenerationArabic(): string {
		if (!this.pokemonDetail) {
			return "&nbsp;";
		}
		switch (this.pokemonDetail.speciesGeneration) {
			case "1":
				return "I";
			case "2":
				return "II";
			case "3":
				return "III";
			case "4":
				return "IV";
			case "5":
				return "V";
			case "6":
				return "VI";
			case "7":
				return "VII";
			case "8":
				return "VIII";
			case "9":
				return "IX";
			default:
				return "&nbsp;";
		}
	}

	getRegionTextColor(region: string): string {
		switch (region) {
			case "kanto":
				return "color: #FF0000;";
			case "johto":
				return "color: #FFD700;";
			case "hoenn":
				return "color: #008080;";
			case "sinnoh":
				return "color: #808080;";
			case "sinnoh_pt":
				return "color: #D3D3D3;";
			case "unova":
				return `background: linear-gradient(to right, #000000, #FFFFFF);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "unova_b2w2":
				return `background: linear-gradient(to right, #1C1C1C, #F5F5F5);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "kalos":
				return `background: linear-gradient(to right, #FF4500, #4169E1);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "alola":
				return `background: linear-gradient(to right, #FFD700, #1E90FF);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "alola_usum":
				return `background: linear-gradient(to right, #DAA520, #00008B);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "galar":
				return `background: linear-gradient(to right, #6A0DAD, #FF69B4);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "hisui":
				return `color: #CD7F32;`;
			case "paldea":
				return `background: linear-gradient(to right, #00FF7F, #8A2BE2);-webkit-background-clip: text;-webkit-text-fill-color: transparent;`;
			case "kitakami":
				return `color: #FFA500;`;
			case "blueberry":
				return `color: #0000FF;`;
			default:
				return "color: #000000;";
		}
	}

	getRegionTextHtml(): string {
		if (!this.pokemonDetail.region) {
			return "";
		}
		return this.pokemonDetail.region.map(region => {
			return `<span style="${this.getRegionTextColor(region)}">${region}</span>`;
		}).join(",");
	}

	getRegionText(): string {
		if (!this.pokemonDetail) {
			return "loading...";
		}
		if (!this.pokemonDetail.region) {
			return "&nbsp;";
		} else {
			return this.pokemonDetail.region.join(", ");
		}
	}

	getTypeBackColor(type: string): string {
		switch (type) {
			case "normal":
				return "#9fa19f";
			case "fighting":
				return "#ff8000";
			case "flying":
				return "#81b9ef";
			case "poison":
				return "#9141CB";
			case "ground":
				return "#915121";
			case "rock":
				return "#AFA981";
			case "bug":
				return "#91A119";
			case "ghost":
				return "#704170";
			case "steel":
				return "#60A1B8";
			case "fire":
				return "#E62829";
			case "water":
				return "#2980EF";
			case "grass":
				return "#3FA129";
			case "electric":
				return "#FAC000";
			case "psychic":
				return "#EF4179";
			case "ice":
				return "#3DCEF3";
			case "dragon":
				return "#5060E1";
			case "dark":
				return "#624D4E";
			case "fairy":
				return "#EF70EF";
			case "stellar":
				return "#40B5A5";
			case "unknown":
				return "#68A090";
			default:
				return "#9fa19f";
		}
	}

	getTypesArray(): string[] {
		if (!this.typesArray) {
			this.typesArray = []
			let firstType;
			let secondType;
			for (const type in this.pokemonDetail.types) {
				if (this.pokemonDetail.types[type] == 1) {
					firstType = type;
				} else if (this.pokemonDetail.types[type] == 2) {
					secondType = type;
				}
			}
			if (firstType) {
				this.typesArray.push(firstType)
			}
			if (secondType) {
				this.typesArray.push(secondType)
			}
		}
		return this.typesArray;
	}

	toText(): string {
		return `
			${this.showParams.natures ? `<span class="nature">${this.nature}</span>` : ""}
			${this.name}
		`;
	}

	toImage(): string {
		// 后续支持用户选择展示哪种图片
		//const altText = (this.shiny ? "Shiny " : "") + this.name;
		return `<img src="${this.getSpritePathWebp("home")}" alt="${this.name}" title="${this.name}" onerror="this.src='favicon.ico'" />`;
	}

	private getSpritePath(verison: string = "home"): string {
		// 暂时默认使用PokeApi提供的home_front_default, 如果图片访问比较慢，看看别的paokemon数据库，比如Bulbapedia的图片
		switch (verison) {
			case "home": {
				let imgName;
				switch (this.id) {
					case 10182:
						imgName = "845-gulping.png";
						break;
					case 10183:
						imgName = "845-gorging.png";
						break;
					case 10187:
						imgName = "877-hangry.png";
						break;
					case 10192:
						imgName = "893-dada.png";
						break;
					default:
						imgName = this.id + ".png";
				}
				if (this.shiny) {
					return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/' + imgName;
				} else {
					return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + imgName;
				}
			}
			default:
				throw new Error("Invalid sprite version: " + verison);
		}
	}

	private getSpritePathWebp(verison: string = "home"): string {
		// 暂时默认使用PokeApi提供的home_front_default, 如果图片访问比较慢，看看别的paokemon数据库，比如Bulbapedia的图片
		switch (verison) {
			case "home": {
				let imgName;
				switch (this.id) {
					case 10182:
						imgName = "845-gulping.webp";
						break;
					case 10183:
						imgName = "845-gorging.webp";
						break;
					case 10187:
						imgName = "877-hangry.webp";
						break;
					case 10192:
						imgName = "893-dada.webp";
						break;
					default:
						imgName = this.id + ".webp";
				}
				if (this.shiny) {
					//return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/' + imgName;
					return '/img/sprites/master/sprites/pokemon/other/home/shiny/' + imgName;
				} else {
					//return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + imgName;
					return '/img/sprites/master/sprites/pokemon/other/home/' + imgName;
				}
			}
			default:
				throw new Error("Invalid sprite version: " + verison);
		}
	}

	private getSpritePathBackup(verison: string = "home"): string {
		// 暂时默认使用PokeApi提供的home_front_default, 如果图片访问比较慢，看看别的paokemon数据库，比如Bulbapedia的图片
		switch (verison) {
			case "home": {
				let imgName;
				switch (this.id) {
					case 10182:
						imgName = "845-gulping.png";
						break;
					case 10183:
						imgName = "845-gorging.png";
						break;
					case 10187:
						imgName = "877-hangry.png";
						break;
					case 10192:
						imgName = "893-dada.png";
						break;
					default:
						imgName = this.id + ".png";
				}
				if (this.shiny) {
					return 'https://happydrew.github.io/randompokemongenerator-images/sprites/master/sprites/pokemon/other/home/shiny/' + imgName;
				} else {
					return 'https://happydrew.github.io/randompokemongenerator-images/sprites/master/sprites/pokemon/other/home/' + imgName;
				}
			}
			default:
				throw new Error("Invalid sprite version: " + verison);
		}
	}

}

function generateNature(): string {
	return getRandomElement(NATURES);
}

/**
 * 
 * @param displayPokemons 
 * @returns 返回结果区的HTML根元素
 */
function displayPokemon(displayPokemons: DisplayPokemon[] | null, resultsContainer: HTMLElement): HTMLElement {
	if (!displayPokemons) {
		resultsContainer.innerHTML = "An error occurred while generating Pok&eacute;mon.";
	} else if (displayPokemons.length > 0) {
		resultsContainer.innerHTML = toHtml(displayPokemons);
	} else {
		resultsContainer.innerHTML = "No Pok&eacute;mon found.";
	}
	return resultsContainer;
}

/** Converts a JSON array of Pokémon into an HTML ordered list. */
function toHtml(displayPokemons: DisplayPokemon[]): string {
	//const includeSprites = spritesCheckbox.checked;
	return `<ol>${displayPokemons.map(p => p.toHtml()).join("")}</ol>`;
}

const NATURES = ["Adamant", "Bashful", "Bold", "Brave", "Calm", "Careful", "Docile", "Gentle", "Hardy", "Hasty", "Impish", "Jolly", "Lax", "Lonely", "Mild", "Modest", "Na&iuml;ve", "Naughty", "Quiet", "Quirky", "Rash", "Relaxed", "Sassy", "Serious", "Timid"];
