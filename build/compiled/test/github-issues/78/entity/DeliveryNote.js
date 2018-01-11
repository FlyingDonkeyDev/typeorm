"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Column_1 = require("../../../../src/decorator/columns/Column");
var Document_1 = require("./Document");
var ClassEntityChild_1 = require("../../../../src/decorator/entity/ClassEntityChild");
var DeliveryNote = /** @class */ (function (_super) {
    __extends(DeliveryNote, _super);
    function DeliveryNote() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invoice = "";
        return _this;
    }
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], DeliveryNote.prototype, "invoice", void 0);
    DeliveryNote = __decorate([
        ClassEntityChild_1.ClassEntityChild()
    ], DeliveryNote);
    return DeliveryNote;
}(Document_1.Document));
exports.DeliveryNote = DeliveryNote;
//# sourceMappingURL=DeliveryNote.js.map