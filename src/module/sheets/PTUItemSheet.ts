export default class PTUItemSheet extends ItemSheet {
    get template() {
        return `systems/ptu/templates/sheets/items/${this.item.data.type}-sheet.hbs`;
    }
    getData() {
        return {
            ...super.getData(),
            config: CONFIG.ptu
        };
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            ...super.defaultOptions,
            width: 660,
            height: 500,
            classes: ["ptu", "feat"]
        })
    }
}