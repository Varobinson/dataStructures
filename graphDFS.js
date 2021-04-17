//Recursive
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

    DFSrecursive(vertex){
        const results = [];
        const visited = {};
        const list = this.adjacencyList;
        function DFSHelper(v){
            if(!v) return null;
            visited[v] = true;
            results.push(v);
             list[v].forEach(val => {
                if(!visited[val]){
                    return DFSHelper(val);
                }
            }
            )
        }
        DFSHelper(vertex);
        return results;
    }


    

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

//ITERATIVE

const DFSIterative = (start) =>{
    const results = [];
    const discovered = {};
    const stack = [];
    let list = graph.adjacencyList;
    stack.push(start);
    while(stack.length){
        let vertex = stack.pop();
        if(!discovered[vertex]){
            discovered[vertex] = true;
            results.push(vertex);
            list[vertex].forEach(val => {
                stack.push(val);
        })
        }
    }
    return results;
}

console.log(DFSIterative('A'));

