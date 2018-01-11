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
var Entity_1 = require("../../../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../../../src/decorator/columns/PrimaryGeneratedColumn");
var Column_1 = require("../../../../../../src/decorator/columns/Column");
var ManyToMany_1 = require("../../../../../../src/decorator/relations/ManyToMany");
var JoinTable_1 = require("../../../../../../src/decorator/relations/JoinTable");
var RelationCount_1 = require("../../../../../../src/decorator/relations/RelationCount");
var Post_1 = require("./Post");
var Image_1 = require("./Image");
var Category = /** @class */ (function () {
    function Category() {
        this.isRemoved = false;
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
        Column_1.Column(),
        __metadata("design:type", Boolean)
    ], Category.prototype, "isRemoved", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Post_1.Post; }, function (post) { return post.categories; }),
        __metadata("design:type", Array)
    ], Category.prototype, "posts", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Image_1.Image; }, function (image) { return image.categories; }),
        JoinTable_1.JoinTable(),
        __metadata("design:type", Array)
    ], Category.prototype, "images", void 0);
    __decorate([
        RelationCount_1.RelationCount(function (category) { return category.posts; }),
        __metadata("design:type", Number)
    ], Category.prototype, "postCount", void 0);
    __decorate([
        RelationCount_1.RelationCount(function (category) { return category.posts; }, "removedPosts", function (qb) { return qb.andWhere("removedPosts.isRemoved = :isRemoved", { isRemoved: true }); }),
        __metadata("design:type", Number)
    ], Category.prototype, "removedPostCount", void 0);
    __decorate([
        RelationCount_1.RelationCount(function (category) { return category.images; }),
        __metadata("design:type", Number)
    ], Category.prototype, "imageCount", void 0);
    __decorate([
        RelationCount_1.RelationCount(function (category) { return category.images; }, "removedImages", function (qb) { return qb.andWhere("removedImages.isRemoved = :isRemoved", { isRemoved: true }); }),
        __metadata("design:type", Number)
    ], Category.prototype, "removedImageCount", void 0);
    Category = __decorate([
        Entity_1.Entity()
    ], Category);
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=Category.js.map