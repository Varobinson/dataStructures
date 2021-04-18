//Graph BFS
class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        
    }

    
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    
    removeEdge(v1,v2){
        let list = this.adjacencyList
        list[v1] = list[v1].filter((v) => v !== v2);
        list[v2] = list[v2].filter((v) => v !== v1);
    }
    
    removeVertex(vertex){
        let list = this.adjacencyList;
        for(let edge of list[vertex] ){
            this.removeEdge(vertex, edge);
        }
        delete list[vertex];
    }



    
}

const BFS = (start) =>{
    const list = graph.adjacencyList,
    visited = {},
    queue = [start],
    result = [];
    visited[start] = true;
    while(queue.length){
        let vertex = queue.shift();
        result.push(vertex);
        list[vertex].forEach(val => {
        if(!visited[val]){
            visited[val] = true;
                queue.push(val);
            }
        })
    }
    return result;

}
    


let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('B','D');
graph.addEdge('C','E');
graph.addEdge('D','E');
graph.addEdge('D','F');
graph.addEdge('E','F');


console.log(graph);

console.log(BFS('A'))