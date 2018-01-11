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
var Entity_1 = require("../../../../src/decorator/entity/Entity");
var PrimaryGeneratedColumn_1 = require("../../../../src/decorator/columns/PrimaryGeneratedColumn");
var Column_1 = require("../../../../src/decorator/columns/Column");
var TableInheritance_1 = require("../../../../src/decorator/entity/TableInheritance");
var CreateDateColumn_1 = require("../../../../src/decorator/columns/CreateDateColumn");
var UpdateDateColumn_1 = require("../../../../src/decorator/columns/UpdateDateColumn");
var Document = /** @class */ (function () {
    function Document() {
        this.dollarRate = 0;
        this.orderBy = "";
        this.comments = "";
        this.subTotal = 0;
        this.vat = 0;
        this.total = 0;
        this.createdBy = "";
    }
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Document.prototype, "id", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Number)
    ], Document.prototype, "dollarRate", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Document.prototype, "orderBy", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Document.prototype, "comments", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Number)
    ], Document.prototype, "subTotal", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Number)
    ], Document.prototype, "vat", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", Number)
    ], Document.prototype, "total", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Document.prototype, "createdBy", void 0);
    __decorate([
        CreateDateColumn_1.CreateDateColumn(),
        __metadata("design:type", String)
    ], Document.prototype, "createdAt", void 0);
    __decorate([
        UpdateDateColumn_1.UpdateDateColumn(),
        __metadata("design:type", String)
    ], Document.prototype, "updatedAt", void 0);
    Document = __decorate([
        Entity_1.Entity(),
        TableInheritance_1.TableInheritance("class-table")
    ], Document);
    return Document;
}());
exports.Document = Document;
//# sourceMappingURL=Document.js.map