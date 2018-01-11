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
var Index_1 = require("../../../../src/decorator/Index");
var Column_1 = require("../../../../src/decorator/columns/Column");
var CreateDateColumn_1 = require("../../../../src/decorator/columns/CreateDateColumn");
var UpdateDateColumn_1 = require("../../../../src/decorator/columns/UpdateDateColumn");
var OneToOne_1 = require("../../../../src/decorator/relations/OneToOne");
var JoinColumn_1 = require("../../../../src/decorator/relations/JoinColumn");
var User_1 = require("./User");
var UserCredential = /** @class */ (function () {
    function UserCredential() {
    }
    __decorate([
        OneToOne_1.OneToOne(function () { return User_1.User; }, {
            primary: true,
            cascadeAll: true,
        }),
        JoinColumn_1.JoinColumn({
            name: "id",
            referencedColumnName: "id",
        }),
        Index_1.Index(),
        __metadata("design:type", User_1.User)
    ], UserCredential.prototype, "user", void 0);
    __decorate([
        CreateDateColumn_1.CreateDateColumn(),
        __metadata("design:type", String)
    ], UserCredential.prototype, "createdAt", void 0);
    __decorate([
        UpdateDateColumn_1.UpdateDateColumn(),
        __metadata("design:type", String)
    ], UserCredential.prototype, "updatedAt", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], UserCredential.prototype, "password", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], UserCredential.prototype, "salt", void 0);
    UserCredential = __decorate([
        Entity_1.Entity()
    ], UserCredential);
    return UserCredential;
}());
exports.UserCredential = UserCredential;
//# sourceMappingURL=UserCredential.js.map