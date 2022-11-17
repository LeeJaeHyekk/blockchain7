const Sequelize = reqiure("sequelize");
module.exports = class User extends Sequelize.module {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(255),
        },
        pw: {
          type: Sequelize.STRING(50),
        },
        nickName: {
          type: Sequelize.STRING(50),
        },
      },
      {
        sequelize,
        timestemps: true,
        paranoid: true,
        underscored: true,
        // modelName: "User",
        // character:
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Chat, {
      foreignKey: "user_id",
      sourceKey: "id",
      as: "chats",
    });
  }
};
