import axios from "axios";

const TODO_API = 'https://api.todoist.com/rest/v1/tasks'
const url = 'https://todoist-hw3.herokuapp.com/docs/'
const TODOIST_TOKEN = process.env.NEXT_PUBLIC_TODOIST_TOKEN
const PROJECT_ID = 'your project id'

class TaskService {
    static async getAllTasks(){
        try {
            const response = await axios.get('https://todoist-hw3.herokuapp.com/api/tasks/', {
                headers: {
                    'Authorization': 'Bearer $(TODOIST_TOKEN)'
                }
            });
            return response.data
        }catch(error){
            console.error('Error retrieving tasks:', error.response.data);
        }
    }   
    static async getTaskById(id){
        try {
            const response = await axios.get('https://todoist-hw3.herokuapp.com/api/tasks/' + id, {
                headers: {
                    'Authorization': 'Bearer $(TODOIST_TOKEN)'
                }
            });
            return response.data
        }catch(error){
            console.error('Error retrieving tasks:', error.response.data);
        }
    }   
    static async createNewTask(task){
        try {
            const response = await axios.create('https://todoist-hw3.herokuapp.com/api/tasks/', {
                headers: {
                    'Authorization': 'Bearer $(TODOIST_TOKEN)'
                }
            });
            return response.data
        }catch(error){
            console.error('Error retrieving tasks:', error.response.data);
        }
    }
    static async updateNewTask(id, task){
        // ваша реализация обновления существующей тудушки по ID
    }
    static async deleteNewTask(id){
        try {
            const response = await axios.delete('https://todoist-hw3.herokuapp.com/api/tasks/' + id, {
                headers: {
                    'Authorization': 'Bearer $(TODOIST_TOKEN)'
                }
            });
            return response.data
        }catch(error){
            console.error('Error retrieving tasks:', error.response.data);
        }D
    }
}

export default TaskService;