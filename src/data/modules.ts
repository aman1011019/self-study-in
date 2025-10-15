export interface Module {
  id: string;
  title: string;
  description: string;
  videos: number;
  duration: string;
  completed?: boolean;
}

export const courseModules: Record<string, Module[]> = {
  "data-structures": [
    {
      id: "intro",
      title: "Introduction to Data Structures",
      description: "Understanding the fundamentals and importance of data structures",
      videos: 3,
      duration: "45 min",
    },
    {
      id: "arrays",
      title: "Arrays and Dynamic Arrays",
      description: "Working with static and dynamic arrays, array operations",
      videos: 5,
      duration: "1h 20min",
    },
    {
      id: "linked-lists",
      title: "Linked Lists",
      description: "Singly, doubly, and circular linked lists implementation",
      videos: 6,
      duration: "1h 45min",
    },
    {
      id: "stacks-queues",
      title: "Stacks and Queues",
      description: "LIFO and FIFO data structures with practical applications",
      videos: 4,
      duration: "1h 10min",
    },
    {
      id: "trees",
      title: "Trees and Binary Trees",
      description: "Tree traversals, binary search trees, AVL trees",
      videos: 8,
      duration: "2h 30min",
    },
    {
      id: "graphs",
      title: "Graphs",
      description: "Graph representations, BFS, DFS, shortest paths",
      videos: 7,
      duration: "2h 15min",
    },
    {
      id: "hashing",
      title: "Hashing and Hash Tables",
      description: "Hash functions, collision resolution, applications",
      videos: 5,
      duration: "1h 30min",
    },
    {
      id: "heaps",
      title: "Heaps and Priority Queues",
      description: "Min heap, max heap, heap operations, priority queues",
      videos: 4,
      duration: "1h 15min",
    },
  ],
  "algorithms": [
    {
      id: "intro-algorithms",
      title: "Introduction to Algorithms",
      description: "Algorithm analysis, time and space complexity",
      videos: 4,
      duration: "1h",
    },
    {
      id: "sorting",
      title: "Sorting Algorithms",
      description: "Bubble sort, merge sort, quick sort, heap sort",
      videos: 6,
      duration: "1h 50min",
    },
    {
      id: "searching",
      title: "Searching Algorithms",
      description: "Linear search, binary search, interpolation search",
      videos: 4,
      duration: "1h 10min",
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming",
      description: "Memoization, tabulation, classic DP problems",
      videos: 8,
      duration: "2h 40min",
    },
    {
      id: "greedy",
      title: "Greedy Algorithms",
      description: "Greedy approach, activity selection, Huffman coding",
      videos: 5,
      duration: "1h 35min",
    },
    {
      id: "graph-algorithms",
      title: "Graph Algorithms",
      description: "Dijkstra's, Bellman-Ford, Floyd-Warshall, Kruskal's",
      videos: 7,
      duration: "2h 20min",
    },
  ],
  "web-development": [
    {
      id: "html-basics",
      title: "HTML Fundamentals",
      description: "HTML5 elements, semantic markup, forms",
      videos: 5,
      duration: "1h 30min",
    },
    {
      id: "css-styling",
      title: "CSS and Styling",
      description: "CSS selectors, flexbox, grid, animations",
      videos: 7,
      duration: "2h 10min",
    },
    {
      id: "javascript-basics",
      title: "JavaScript Basics",
      description: "Variables, functions, DOM manipulation",
      videos: 6,
      duration: "1h 50min",
    },
    {
      id: "responsive-design",
      title: "Responsive Web Design",
      description: "Mobile-first design, media queries, frameworks",
      videos: 4,
      duration: "1h 20min",
    },
    {
      id: "frameworks",
      title: "Modern Frameworks",
      description: "Introduction to React, Vue, and Angular",
      videos: 8,
      duration: "2h 45min",
    },
  ],
};
