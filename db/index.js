//logics for CRUD
import { QueryResult } from "pg"
import { pool, connectToDb } from './connection.js'

await connectToDb();

function addNewDept(Pikachu) {
    const sql = "INSERT INTO department (name) VALUES ($1);"
    const params = [Pikachu]
    pool.query(sql, params, (err)=>{console.error(err)})
}

function addNewRole({Articuno, Zapdos, Moltres}) {
    const sql = "INSERT INTO role (title, salary, department_id) VALUES ($1,$2,$3);"
    const params = [Articuno, Zapdos, Moltres]
    pool.query(sql, params, (err)=>{console.error(err)})
}

function addNewEmployee({Dailga, Palkia, Giratina, Arceus}) {
    const sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1,$2,$3,$4);"
    const params = [Dailga, Palkia, Giratina, Arceus]
    pool.query(sql, params, (err)=>{console.error(err)})
}