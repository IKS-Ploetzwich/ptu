export default class PTUItemSheet extends ItemSheet {
    get template() {
        return `systems/ptu/templates/sheets/items/${this.item.data.type}-sheet.hbs`;
    }
    getData() {
        const newData = {
            ...super.getData(),
            config: CONFIG.ptu
        };
        console.log(super.getData())
        return newData;
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            ...super.defaultOptions,
            width: 660,
            height: 500,
            classes: ["ptu", "ptu-item"]
        })
    }
}