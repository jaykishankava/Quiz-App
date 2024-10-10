export const quizzes = [
  {
      id: 1,
      title: "JavaScript Basics",
      description: "Test your knowledge of JavaScript basics.",
      questions: [
          {
              question: "What is the output of '2 + '2' in JavaScript?",
              options: ["22", "4", "undefined"],
              correctAnswer: "22",
          },
          {
              question: "Which company developed JavaScript?",
              options: ["Google", "Netscape", "Microsoft"],
              correctAnswer: "Netscape",
          },
          {
              question: "What is the correct syntax for referring to an external script called 'app.js'?",
              options: [
                  "<script src='app.js'>",
                  "<script href='app.js'>",
                  "<script name='app.js'>",
                  "<script file='app.js'>"
              ],
              correctAnswer: "<script src='app.js'>"
          },
          {
              question: "Which operator is used to compare both value and type in JavaScript?",
              options: ["=", "==", "===", ":="],
              correctAnswer: "==="
          },
          {
              question: "What will the following code return: Boolean('')?",
              options: ["true", "false", "undefined", "NaN"],
              correctAnswer: "false"
          },
          {
              question: "Which of the following is NOT a JavaScript data type?",
              options: ["string", "boolean", "array", "undefined"],
              correctAnswer: "array"
          }
      ],
  },
  {
    id: 2,
    title: "React JS",
    description: "A quiz about the fundamentals of React.",
    questions: [
        {
            question: "What is React's primary goal?",
            options: ["Handling database queries", "Building user interfaces", "Managing state", "Creating APIs"],
            correctAnswer: "Building user interfaces",
        },
        {
            question: "What is the purpose of React Hooks?",
            options: [
                "To manage lifecycle methods",
                "To write stateful components without using classes",
                "To fetch data from APIs",
                "To style React components"
            ],
            correctAnswer: "To write stateful components without using classes"
        },
        {
            question: "What is the key feature of the 'useState' hook in React?",
            options: ["It stores dynamic data", "It stores static data", "It modifies the DOM", "It sends API requests"],
            correctAnswer: "It stores dynamic data"
        },
        {
            question: "Which hook should be used to run side effects in a functional component?",
            options: ["useEffect", "useState", "useReducer", "useContext"],
            correctAnswer: "useEffect"
        },
        {
            question: "How do you handle component reusability in React?",
            options: [
                "Using props and children",
                "Using multiple useState hooks",
                "Using state in every component",
                "Using useEffect only"
            ],
            correctAnswer: "Using props and children"
        },
        {
            question: "What does React use to efficiently update the UI?",
            options: [
                "Direct DOM manipulation",
                "Virtual DOM",
                "Shadow DOM",
                "Real DOM"
            ],
            correctAnswer: "Virtual DOM"
        },
    ],
},
{
    id: 3,
    title: "HTML & CSS",
    description: "Test your knowledge on the fundamentals of HTML and CSS.",
    questions: [
        {
            question: "What is the purpose of the <meta> tag in HTML?",
            options: [
                "Defines document metadata",
                "Creates a link to a stylesheet",
                "Embeds multimedia content",
                "Displays headings"
            ],
            correctAnswer: "Defines document metadata"
        },
        {
            question: "Which of the following is correct for creating a hyperlink in HTML?",
            options: [
                "<a url='example.com'>Link</a>",
                "<a href='example.com'>Link</a>",
                "<link src='example.com'>Link</link>",
                "<href='example.com'>Link</href>"
            ],
            correctAnswer: "<a href='example.com'>Link</a>"
        },
        {
            question: "How can you make an element span across multiple columns in CSS grid?",
            options: [
                "grid-column: span 2;",
                "column-span: 2;",
                "grid-columns: span 2;",
                "span-columns: 2;"
            ],
            correctAnswer: "grid-column: span 2;"
        },
        {
            question: "Which CSS property is used to make text bold?",
            options: [
                "font-style",
                "text-weight",
                "font-weight",
                "font-bold"
            ],
            correctAnswer: "font-weight"
        },
        {
            question: "How do you center a block element horizontally in CSS?",
            options: [
                "text-align: center;",
                "align-content: center;",
                "margin: auto;",
                "display: inline-block;"
            ],
            correctAnswer: "margin: auto;"
        },
        {
            question: "What is the correct way to set a fixed background image in CSS?",
            options: [
                "background-attachment: fixed;",
                "background-position: fixed;",
                "background-repeat: no-repeat;",
                "background: fixed;"
            ],
            correctAnswer: "background-attachment: fixed;"
        },
        {
            question: "Which HTML5 element is used for rendering multi-line text input?",
            options: [
                "<input>",
                "<textarea>",
                "<textbox>",
                "<text>"
            ],
            correctAnswer: "<textarea>"
        },
    ],
},
  // Additional quizzes as they were previously
];
