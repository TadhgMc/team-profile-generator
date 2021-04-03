const Intern = require("../../class-lib/Intern");

describe("Intern class", () => {
    const Greg = new Intern("Greg","id:123","email","school:osu","Intern")
    describe("getName method", () => {
        it("returns name property of Intern object", () => {
            let name = Greg.getName();
            expect(name).toBe("Greg");
        });
    });
    describe("getTitle method", () => {
        it("returns title property of Intern object", () => {
            let title = Greg.getTitle();
            expect(title).toBe("Intern");
        });
    });
    describe("getSchool method", () => {
        it("returns school property of Intern object", () => {
            let school = Greg.getSchool();
            expect(school).toBe("school:osu");
        });
    });
});