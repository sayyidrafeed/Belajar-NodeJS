export class TodolistService {
    todolist = ["Tidur", "Makan", "Ngising"];

    getJsonTodolist() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    };

    getTodolist(req, res) {
        res.write(this.getJsonTodolist());
        res.end();
    };

    createTodo(req, res) {
         req.on("data", data => {
             const body = JSON.parse(data.toString());
             this.todolist.push(body.todo);

             res.write(this.getJsonTodolist());
             res.end();
         })
    }

    updateTodo(req, res) {
        req.on("data", data => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist[body.id] = body.todo;
            }

            res.write(this.getJsonTodolist());
            res.end();
        })
    }

    deleteTodo(req, res) {
        req.on("data", data => {
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist.splice(body.id, 1 );
            }

            res.write(this.getJsonTodolist());
            res.end();
        })
    }
}