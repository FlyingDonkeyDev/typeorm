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
var Post_1 = require("./entity/Post");
var test_utils_1 = require("../../../../utils/test-utils");
var PostWithOptions_1 = require("./entity/PostWithOptions");
var PostWithoutTypes_1 = require("./entity/PostWithoutTypes");
var FruitEnum_1 = require("./enum/FruitEnum");
describe("database schema > column types > mysql", function () {
    var connections;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_utils_1.createTestingConnections({
                        entities: [__dirname + "/entity/*{.js,.ts}"],
                        enabledDrivers: ["mysql"],
                        schemaCreate: true,
                        dropSchema: true,
                    })];
                case 1:
                    connections = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    beforeEach(function () { return test_utils_1.reloadTestingDatabases(connections); });
    after(function () { return test_utils_1.closeTestingConnections(connections); });
    it("all types should work correctly - persist and hydrate", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var postRepository, queryRunner, table, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(Post_1.Post);
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post")];
                case 1:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    post = new Post_1.Post();
                    post.id = 1;
                    post.name = "Post";
                    post.int = 2147483647;
                    post.tinyint = 127;
                    post.smallint = 32767;
                    post.mediumint = 8388607;
                    post.bigint = 8223372036854775807;
                    post.float = 10.53;
                    post.double = 10.1234;
                    post.decimal = 50;
                    post.date = "2017-06-21";
                    post.datetime = new Date();
                    post.datetime.setMilliseconds(0); // set milliseconds to zero, because if datetime type specified without precision, milliseconds won't save in database
                    post.timestamp = new Date();
                    post.timestamp.setMilliseconds(0); // set milliseconds to zero, because if datetime type specified without precision, milliseconds won't save in database
                    post.time = "15:30:00";
                    post.year = 2017;
                    post.char = "A";
                    post.varchar = "This is varchar";
                    post.blob = new Buffer("This is blob");
                    post.text = "This is text";
                    post.tinyblob = new Buffer("This is tinyblob");
                    post.tinytext = "This is tinytext";
                    post.mediumblob = new Buffer("This is mediumblob");
                    post.mediumtext = "This is mediumtext";
                    post.longblob = new Buffer("This is longblob");
                    post.longtext = "This is longtext";
                    post.enum = "A";
                    post.classEnum1 = FruitEnum_1.FruitEnum.Apple;
                    post.json = { id: 1, name: "Post" };
                    post.simpleArray = ["A", "B", "C"];
                    return [4 /*yield*/, postRepository.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOneById(1)];
                case 4:
                    loadedPost = (_a.sent());
                    loadedPost.id.should.be.equal(post.id);
                    loadedPost.name.should.be.equal(post.name);
                    loadedPost.int.should.be.equal(post.int);
                    loadedPost.tinyint.should.be.equal(post.tinyint);
                    loadedPost.smallint.should.be.equal(post.smallint);
                    loadedPost.mediumint.should.be.equal(post.mediumint);
                    loadedPost.bigint.should.be.equal(post.bigint);
                    loadedPost.float.should.be.equal(post.float);
                    loadedPost.double.should.be.equal(post.double);
                    loadedPost.decimal.should.be.equal(post.decimal);
                    loadedPost.date.should.be.equal(post.date);
                    loadedPost.datetime.getTime().should.be.equal(post.datetime.getTime());
                    loadedPost.timestamp.getTime().should.be.equal(post.timestamp.getTime());
                    loadedPost.time.should.be.equal(post.time);
                    loadedPost.year.should.be.equal(post.year);
                    loadedPost.char.should.be.equal(post.char);
                    loadedPost.varchar.should.be.equal(post.varchar);
                    loadedPost.blob.toString().should.be.equal(post.blob.toString());
                    loadedPost.text.should.be.equal(post.text);
                    loadedPost.tinyblob.toString().should.be.equal(post.tinyblob.toString());
                    loadedPost.tinytext.should.be.equal(post.tinytext);
                    loadedPost.mediumblob.toString().should.be.equal(post.mediumblob.toString());
                    loadedPost.mediumtext.should.be.equal(post.mediumtext);
                    loadedPost.longblob.toString().should.be.equal(post.longblob.toString());
                    loadedPost.longtext.should.be.equal(post.longtext);
                    loadedPost.enum.should.be.equal(post.enum);
                    loadedPost.classEnum1.should.be.equal(post.classEnum1);
                    loadedPost.json.should.be.eql(post.json);
                    loadedPost.simpleArray[0].should.be.equal(post.simpleArray[0]);
                    loadedPost.simpleArray[1].should.be.equal(post.simpleArray[1]);
                    loadedPost.simpleArray[2].should.be.equal(post.simpleArray[2]);
                    table.findColumnByName("id").type.should.be.equal("int");
                    table.findColumnByName("id").length.should.be.equal("11");
                    table.findColumnByName("name").type.should.be.equal("varchar");
                    table.findColumnByName("name").length.should.be.equal("255");
                    table.findColumnByName("int").type.should.be.equal("int");
                    table.findColumnByName("int").length.should.be.equal("11");
                    table.findColumnByName("tinyint").type.should.be.equal("tinyint");
                    table.findColumnByName("tinyint").length.should.be.equal("4");
                    table.findColumnByName("smallint").type.should.be.equal("smallint");
                    table.findColumnByName("smallint").length.should.be.equal("5");
                    table.findColumnByName("mediumint").type.should.be.equal("mediumint");
                    table.findColumnByName("mediumint").length.should.be.equal("9");
                    table.findColumnByName("bigint").type.should.be.equal("bigint");
                    table.findColumnByName("bigint").length.should.be.equal("20");
                    table.findColumnByName("float").type.should.be.equal("float");
                    table.findColumnByName("double").type.should.be.equal("double");
                    table.findColumnByName("decimal").type.should.be.equal("decimal");
                    table.findColumnByName("decimal").precision.should.be.equal(10);
                    table.findColumnByName("decimal").scale.should.be.equal(0);
                    table.findColumnByName("date").type.should.be.equal("date");
                    table.findColumnByName("datetime").type.should.be.equal("datetime");
                    table.findColumnByName("timestamp").type.should.be.equal("timestamp");
                    table.findColumnByName("time").type.should.be.equal("time");
                    table.findColumnByName("year").type.should.be.equal("year");
                    table.findColumnByName("year").length.should.be.equal("4");
                    table.findColumnByName("char").type.should.be.equal("char");
                    table.findColumnByName("char").length.should.be.equal("1");
                    table.findColumnByName("varchar").type.should.be.equal("varchar");
                    table.findColumnByName("varchar").length.should.be.equal("255");
                    table.findColumnByName("blob").type.should.be.equal("blob");
                    table.findColumnByName("text").type.should.be.equal("text");
                    table.findColumnByName("tinyblob").type.should.be.equal("tinyblob");
                    table.findColumnByName("tinytext").type.should.be.equal("tinytext");
                    table.findColumnByName("mediumblob").type.should.be.equal("mediumblob");
                    table.findColumnByName("mediumtext").type.should.be.equal("mediumtext");
                    table.findColumnByName("longblob").type.should.be.equal("longblob");
                    table.findColumnByName("longtext").type.should.be.equal("longtext");
                    table.findColumnByName("enum").type.should.be.equal("enum");
                    table.findColumnByName("enum").enum[0].should.be.equal("A");
                    table.findColumnByName("enum").enum[1].should.be.equal("B");
                    table.findColumnByName("enum").enum[2].should.be.equal("C");
                    table.findColumnByName("classEnum1").type.should.be.equal("enum");
                    table.findColumnByName("classEnum1").enum[0].should.be.equal("apple");
                    table.findColumnByName("classEnum1").enum[1].should.be.equal("pineapple");
                    table.findColumnByName("classEnum1").enum[2].should.be.equal("banana");
                    table.findColumnByName("json").type.should.be.equal("json");
                    table.findColumnByName("simpleArray").type.should.be.equal("text");
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("all types should work correctly - persist and hydrate when options are specified on columns", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var postRepository, queryRunner, table, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(PostWithOptions_1.PostWithOptions);
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post_with_options")];
                case 1:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    post = new PostWithOptions_1.PostWithOptions();
                    post.id = 1;
                    post.name = "Post";
                    post.int = 2147483647;
                    post.tinyint = 127;
                    post.smallint = 32767;
                    post.mediumint = 8388607;
                    post.bigint = 8223372036854775807;
                    post.float = 10.53;
                    post.double = 10.12;
                    post.decimal = 50;
                    post.char = "A";
                    post.varchar = "This is varchar";
                    post.datetime = new Date();
                    post.timestamp = new Date();
                    post.time = "15:30:00.256";
                    return [4 /*yield*/, postRepository.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOneById(1)];
                case 4:
                    loadedPost = (_a.sent());
                    loadedPost.id.should.be.equal(post.id);
                    loadedPost.name.should.be.equal(post.name);
                    loadedPost.int.should.be.equal(post.int);
                    loadedPost.tinyint.should.be.equal(post.tinyint);
                    loadedPost.smallint.should.be.equal(post.smallint);
                    loadedPost.mediumint.should.be.equal(post.mediumint);
                    loadedPost.bigint.should.be.equal(post.bigint);
                    loadedPost.float.should.be.equal(post.float);
                    loadedPost.double.should.be.equal(post.double);
                    loadedPost.decimal.should.be.equal(post.decimal);
                    loadedPost.char.should.be.equal(post.char);
                    loadedPost.varchar.should.be.equal(post.varchar);
                    loadedPost.datetime.getTime().should.be.equal(post.datetime.getTime());
                    loadedPost.timestamp.getTime().should.be.equal(post.timestamp.getTime());
                    loadedPost.time.should.be.equal(post.time);
                    table.findColumnByName("id").type.should.be.equal("int");
                    table.findColumnByName("id").length.should.be.equal("11");
                    table.findColumnByName("name").type.should.be.equal("varchar");
                    table.findColumnByName("name").length.should.be.equal("10");
                    table.findColumnByName("int").type.should.be.equal("int");
                    table.findColumnByName("int").length.should.be.equal("3");
                    table.findColumnByName("tinyint").type.should.be.equal("tinyint");
                    table.findColumnByName("tinyint").length.should.be.equal("3");
                    table.findColumnByName("smallint").type.should.be.equal("smallint");
                    table.findColumnByName("smallint").length.should.be.equal("3");
                    table.findColumnByName("mediumint").type.should.be.equal("mediumint");
                    table.findColumnByName("mediumint").length.should.be.equal("3");
                    table.findColumnByName("bigint").type.should.be.equal("bigint");
                    table.findColumnByName("bigint").length.should.be.equal("3");
                    table.findColumnByName("float").type.should.be.equal("float");
                    table.findColumnByName("float").precision.should.be.equal(5);
                    table.findColumnByName("float").scale.should.be.equal(2);
                    table.findColumnByName("double").type.should.be.equal("double");
                    table.findColumnByName("double").precision.should.be.equal(5);
                    table.findColumnByName("double").scale.should.be.equal(2);
                    table.findColumnByName("decimal").type.should.be.equal("decimal");
                    table.findColumnByName("decimal").precision.should.be.equal(5);
                    table.findColumnByName("decimal").scale.should.be.equal(2);
                    table.findColumnByName("char").type.should.be.equal("char");
                    table.findColumnByName("char").length.should.be.equal("5");
                    table.findColumnByName("varchar").type.should.be.equal("varchar");
                    table.findColumnByName("varchar").length.should.be.equal("30");
                    table.findColumnByName("datetime").type.should.be.equal("datetime");
                    table.findColumnByName("datetime").precision.should.be.equal(6);
                    table.findColumnByName("timestamp").type.should.be.equal("timestamp");
                    table.findColumnByName("timestamp").precision.should.be.equal(6);
                    table.findColumnByName("time").type.should.be.equal("time");
                    table.findColumnByName("time").precision.should.be.equal(3);
                    return [2 /*return*/];
            }
        });
    }); })); });
    it("all types should work correctly - persist and hydrate when types are not specified on columns", function () { return Promise.all(connections.map(function (connection) { return __awaiter(_this, void 0, void 0, function () {
        var postRepository, queryRunner, table, post, loadedPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postRepository = connection.getRepository(PostWithoutTypes_1.PostWithoutTypes);
                    queryRunner = connection.createQueryRunner();
                    return [4 /*yield*/, queryRunner.getTable("post_without_types")];
                case 1:
                    table = _a.sent();
                    return [4 /*yield*/, queryRunner.release()];
                case 2:
                    _a.sent();
                    post = new PostWithoutTypes_1.PostWithoutTypes();
                    post.id = 1;
                    post.name = "Post";
                    post.boolean = true;
                    post.blob = new Buffer("A");
                    post.datetime = new Date();
                    post.datetime.setMilliseconds(0); // set milliseconds to zero, because if datetime type specified without precision, milliseconds won't save in database
                    return [4 /*yield*/, postRepository.save(post)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, postRepository.findOneById(1)];
                case 4:
                    loadedPost = (_a.sent());
                    loadedPost.id.should.be.equal(post.id);
                    loadedPost.name.should.be.equal(post.name);
                    loadedPost.boolean.should.be.equal(post.boolean);
                    loadedPost.blob.toString().should.be.equal(post.blob.toString());
                    loadedPost.datetime.getTime().should.be.equal(post.datetime.getTime());
                    table.findColumnByName("id").type.should.be.equal("int");
                    table.findColumnByName("id").length.should.be.equal("11");
                    table.findColumnByName("name").type.should.be.equal("varchar");
                    table.findColumnByName("name").length.should.be.equal("255");
                    table.findColumnByName("boolean").type.should.be.equal("tinyint");
                    table.findColumnByName("boolean").length.should.be.equal("4");
                    table.findColumnByName("blob").type.should.be.equal("blob");
                    table.findColumnByName("datetime").type.should.be.equal("datetime");
                    return [2 /*return*/];
            }
        });
    }); })); });
});
//# sourceMappingURL=column-types-mysql.js.map