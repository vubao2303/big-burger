// // Import MySQL connection.
// var connection = require("../config/connection.js");

// // Helper function for SQL syntax.
// // Let's say we want to pass 3 values into the mySQL query.
// // In order to write the query, we need 3 question marks.
// // The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// // ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];
// try this again 
const connection = require(`../config/connection.js`);

function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; ++i) {
    arr.push(`?`);
  }

  return arr.toString();
}

function objToSql(ob) {
  const arr = [];

  // eslint-disable-next-line guard-for-in
  for (const key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === `string` && value.indexOf(` `) >= 0) {
        value = `'${ value }'`;
      }
      arr.push(`${ key }=${ value }`);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll(tableInput, cb) {
    const queryString = `SELECT * FROM ${ tableInput };`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${ table }`;

    queryString += ` (`;
    queryString += cols.toString();
    queryString += `) `;
    queryString += `VALUES (`;
    queryString += printQuestionMarks(vals.length);
    queryString += `) `;

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${ table }`;

    queryString += ` SET `;
    queryString += objToSql(objColVals);
    queryString += ` WHERE `;
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  deleteOne(table, condition, cb) {
    let queryString = `DELETE FROM ${ table }`;
    queryString += ` WHERE `;
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;