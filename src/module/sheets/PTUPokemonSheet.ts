export default class PTUPokemonSheet extends ActorSheet {
    get template() {
        return `systems/ptu/templates/sheets/actors/${this.actor.data.type}-sheet.hbs`;
    }
    getData() {
        return {
            ...super.getData(),
            config: CONFIG.ptu
        };
    }
}