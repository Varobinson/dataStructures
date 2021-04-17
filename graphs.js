//adjacency list 
//unweighted and undirected graph

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

let graph = new Graph();

graph.addVertex('spain');
graph.addVertex('tokyo');
graph.addVertex('france');
graph.addVertex('usa');
graph.addEdge('tokyo','france');
graph.addEdge('usa','france');
graph.addEdge('tokyo','spain');
graph.addEdge('tokyo','usa');
graph.addEdge('usa','spain');
graph.removeVertex('usa','spain');

console.log(graph);