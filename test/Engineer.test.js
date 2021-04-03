const Engineer = require("../../class-lib/Engineer");

describe("Engineer class", () => {
    const Greg = new Engineer("Greg","id:123","email","github:test","Engineer")
    describe("getName method", () => {
        it("returns name property of Engineer object", () => {
            let name = Greg.getName();
            expect(name).toBe("Greg");
        });
    });
    describe("getTitle method", () => {
        it("returns title property of Engineer object", () => {
            let title = Greg.getTitle();
            expect(title).toBe("Engineer");
        });
    });
    describe("getGitHub method", () => {
        it("returns GitHub property of Engineer object", () => {
            let github = Greg.getGitHub();
            expect(github).toBe("github:test");
        });
    });
});