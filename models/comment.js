'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    author: DataTypes.STRING,
    permlink: DataTypes.STRING,
    parent_permlink: DataTypes.STRING,
    tags: DataTypes.JSON,
    app: DataTypes.JSON,
    timestamp: DataTypes.DATE
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};