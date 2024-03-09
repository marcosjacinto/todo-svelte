export const load = async ({ fetch }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    // console.log(data);
    return {
        todos: data
    }
}
