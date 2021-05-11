export default class PTUTrainerSheet extends ActorSheet {
    getData() {
        return {
            ...super.getData(),
            config: CONFIG.ptu
        };
    }
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            ...super.defaultOptions,
            template: 'systems/ptu/templates/sheets/actors/trainer-sheet.hbs',
            width: 660,
            height: 500,
            classes: ["ptu", "trainer"]
        })
    }
}