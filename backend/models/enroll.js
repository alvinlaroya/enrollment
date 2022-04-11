module.exports = (sequelize, DataTypes) => {
  const Enroll = sequelize.define("enrolls", {
    a1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    a3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    a4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    a5: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    a6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a8: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a9: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a10: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    a11: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a12: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a13: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a14: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a15: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a16: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b5: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b8: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b9: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    b10: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    b11: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b12: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b13: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b14: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b15: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b16: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b17: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b18: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b20: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b21: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b22: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b23: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b24: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c2: DataTypes.JSON,
    c3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c4: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c5: DataTypes.JSON,
    c6: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c7: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c8: DataTypes.JSON,
    c9: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    c10: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    d1: DataTypes.JSON,
    d2: DataTypes.JSON,
    d3: DataTypes.JSON,
    d4: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    d5: DataTypes.JSON,
    d6: DataTypes.JSON,
    d7: DataTypes.JSON,
    e1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    e2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    f1: {
      type: DataTypes.STRING,
    },
    f2: {
      type: DataTypes.STRING,
    },
    f3: {
      type: DataTypes.STRING,
    },
    f4: {
      type: DataTypes.STRING,
    },
    enrolled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Enroll;
};
