export default class PTUTrainerSheet extends ActorSheet {
    get template() {
        return `systems/ptu/templates/sheets/actors/${this.actor.data.type}-sheet.hbs`;
    }
    getData() {
        return Object.assign(Object.assign({}, super.getData()), { config: CONFIG.ptu });
    }
}
