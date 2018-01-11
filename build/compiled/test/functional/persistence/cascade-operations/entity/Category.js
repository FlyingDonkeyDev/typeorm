"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("../../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../../src/decorator/columns/PrimaryGeneratedColumn");
var Column_1 = require("../../../../../src/decorator/columns/Column");
var Post_1 = require("./Post");
var OneToMany_1 = require("../../../../../src/decorator/relations/OneToMany");
var Photo_1 = require("./Photo");
var ManyToMany_1 = require("../../../../../src/decorator/relations/ManyToMany");
var JoinTable_1 = require("../../../../../src/decorator/relations/JoinTable");
var ManyToOne_1 = require("../../../../../src/decorator/relations/ManyToOne");
var OneToOne_1 = require("../../../../../src/decorator/relations/OneToOne");
var JoinColumn_1 = require("../../../../../src/decorator/relations/JoinColumn");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Category.prototype, "id", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Category.prototype, "name", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Post_1.Post; }, function (post) { return post.oneCategory; }, {
            cascadeInsert: true,
            cascadeUpdate: true,
            cascadeRemove: true
        }),
        JoinColumn_1.JoinColumn(),
        __metadata("design:type", Post_1.Post)
    ], Category.prototype, "onePost", void 0);
    __decorate([
        OneToMany_1.OneToMany(function (type) { return Post_1.Post; }, function (post) { return post.category; }, {
            cascadeInsert: true,
            cascadeUpdate: true
        }),
        __metadata("design:type", Array)
    ], Category.prototype, "posts", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Photo_1.Photo; }, function (photo) { return photo.categories; }, {
            cascadeInsert: true,
            cascadeUpdate: true
        }),
        JoinTable_1.JoinTable(),
        __metadata("design:type", Array)
    ], Category.prototype, "photos", void 0);
    __decorate([
        ManyToOne_1.ManyToOne(function (type) { return Photo_1.Photo; }, {
            cascadeInsert: true,
            cascadeUpdate: true,
            cascadeRemove: true
        }),
        __metadata("design:type", Object)
    ], Category.prototype, "photo", void 0);
    Category = __decorate([
        Entity_1.Entity()
    ], Category);
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=Category.js.map