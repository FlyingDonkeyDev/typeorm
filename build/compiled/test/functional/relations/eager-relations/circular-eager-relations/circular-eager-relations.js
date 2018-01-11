"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Connection_1 = require("../../../../../src/connection/Connection");
var EntityMetadataValidator_1 = require("../../../../../src/metadata-builder/EntityMetadataValidator");
var ConnectionMetadataBuilder_1 = require("../../../../../src/connection/ConnectionMetadataBuilder");
describe("relations > eager relations > circular eager relations", function () {
    it("should throw error if eager: true is set on both sides of relationship", function () {
        var connection = new Connection_1.Connection({
            type: "mysql",
            host: "localhost",
            username: "test",
            password: "test",
            database: "test",
            entities: [__dirname + "/entity/*{.js,.ts}"]
        });
        var connectionMetadataBuilder = new ConnectionMetadataBuilder_1.ConnectionMetadataBuilder(connection);
        var entityMetadatas = connectionMetadataBuilder.buildEntityMetadatas([__dirname + "/entity/*{.js,.ts}"], []);
        var entityMetadataValidator = new EntityMetadataValidator_1.EntityMetadataValidator();
        return entityMetadataValidator.validateMany(entityMetadatas, connection.driver).should.be.rejected;
    });
});
//# sourceMappingURL=circular-eager-relations.js.map