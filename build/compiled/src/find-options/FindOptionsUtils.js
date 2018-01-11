"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FindRelationsNotFoundError_1 = require("../error/FindRelationsNotFoundError");
/**
 * Utilities to work with FindOptions.
 */
var FindOptionsUtils = /** @class */ (function () {
    function FindOptionsUtils() {
    }
    // -------------------------------------------------------------------------
    // Public Static Methods
    // -------------------------------------------------------------------------
    /**
     * Checks if given object is really instance of FindOneOptions interface.
     */
    FindOptionsUtils.isFindOneOptions = function (obj) {
        var possibleOptions = obj;
        return possibleOptions &&
            (possibleOptions.select instanceof Array ||
                possibleOptions.where instanceof Object ||
                typeof possibleOptions.where === "string" ||
                possibleOptions.relations instanceof Array ||
                possibleOptions.join instanceof Object ||
                possibleOptions.order instanceof Object ||
                (possibleOptions.cache instanceof Object ||
                    typeof possibleOptions.cache === "boolean" ||
                    typeof possibleOptions.cache === "number"));
    };
    /**
     * Checks if given object is really instance of FindManyOptions interface.
     */
    FindOptionsUtils.isFindManyOptions = function (obj) {
        var possibleOptions = obj;
        return possibleOptions && (this.isFindOneOptions(possibleOptions) ||
            typeof possibleOptions.skip === "number" ||
            typeof possibleOptions.take === "number");
    };
    /**
     * Checks if given object is really instance of FindOptions interface.
     */
    FindOptionsUtils.extractFindOneOptionsAlias = function (object) {
        if (this.isFindOneOptions(object) && object.join)
            return object.join.alias;
        return undefined;
    };
    /**
     * Checks if given object is really instance of FindOptions interface.
     */
    FindOptionsUtils.extractFindManyOptionsAlias = function (object) {
        if (this.isFindManyOptions(object) && object.join)
            return object.join.alias;
        return undefined;
    };
    /**
     * Applies give find one options to the given query builder.
     */
    FindOptionsUtils.applyFindOneOptionsOrConditionsToQueryBuilder = function (qb, options) {
        if (this.isFindOneOptions(options))
            return this.applyOptionsToQueryBuilder(qb, options);
        if (options)
            return qb.where(options);
        return qb;
    };
    /**
     * Applies give find many options to the given query builder.
     */
    FindOptionsUtils.applyFindManyOptionsOrConditionsToQueryBuilder = function (qb, options) {
        if (this.isFindManyOptions(options))
            return this.applyOptionsToQueryBuilder(qb, options);
        if (options)
            return qb.where(options);
        return qb;
    };
    /**
     * Applies give find options to the given query builder.
     */
    FindOptionsUtils.applyOptionsToQueryBuilder = function (qb, options) {
        // if options are not set then simply return query builder. This is made for simplicity of usage.
        if (!options || (!this.isFindOneOptions(options) && !this.isFindManyOptions(options)))
            return qb;
        // apply all options from FindOptions
        if (options.select) {
            qb.select(options.select.map(function (selection) { return qb.alias + "." + selection; }));
        }
        if (options.where) {
            if (options.where.constructor.name == "Array") {
                qb.where(options.where[0], options.where[1]);
            }
            else {
                qb.where(options.where);
            }
        }
        if (options.skip)
            qb.skip(options.skip);
        if (options.take)
            qb.take(options.take);
        if (options.order)
            Object.keys(options.order).forEach(function (key) {
                var order = options.order[key];
                switch (order) {
                    case 1:
                        qb.addOrderBy(qb.alias + "." + key, "ASC");
                        break;
                    case -1:
                        qb.addOrderBy(qb.alias + "." + key, "DESC");
                        break;
                    case "ASC":
                        qb.addOrderBy(qb.alias + "." + key, "ASC");
                        break;
                    case "DESC":
                        qb.addOrderBy(qb.alias + "." + key, "DESC");
                        break;
                }
            });
        if (options.relations) {
            var allRelations = options.relations.map(function (relation) { return relation; });
            this.applyRelationsRecursively(qb, allRelations, qb.expressionMap.mainAlias.name, qb.expressionMap.mainAlias.metadata, "");
            // recursive removes found relations from allRelations array
            // if there are relations left in this array it means those relations were not found in the entity structure
            // so, we give an exception about not found relations
            if (allRelations.length > 0)
                throw new FindRelationsNotFoundError_1.FindRelationsNotFoundError(allRelations);
        }
        if (options.join) {
            if (options.join.leftJoin)
                Object.keys(options.join.leftJoin).forEach(function (key) {
                    qb.leftJoin(options.join.leftJoin[key], key);
                });
            if (options.join.innerJoin)
                Object.keys(options.join.innerJoin).forEach(function (key) {
                    qb.innerJoin(options.join.innerJoin[key], key);
                });
            if (options.join.leftJoinAndSelect)
                Object.keys(options.join.leftJoinAndSelect).forEach(function (key) {
                    qb.leftJoinAndSelect(options.join.leftJoinAndSelect[key], key);
                });
            if (options.join.innerJoinAndSelect)
                Object.keys(options.join.innerJoinAndSelect).forEach(function (key) {
                    qb.innerJoinAndSelect(options.join.innerJoinAndSelect[key], key);
                });
        }
        if (options.cache) {
            if (options.cache instanceof Object) {
                var cache = options.cache;
                qb.cache(cache.id, cache.milliseconds);
            }
            else {
                qb.cache(options.cache);
            }
        }
        return qb;
    };
    // -------------------------------------------------------------------------
    // Protected Static Methods
    // -------------------------------------------------------------------------
    /**
     * Adds joins for all relations and sub-relations of the given relations provided in the find options.
     */
    FindOptionsUtils.applyRelationsRecursively = function (qb, allRelations, alias, metadata, prefix) {
        var _this = this;
        // find all relations that match given prefix
        var matchedBaseRelations = [];
        if (prefix) {
            var regexp_1 = new RegExp("^" + prefix.replace(".", "\\.") + "\\.");
            matchedBaseRelations = allRelations
                .filter(function (relation) { return relation.match(regexp_1); })
                .map(function (relation) { return relation.replace(regexp_1, ""); })
                .filter(function (relation) { return metadata.findRelationWithPropertyPath(relation); });
        }
        else {
            matchedBaseRelations = allRelations.filter(function (relation) { return metadata.findRelationWithPropertyPath(relation); });
        }
        // go through all matched relations and add join for them
        matchedBaseRelations.forEach(function (relation) {
            // add a join for the found relation
            var selection = alias + "." + relation;
            qb.leftJoinAndSelect(selection, alias + "_" + relation);
            // remove added relations from the allRelations array, this is needed to find all not found relations at the end
            allRelations.splice(allRelations.indexOf(prefix ? prefix + "." + relation : relation), 1);
            // try to find sub-relations
            var join = qb.expressionMap.joinAttributes.find(function (join) { return join.entityOrProperty === selection; });
            _this.applyRelationsRecursively(qb, allRelations, join.alias.name, join.metadata, relation);
        });
    };
    return FindOptionsUtils;
}());
exports.FindOptionsUtils = FindOptionsUtils;
//# sourceMappingURL=FindOptionsUtils.js.map