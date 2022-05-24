module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("students", {
    lrn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Student;
};
