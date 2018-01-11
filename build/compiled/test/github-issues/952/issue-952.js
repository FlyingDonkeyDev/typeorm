"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Table_1 = require("../../../src/schema-builder/schema/Table");
var TableColumn_1 = require("../../../src/schema-builder/schema/TableColumn");
var TablePrimaryKey_1 = require("../../../src/schema-builder/schema/TablePrimaryKey");
var chai_1 = require("chai");
describe("github issues > #952 Table.addPrimaryKeys and Table.removePrimaryKeys", function () {
    var table;
    beforeEach(function () {
        var column1 = new TableColumn_1.TableColumn({ name: "column1", type: "number", isPrimary: true });
        var column2 = new TableColumn_1.TableColumn({ name: "column2", type: "number" });
        table = new Table_1.Table("test", [column1, column2]);
        table.addPrimaryKeys([new TablePrimaryKey_1.TablePrimaryKey("column1_index", "column1")]);
    });
    it("should set isPrimary to true when calling addPrimaryKeys", function () {
        var primaryKey = new TablePrimaryKey_1.TablePrimaryKey("column2_index", "column2");
        table.addPrimaryKeys([primaryKey]);
        chai_1.expect(table.primaryKeys.length).to.equal(2);
        var column = table.findColumnByName("column2");
        chai_1.expect(column).not.to.be.undefined;
        if (column)
            chai_1.expect(column.isPrimary).to.be.true;
    });
    it("should set isPrimary to false when calling removePrimaryKeys", function () {
        var primaryKey = new TablePrimaryKey_1.TablePrimaryKey("column1_index", "column1");
        table.removePrimaryKeys([primaryKey]);
        chai_1.expect(table.primaryKeys.length).to.equal(0);
        var column = table.findColumnByName("column1");
        chai_1.expect(column).not.to.be.undefined;
        if (column)
            chai_1.expect(column.isPrimary).to.be.false;
    });
});
//# sourceMappingURL=issue-952.js.map