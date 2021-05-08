import { AbilityItemData, ClassItemData, EdgeItemData, FeatItemData, HoldableItemData, MoveItemData, NatureItemData, PokeEdgeItemData, SpeciesItemData, SystemItemData } from "../items/item-data";

interface CommonData {
    stats: {
        hp: number;
        atk: number;
        def: number;
        spAtk: number;
        spDef: number;
        speed: number;
    };
    attributes: {
        name: string;
        age: number;
        gender: string;
        weight: {
            value: number;
            class: number;
        };
        size: {
            value: number;
            class: number;
        };
        health: {
            max: number;
            value: number;
            temp: number;
        };
        initative: {
            value: number;
            mod: number;
        };
        evasion: {
            phys: {
                value: number;
                bonus: number;
            };
            spec: {
                value: number;
                bonus: number;
            };
            speed: {
                value: number;
                bonus: number;
            };
        };
        injuries: number;
    };
    // Maybe remove? This is all deviateable stuff
    capabilities: {
        overland: number;
        swim: number;
        jump: {
            high: number;
            long: number;
        };
        power: number;
        additional: [string];
    };
    level: {
        value: number;
        exp: {
            value: number;
            nextLevel: number;
        };
    };
}

interface TrainerData extends CommonData {
    background: {
        name: string;
        skills: {
            acrobatics: {
                name: "Acrobatics";
                category: "Body";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            athletics: {
                name: "Athletics";
                category: "Body";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            combat: {
                name: "Combat";
                category: "Body";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            intimidate: {
                name: "Intimidate";
                category: "Body";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            stealth: {
                name: "Stealth";
                category: "Body";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            survival: {
                name: "Survival";
                category: "Body";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            generalEdu: {
                name: "General Education";
                category: "Mind";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            medicineEdu: {
                name: "Medicine Education";
                category: "Mind";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            occultEdu: {
                name: "Occult Education";
                category: "Mind";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            pokeEdu: {
                name: "Pokémon Education";
                category: "Mind";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            techEdu: {
                name: "Technology Education";
                category: "Mind";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            guile: {
                name: "Guile";
                category: "Mind";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            perception: {
                name: "Perception";
                category: "Mind";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            charm: {
                name: "Charm";
                category: "Spirit";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            command: {
                name: "Command";
                category: "Spirit";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            focus: {
                name: "Focus";
                category: "Spirit";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            };
            intution: {
                name: "Intuition";
                category: "Spirit";
                value: number;
                inclination: boolean;
                enhanced: boolean;
            }
        }
    };
    moves: Array<MoveItemData>;
    edges: Array<EdgeItemData>;
    features: Array<FeatItemData>;
    classes: Array<ClassItemData>;
    abilities: Array<AbilityItemData>;
    ap: {
        max: 1;
        value: 1
    };
    money: 0
}

interface PokemonData extends CommonData {
    species: SpeciesItemData;
    item: HoldableItemData;
    loyalty: number;
    nature: NatureItemData;
    abilities: Array<AbilityItemData>;
    skills: {
        athletics: {
            name: "Athletics";
            value: 1;
            bonus: 0;
        };
        acrobatics: {
            name: "Acrobatics";
            value: 1;
            bonus: 0;
        };
        combat: {
            name: "Combat";
            value: 1;
            bonus: 0;
        };
        stealth: {
            name: "Stealth";
            value: 1;
            bonus: 0;
        };
        perception: {
            name: "Perception";
            value: 1;
            bonus: 0;
        };
        focus: {
            name: "Focus";
            value: 1;
            bonus: 0;
        };
    };
    tutorPoints: {
        max: number;
        spent: number;
    };
    moves: Array<MoveItemData>;
    pokeEdges: Array<PokeEdgeItemData>;

}

interface TrainerActorData extends Actor.Data<TrainerData, SystemItemData> {
    type: "trainer";
}
interface PokemonActorData extends Actor.Data<PokemonData, SystemItemData> {
    type: "pokemon";
}

export type SystemActorData = TrainerActorData | PokemonActorData;