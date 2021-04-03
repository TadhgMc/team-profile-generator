const Manager = require("../lib/Manager");

describe("Manager class", () => {
    const Greg = new Manager("Greg","id:123","email","officeNum: 123","Manager")
    describe("getName method", () => {
        it("returns name property of Manager object", () => {
            let name = Greg.getName();
            expect(name).toBe("Greg");
        });
    });
    describe("getTitle method", () => {
        it("returns title property of Manager object", () => {
            let title = Greg.getTitle();
            expect(title).toBe("Manager");
        });
    });
    describe("getOfficeNum method", () => {
        it("returns office number property of Manager object", () => {
            let officeNum = Greg.getOfficeNum();
            expect(officeNum).toBe("officeNum: 123");
        });
    });
});