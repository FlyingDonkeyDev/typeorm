"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var test_utils_1 = require("../../../../utils/test-utils");
var Student_1 = require("./entity/Student");
var Teacher_1 = require("./entity/Teacher");
var Accountant_1 = require("./entity/Accountant");
describe.skip("table-inheritance > class-table > basic-functionality", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        schemaCreate: true,
                        dropSchema: true,
                    })];
                case 1: return [2 /*return*/, connections = _a.sent()];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("should correctly insert, update and delete data with class-table-inheritance pattern", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var student1, student2, teacher1, teacher2, accountant1, accountant2, loadedStudents, loadedTeachers, loadedAccountants, loadedStudent, loadedTeacher, loadedAccountant;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    student1 = new Student_1.Student();
                    student1.name = "Alice";
                    student1.faculty = "Economics";
                    return [4 /*yield*/, connection.getRepository(Student_1.Student).save(student1)];
                case 1:
                    _a.sent();
                    student2 = new Student_1.Student();
                    student2.name = "Bob";
                    student2.faculty = "Programming";
                    return [4 /*yield*/, connection.getRepository(Student_1.Student).save(student2)];
                case 2:
                    _a.sent();
                    teacher1 = new Teacher_1.Teacher();
                    teacher1.name = "Mr. Garrison";
                    teacher1.specialization = "Geography";
                    teacher1.salary = 2000;
                    return [4 /*yield*/, connection.getRepository(Teacher_1.Teacher).save(teacher1)];
                case 3:
                    _a.sent();
                    teacher2 = new Teacher_1.Teacher();
                    teacher2.name = "Mr. Adler";
                    teacher2.specialization = "Mathematics";
                    teacher2.salary = 4000;
                    return [4 /*yield*/, connection.getRepository(Teacher_1.Teacher).save(teacher2)];
                case 4:
                    _a.sent();
                    accountant1 = new Accountant_1.Accountant();
                    accountant1.name = "Mr. Burns";
                    accountant1.department = "Bookkeeping";
                    accountant1.salary = 3000;
                    return [4 /*yield*/, connection.getRepository(Accountant_1.Accountant).save(accountant1)];
                case 5:
                    _a.sent();
                    accountant2 = new Accountant_1.Accountant();
                    accountant2.name = "Mr. Trump";
                    accountant2.department = "Director";
                    accountant2.salary = 5000;
                    return [4 /*yield*/, connection.getRepository(Accountant_1.Accountant).save(accountant2)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Student_1.Student, "students")
                            .getMany()];
                case 7:
                    loadedStudents = _a.sent();
                    loadedStudents[0].should.have.all.keys("id", "name", "faculty");
                    loadedStudents[0].id.should.equal(1);
                    loadedStudents[0].name.should.equal("Alice");
                    loadedStudents[0].faculty.should.equal("Economics");
                    loadedStudents[1].should.have.all.keys("id", "name", "faculty");
                    loadedStudents[1].id.should.equal(2);
                    loadedStudents[1].name.should.equal("Bob");
                    loadedStudents[1].faculty.should.equal("Programming");
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Teacher_1.Teacher, "teachers")
                            .getMany()];
                case 8:
                    loadedTeachers = _a.sent();
                    loadedTeachers[0].should.have.all.keys("id", "name", "specialization", "salary");
                    loadedTeachers[0].id.should.equal(3);
                    loadedTeachers[0].name.should.equal("Mr. Garrison");
                    loadedTeachers[0].specialization.should.equal("Geography");
                    loadedTeachers[0].salary.should.equal(2000);
                    loadedTeachers[1].should.have.all.keys("id", "name", "specialization", "salary");
                    loadedTeachers[1].id.should.equal(4);
                    loadedTeachers[1].name.should.equal("Mr. Adler");
                    loadedTeachers[1].specialization.should.equal("Mathematics");
                    loadedTeachers[1].salary.should.equal(4000);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Accountant_1.Accountant, "accountants")
                            .getMany()];
                case 9:
                    loadedAccountants = _a.sent();
                    loadedAccountants[0].should.have.all.keys("id", "name", "department", "salary");
                    loadedAccountants[0].id.should.equal(5);
                    loadedAccountants[0].name.should.equal("Mr. Burns");
                    loadedAccountants[0].department.should.equal("Bookkeeping");
                    loadedAccountants[0].salary.should.equal(3000);
                    loadedAccountants[1].should.have.all.keys("id", "name", "department", "salary");
                    loadedAccountants[1].id.should.equal(6);
                    loadedAccountants[1].name.should.equal("Mr. Trump");
                    loadedAccountants[1].department.should.equal("Director");
                    loadedAccountants[1].salary.should.equal(5000);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Student_1.Student, "student")
                            .where("student.name = :name", { name: "Bob" })
                            .getOne()];
                case 10:
                    loadedStudent = _a.sent();
                    console.log(loadedStudent);
                    loadedStudent.faculty = "Chemistry";
                    return [4 /*yield*/, connection.getRepository(Student_1.Student).save(loadedStudent)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Student_1.Student, "student")
                            .where("student.name = :name", { name: "Bob" })
                            .getOne()];
                case 12:
                    loadedStudent = _a.sent();
                    loadedStudent.should.have.all.keys("id", "name", "faculty");
                    loadedStudent.id.should.equal(2);
                    loadedStudent.name.should.equal("Bob");
                    loadedStudent.faculty.should.equal("Chemistry");
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Teacher_1.Teacher, "teacher")
                            .where("teacher.name = :name", { name: "Mr. Adler" })
                            .getOne()];
                case 13:
                    loadedTeacher = _a.sent();
                    loadedTeacher.salary = 1000;
                    return [4 /*yield*/, connection.getRepository(Teacher_1.Teacher).save(loadedTeacher)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Teacher_1.Teacher, "teacher")
                            .where("teacher.name = :name", { name: "Mr. Adler" })
                            .getOne()];
                case 15:
                    loadedTeacher = _a.sent();
                    loadedTeacher.should.have.all.keys("id", "name", "specialization", "salary");
                    loadedTeacher.id.should.equal(4);
                    loadedTeacher.name.should.equal("Mr. Adler");
                    loadedTeacher.specialization.should.equal("Mathematics");
                    loadedTeacher.salary.should.equal(1000);
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Accountant_1.Accountant, "accountant")
                            .where("accountant.name = :name", { name: "Mr. Trump" })
                            .getOne()];
                case 16:
                    loadedAccountant = _a.sent();
                    loadedAccountant.salary = 1000;
                    return [4 /*yield*/, connection.getRepository(Accountant_1.Accountant).save(loadedAccountant)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, connection.manager
                            .createQueryBuilder(Accountant_1.Accountant, "accountant")
                            .where("accountant.name = :name", { name: "Mr. Trump" })
                            .getOne()];
                case 18:
                    loadedAccountant = _a.sent();
                    loadedAccountant.should.have.all.keys("id", "name", "department", "salary");
                    loadedAccountant.id.should.equal(6);
                    loadedAccountant.name.should.equal("Mr. Trump");
                    loadedAccountant.department.should.equal("Director");
                    loadedAccountant.salary.should.equal(1000);
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=basic-functionality.js.map