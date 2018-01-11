import { QueryBuilderUtils } from "./QueryBuilderUtils";
/**
 * Stores all join attributes which will be used to build a JOIN query.
 */
var JoinAttribute = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function JoinAttribute(connection, queryExpressionMap, joinAttribute) {
        this.connection = connection;
        this.queryExpressionMap = queryExpressionMap;
        Object.assign(this, joinAttribute || {});
    }
    Object.defineProperty(JoinAttribute.prototype, "isMany", {
        // -------------------------------------------------------------------------
        // Public Methods
        // -------------------------------------------------------------------------
        get: function () {
            if (this.isMappingMany !== undefined)
                return this.isMappingMany;
            if (this.relation)
                return this.relation.isManyToMany || this.relation.isOneToMany;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "tablePath", {
        /**
         * Name of the table which we should join.
         */
        get: function () {
            return this.metadata ? this.metadata.tablePath : this.entityOrProperty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "parentAlias", {
        /**
         * Alias of the parent of this join.
         * For example, if we join ("post.category", "categoryAlias") then "post" is a parent alias.
         * This value is extracted from entityOrProperty value.
         * This is available when join was made using "post.category" syntax.
         */
        get: function () {
            if (!QueryBuilderUtils.isAliasProperty(this.entityOrProperty))
                return undefined;
            return this.entityOrProperty.substr(0, this.entityOrProperty.indexOf("."));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "relationPropertyPath", {
        /**
         * Relation property name of the parent.
         * This is used to understand what is joined.
         * For example, if we join ("post.category", "categoryAlias") then "category" is a relation property.
         * This value is extracted from entityOrProperty value.
         * This is available when join was made using "post.category" syntax.
         */
        get: function () {
            if (!QueryBuilderUtils.isAliasProperty(this.entityOrProperty))
                return undefined;
            return this.entityOrProperty.substr(this.entityOrProperty.indexOf(".") + 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "relation", {
        /**
         * Relation of the parent.
         * This is used to understand what is joined.
         * This is available when join was made using "post.category" syntax.
         * Relation can be undefined if entityOrProperty is regular entity or custom table.
         */
        get: function () {
            if (!QueryBuilderUtils.isAliasProperty(this.entityOrProperty))
                return undefined;
            var relationOwnerSelection = this.queryExpressionMap.findAliasByName(this.parentAlias);
            var relation = relationOwnerSelection.metadata.findRelationWithPropertyPath(this.relationPropertyPath);
            if (relation) {
                return relation;
            }
            if (relationOwnerSelection.metadata.parentEntityMetadata) {
                relation = relationOwnerSelection.metadata.parentEntityMetadata.findRelationWithPropertyPath(this.relationPropertyPath);
                if (relation) {
                    return relation;
                }
            }
            throw new Error("Relation with property path " + this.relationPropertyPath + " in entity was not found.");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "metadata", {
        /**
         * Metadata of the joined entity.
         * If table without entity was joined, then it will return undefined.
         */
        get: function () {
            // entityOrProperty is relation, e.g. "post.category"
            if (this.relation)
                return this.relation.inverseEntityMetadata;
            // entityOrProperty is Entity class
            if (this.connection.hasMetadata(this.entityOrProperty))
                return this.connection.getMetadata(this.entityOrProperty);
            return undefined;
            /*if (typeof this.entityOrProperty === "string") { // entityOrProperty is a custom table
    
                // first try to find entity with such name, this is needed when entity does not have a target class,
                // and its target is a string name (scenario when plain old javascript is used or entity schema is loaded from files)
                const metadata = this.connection.entityMetadatas.find(metadata => metadata.name === this.entityOrProperty);
                if (metadata)
                    return metadata;
    
                // check if we have entity with such table name, and use its metadata if found
                return this.connection.entityMetadatas.find(metadata => metadata.tableName === this.entityOrProperty);
            }*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "junctionAlias", {
        /**
         * Generates alias of junction table, whose ids we get.
         */
        get: function () {
            if (!this.relation)
                throw new Error("Cannot get junction table for join without relation.");
            return this.relation.isOwning ? this.parentAlias + "_" + this.alias.name : this.alias.name + "_" + this.parentAlias;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "mapToPropertyParentAlias", {
        get: function () {
            if (!this.mapToProperty)
                return undefined;
            return this.mapToProperty.split(".")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinAttribute.prototype, "mapToPropertyPropertyName", {
        get: function () {
            if (!this.mapToProperty)
                return undefined;
            return this.mapToProperty.split(".")[1];
        },
        enumerable: true,
        configurable: true
    });
    return JoinAttribute;
}());
export { JoinAttribute };

//# sourceMappingURL=JoinAttribute.js.map
