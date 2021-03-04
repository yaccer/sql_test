// Task A02
// Design a suitable, single SQL ‘CREATE TABLE’ instruction that results
// in the creation (IF NOT EXISTS) of the ‘Messages’ table as illustrated in the AdaBoard schema;
// don’t forget to include the Primary Key and Foreign Key constraint - ensure your FK cascades any user table deletes.
// Repeat the setup for “CURRENT_TIMESTAMP” as outlined in the previous requirement.

const createMessages = `

CREATE TABLE IF NOT EXISTS Messages(
    id INTEGER NOT NULL PRIMARY KEY,
    message TEXT,
    userid INTEGER NOT NULL,
    created INTEGER(4) DEFAULT (strftime('%s','now')),
    archive INTEGER(1) DEFAULT 0
);

`
module.exports = { createMessages };