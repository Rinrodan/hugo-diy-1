module.exports = { 
    content: {
        relative: true,
        files: [
            "./content/**/*.md",  
            "./content/page/**/*.md", 
            "./layouts/**/*.html",
            "/layouts/**/*.html",
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [],
};