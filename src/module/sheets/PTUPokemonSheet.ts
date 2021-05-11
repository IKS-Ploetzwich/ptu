export default class PTUPokemonSheet extends ActorSheet {
    getData() {
        return {
            ...super.getData(),
            config: CONFIG.ptu
        };
    }
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            ...super.defaultOptions,
            template: 'systems/ptu/templates/sheets/actors/pokemon-sheet.hbs',
            width: 660,
            height: 500,
            classes: ["ptu", "pokemon"]
        })
    }
}