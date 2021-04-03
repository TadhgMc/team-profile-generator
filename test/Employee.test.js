const Employee = require('../../class-lib/Employee');

describe("Employee class", () => {
    const Greg = new Employee("Greg","id:123","email","title")
    describe("getName method", () => {
        it("returns name property of Employee object", () => {
            let name = Greg.getName();
            expect(name).toBe("Greg");
        });
    });
    describe("getId method", () => {
        it("returns id property of Employee object", () => {
            let id = Greg.getId();
            expect(id).toBe("id:123");
        });
    });
    describe("getEmail method", () => {
        it("returns Email property of Employee object", () => {
            let email = Greg.getEmail();
            expect(email).toBe("email");
        });
    });
    describe("getTitle method", () => {
        it("returns title property of Employee object", () => {
            let title = Greg.getTitle();
            expect(title).toBe("title");
        });
    });

});