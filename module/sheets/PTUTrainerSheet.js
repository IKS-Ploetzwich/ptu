export default class PTUTrainerSheet extends ActorSheet {
    get template() {
        return `systems/ptu-foundry/templates/sheets/actors/${this.actor.data.type}-sheet.html`;
    }
    getData() {
        const data = super.getData();
        data.config = CONFIG.ptu;
        return data;
    }
}