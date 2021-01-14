let obj = {
    lists: [],
    items: {}
}

let s = "Dogs";
let j = "Cats";

const handleAddList = (s) => {
    // Implement this function!
    obj.lists.push(s)
    obj.items[s] = []
}
handleAddList(s)
handleAddList(j)
console.log(obj);