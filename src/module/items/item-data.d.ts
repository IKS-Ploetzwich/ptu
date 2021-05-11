interface CommonData {
    description: string;
    source: string;
}

interface PhysicalData {
    quantity: number;
    price: number;
    weight: number;
}
interface PokeballData extends CommonData, PhysicalData {
    bonus: number;
}
interface BerryData extends CommonData, PhysicalData {
    tier: number;
}
interface HealingData extends CommonData, PhysicalData {
    value: number;
}
interface FeatData extends CommonData {
    statIncrease: number;
}
interface ClassData extends CommonData {
    bonus: number;
    features: Array<FeatData>;
    prerequisites: [];
}
interface EdgeData extends CommonData {
}
interface PokeEdgeData extends CommonData {
}
interface StatusData extends CommonData {
}
interface AbilityData extends CommonData {
    freq: string;
}
interface KeywordData extends CommonData {
}
interface MoveData extends CommonData {
    freq: string;
    ac: number;
    type: TypeItemData;
    damage:string;
    range: {
        range: number;
        targets: ""
    };
    keywords: Array<KeywordItemData>;
    attackStat: string;
    defenseStat: string;
    alwaysHits: false;
    userStatIncrease: Array<string>;
    userStatDecrease: Array<string>;
    targetStatIncrease: Array<string>;
    targetStatDecrease: Array<string>;
}
interface TypeData {
    name: string;
    weaknesses: Array<TypeData>;
    immunities: Array<TypeData>;
}
interface SpeciesData extends CommonData {
    types: Array<TypeData>;
    pokedexNo: number
    abilities: {
        basic: Array<AbilityItemData>;
        advanced: Array<AbilityItemData>;
        high: Array<AbilityItemData>;
    }
    moves: Array<{level: number; move: MoveItemData}>;
    tutorMoves: Array<MoveItemData>;
    eggMoves: Array<MoveItemData>;
    category: string;
    catchRate: number;
}
interface HeldData extends CommonData, PhysicalData {
}
interface NatureData extends CommonData {
    name: string;
    plus: string;
    minus: string;
}

export interface PokeballItemData extends Item.Data<PokeballData>{
    type: "pokeball";
}
export interface BerryItemData extends Item.Data<BerryData>{
    type: "berry";
}
export interface HealingItemData extends Item.Data<HealingData>{
    type: "healing";
}
export interface FeatItemData extends Item.Data<FeatData>{
    type: "feat";
}
export interface ClassItemData extends Item.Data<ClassData>{
    type: "class";
}
export interface EdgeItemData extends Item.Data<EdgeData>{
    type: "edge";
}
export interface PokeEdgeItemData extends Item.Data<PokeEdgeData>{
    type: "pokeEdge";
}
export interface StatusItemData extends Item.Data<StatusData>{
    type: "status";
}
export interface AbilityItemData extends Item.Data<AbilityData>{
    type: "ability";
}
export interface KeywordItemData extends Item.Data<KeywordData>{
    type: "keyword";
}
export interface MoveItemData extends Item.Data<MoveData>{
    type: "move";
}
export interface TypeItemData extends Item.Data<TypeData> {
    type: "type";
}
export interface SpeciesItemData extends Item.Data<SpeciesData> {
    type: "species";
}
export interface HeldItemData extends Item.Data<HeldData> {
    type: "held";
}
export interface NatureItemData extends Item.Data<NatureData> {
    type: "nature";
}

export type SystemItemData = PokeballItemData | BerryItemData | HealingItemData | FeatItemData | 
                                ClassItemData | EdgeItemData | StatusItemData | AbilityItemData |
                                KeywordItemData | MoveItemData | TypeItemData | SpeciesItemData |
                                PokeEdgeItemData | NatureItemData | HeldItemData;

export type HoldableItemData = HealingItemData | BerryItemData | HeldItemData;