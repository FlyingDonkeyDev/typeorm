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
var ManyToOne_1 = require("../../../../../src/decorator/relations/ManyToOne");
var Category_1 = require("./Category");
var Photo_1 = require("./Photo");
var ManyToMany_1 = require("../../../../../src/decorator/relations/ManyToMany");
var JoinTable_1 = require("../../../../../src/decorator/relations/JoinTable");
var OneToOne_1 = require("../../../../../src/decorator/relations/OneToOne");
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Post.prototype, "id", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        ManyToOne_1.ManyToOne(function (type) { return Category_1.Category; }, function (category) { return category.oneToManyPosts; }, {
            cascadeInsert: true,
            cascadeUpdate: true,
            cascadeRemove: true,
        }),
        __metadata("design:type", Category_1.Category)
    ], Post.prototype, "manyToOneCategory", void 0);
    __decorate([
        ManyToOne_1.ManyToOne(function (type) { return Category_1.Category; }, function (category) { return category.noCascadeOneToManyPosts; }, {
            cascadeInsert: false,
            cascadeUpdate: false,
            cascadeRemove: false,
        }),
        __metadata("design:type", Category_1.Category)
    ], Post.prototype, "noCascadeManyToOneCategory", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Category_1.Category; }, function (category) { return category.oneToOneOwnerPost; }, {
            cascadeInsert: true,
            cascadeUpdate: true,
            cascadeRemove: true,
        }),
        __metadata("design:type", Category_1.Category)
    ], Post.prototype, "oneToOneCategory", void 0);
    __decorate([
        OneToOne_1.OneToOne(function (type) { return Category_1.Category; }, function (category) { return category.noCascadeOneToOnePost; }, {
            cascadeInsert: false,
            cascadeUpdate: false,
            cascadeRemove: false,
        }),
        __metadata("design:type", Category_1.Category)
    ], Post.prototype, "noCascadeOneToOneCategory", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Category_1.Category; }, function (category) { return category.manyToManyPosts; }, {
            cascadeInsert: true,
            cascadeUpdate: true,
        }),
        JoinTable_1.JoinTable(),
        __metadata("design:type", Array)
    ], Post.prototype, "manyToManyOwnerCategories", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Category_1.Category; }, function (category) { return category.noCascadeManyToManyPosts; }, {
            cascadeInsert: false,
            cascadeUpdate: false,
        }),
        JoinTable_1.JoinTable(),
        __metadata("design:type", Array)
    ], Post.prototype, "noCascadeManyToManyOwnerCategories", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Photo_1.Photo; }, function (photo) { return photo.posts; }, {
            cascadeInsert: true,
            cascadeUpdate: true,
        }),
        JoinTable_1.JoinTable(),
        __metadata("design:type", Array)
    ], Post.prototype, "photos", void 0);
    __decorate([
        ManyToMany_1.ManyToMany(function (type) { return Photo_1.Photo; }, {
            cascadeInsert: true,
            cascadeUpdate: true,
        }),
        JoinTable_1.JoinTable(),
        __metadata("design:type", Array)
    ], Post.prototype, "noInversePhotos", void 0);
    Post = __decorate([
        Entity_1.Entity()
    ], Post);
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=Post.js.map