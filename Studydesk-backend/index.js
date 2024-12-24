const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors"); // To enable CORS
const corsOptions = {
  origin: [
    "http://localhost:5173",
    " http://localhost:5174",
    "http://localhost:5175",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
  credentials: true, // Enable cookies if needed
};
const CoursesList = [
  {
    id: 0,
    list: "Mathematics",
    menu: [{ video: false, id: 0, title: "btech -1 " }],
    p: "Mathematics is the backbone of computer science, providing the tools and methods necessary for solving problems and developing algorithms. Here are some key mathematical concepts that are foundational for understanding computer science, particularly in fields like data science, algorithms, machine learning, and more.",
  },
  {
    id: 1,
    list: "Physics",
    menu: [{ video: false, id: 0, title: "btech -1 " }],
    p: "Physics is a fundamental branch of science that explores the properties and interactions of matter and energy. While computer science is often thought of as a field based on software and abstract algorithms, physics plays a crucial role in hardware design, electronics, communication systems, and many other areas that are foundational to modern computing. Here’s an overview of key physics concepts relevant to computer science and engineering.",
  },
  {
    id: 2,
    list: "Chemistry",
    menu: [{ video: false, id: 0, title: "btech -1 " }],
    p: "Chemistry plays an important role in various branches of science and engineering, including materials science, nanotechnology, bioengineering, and environmental sciences. While it may not be a core subject in most computer science curriculums, knowledge of chemistry can be valuable for fields that involve hardware design, sensors, drug discovery, or even computational chemistry.",
  },
  {
    id: 3,
    list: "HTML",
    menu: [
      { video: false, id: 0, title: "HTML Introduction" },
      { video: false, id: 1, title: "HTML Basic" },
      { video: false, id: 2, title: "HTML Elements" },
      { video: false, id: 3, title: "HTML Attributes" },
      { video: false, id: 4, title: "HTML Headings" },
      { video: false, id: 5, title: "HTML Paragraphs" },
      { video: false, id: 6, title: "HTML Styles" },
      { video: false, id: 7, title: "HTML Text Formatting" },
      { video: false, id: 8, title: "HTML Quotation" },
      { video: false, id: 9, title: "HTML Comments" },
      { video: false, id: 10, title: "HTML Colors" },
      { video: false, id: 11, title: "HTML Links" },
      { video: false, id: 12, title: "HTML Images" },
      { video: false, id: 13, title: "HTML Favicon" },
      { video: false, id: 15, title: "HTML Page Title" },
      { video: false, id: 16, title: "HTML Tables" },
      { video: false, id: 17, title: "HTML Lists" },
      { video: false, id: 18, title: "HTML Block&inline" },
      { video: false, id: 18, title: "HTML Div " },
      { video: false, id: 19, title: "HTML class " },
      { video: false, id: 20, title: "HTML id" },
      { video: false, id: 21, title: "HTML Iframes" },
    ],
    p: "HTML (HyperText Markup Language) HTML is the standard language used to create and structure content on the web. It defines the structure of web pages by using a system of tags or elements. ",
  },
  {
    id: 4,
    list: "CSS",
    menu: [{ video: false }],
    p: " CSS (Cascading Style Sheets) CSS is a stylesheet language used to describe the presentation of an HTML document. While HTML provides the structure and content, CSS is used to control the layout, colors, fonts, and overall visual appearance of the web page. It allows you to separate the content from its presentation, making it easier to maintain and update the design of a website.",
  },
  {
    id: 5,
    list: "Javascript",
    menu: [{ video: false }],
    p: "JavaScript (JS) JavaScript is a versatile and powerful programming language that enables you to create interactive and dynamic content on web pages. While HTML provides structure and CSS adds style, JavaScript adds functionality to websites, allowing for features like form validation, animations, dynamic updates, and user interaction without reloading the page.",
  },
  {
    id: 6,
    list: "C progamming langauge",
    menu: [
      {
        id: 0,
        title: "C Home",
        video: false,
        text: [
          " <h2><b>C Programming Language</b></h2><p className=`mt-2 px-4 py-4 bg-sky-100 rounded-2xl`> C is a general-purpose, procedural  programming language that is widely used for system programming,  embedded systems, operating systems, and application development. It  is known for its efficiency, speed, and portability, making it an  essential language for understanding low-level programming concepts.</p></br><p>The C programming language is highly versatile and can be used in a wide variety of applications due to its efficiency, portability, and close-to-hardware capabilities. Here are some areas where C is commonly used:</p> </br> <b>1. Operating Systems Development </b>  C is the backbone of many operating systems, such as Unix, Linux, and parts of Windows. It is ideal for system-level programming because of its low-level access to memory and hardware.</br><b> 2. Embedded Systems C </br></b> is extensively used in programming microcontrollers and embedded systems in devices like IoT gadgets, automotive systems, home appliances, and medical devices.</br><b> 3. System Programming </br></b> Includes development of compilers, interpreters, device drivers, and file systems. C provides fine-grained control over system resources.</br><b> 4. Game Development</br></b> The speed and performance of C make it a good choice for game engines and resource-intensive applications.</br><b> 5. Databases</br></b> Popular databases like MySQL and SQLite are written in C, showcasing its capability in high-performance applications.</br><b> 6. Network Programming</br></b> C is used to build networking applications such as socket programming, protocol implementation, and real-time network services.</br><b> 7. Desktop Applications </br></b> Though less common today for GUI-heavy apps, C is still used for performance-critical applications and utilities.</br><b> 8. Scientific Computing and Engineering Applications</br></b> Often used in simulations, high-performance computing, and mathematical computations because of its speed.</br><b> 9. Compiler Design </br></b>Many compilers are implemented in C, including GCC (GNU Compiler Collection).</br><b> 10. IoT and Robotics</br></b> C is a common choice for programming hardware interfaces and robotics due to its direct control of hardware.</br><b> 11. Cybersecurity Tools </br></b>Many security tools and frameworks are written in C due to its low-level access and efficiency.</br></br><b> Why C is Popular for These Applications:</br></b><b> Efficiency:</br></b> Produces fast and efficient executables. Portability: C programs can be compiled on different platforms with little or no modification.</br><b> Close to Hardware:</br></b> Provides low-level memory manipulation capabilities.</br><b> Widely Supported:</br></b> Almost all modern processors and operating systems support C compilers. ",
        ],
      },
      {
        id: 0,
        title: "C Syntax",
        video: true,
        src: "rQoqCP7LX60",
        text: [
          "#include <stdio.h>  // Preprocessor directive for input/output // Main function where the program starts execution int main() {// Your code here return 0;  // Indicates successful program execution}",
        ],
      },
      {   video: true,
          src: "7PSfRdeY5qE",
        id: 0,
        title: "C Comments" },
      { video: true,
        src: "wYvrBXUfFfw",
        id: 0,
        title: "C Output & input" },
      { video: false, id: 0, title: "C Data Types" },
      { video: false, id: 0, title: "C Variable declaration" },
      { video: false, id: 0, title: "C Operators" },
      { video: false, id: 0, title: "C Conditional Statements" },
      { video: false, id: 0, title: "C Loops" },
      { video: false, id: 0, title: "C Arrays" },
      { video: false, id: 0, title: "C Strings" },
      { video: false, id: 0, title: "C Pointers" },
      { video: false, id: 0, title: "C Functions" },
      { video: false, id: 0, title: "C Files" },
      { video: false, id: 0, title: "C Structures" },
      { video: false, id: 0, title: "C Reference" },
      { video: false, id: 0, title: "C Basic projects" },
      { video: false, id: 0, title: "C Exercises" },
    ],
    p: "C Programming Language C is a general-purpose, procedural programming language that is widely used for system programming, embedded systems, operating systems, and application development. It is known for its efficiency, speed, and portability, making it an essential language for understanding low-level programming concepts.",
  },
  {
    id: 7,
    list: "Python",
    menu: [
      { video: false, id: 0, title: "Python Home" },
      { video: false, id: 0, title: "Python Syntax" },
      { video: false, id: 0, title: "Python Comments" },
      { video: false, id: 0, title: "Python Output & input" },
      { video: false, id: 0, title: "Python Data Types" },
      { video: false, id: 0, title: "Python Variable declaration" },
      { video: false, id: 0, title: "Python Casting" },
      { video: false, id: 0, title: "Python Operators" },
      { video: false, id: 0, title: "Python Conditional Statements" },
      { video: false, id: 0, title: "Python Lambda" },
      { video: false, id: 0, title: "Python Lists" },
      { video: false, id: 0, title: "Python Arrays" },
      { video: false, id: 0, title: "Python Tuples" },
      { video: false, id: 0, title: "Python Sets" },
      { video: false, id: 0, title: "Python Functions" },
      { video: false, id: 0, title: "Python Classes/Objects" },
      { video: false, id: 0, title: "Python Math" },
      { video: false, id: 0, title: "Python Json" },
      { video: false, id: 0, title: "Python Basic projects" },
      { video: false, id: 0, title: "Python Exercises" },
    ],
    p: "Python Programming Language Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used for web development, data analysis, artificial intelligence, scientific computing, automation, and more. Python emphasizes code readability and reduces the cost of program maintenance, making it ideal for both beginners and experienced developers.",
  },
];
const origin = [
  "http://localhost:5173",
  " http://localhost:5174",
  "http://localhost:5175",
  "http://192.168.31.253:5173/"
  
];
app.use(cors(origin));
// Middleware to parse JSON
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.send("Welcome to my Node.js backend!");
});

app.get("/api", (req, res) => {
  res.json({ CoursesList });
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// Example POST route
app.post("/api/data", (req, res) => {
  const data = req.body; // Get data from the request body
  res.json({ message: "Data received!", data });
});

// Example GET route with a parameter
// app.get('/api/users/:id', (req, res) => {
//     const userId = req.params.id;
//     res.json({ userId, name: 'John Doe' });
// });
