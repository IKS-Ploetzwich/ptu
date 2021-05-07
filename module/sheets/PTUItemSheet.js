export default class PTUItemSheet extends ItemSheet {
    get template() {
        return `systems/ptu-foundry/templates/sheets/items/${this.item.data.type}-sheet.html`;
    }
    getData() {
        const data = super.getData();
        data.config = CONFIG.ptu;
        return data;
    }
}