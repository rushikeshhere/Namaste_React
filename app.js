

/*
 this is the multi line comment

     <div id="Parent">
        <div id="child">
            <h1>This is the H1 Tag from child</h1>
            <h2>This is the h2 tag from child</h2>
        </div>
        <div id="child2">
            <h2>This is the h2 tag from child2</h2>
        </div>
    </div>
*/


const heading = React.createElement("h1", { id: "Parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is the H1 Tag from child"),
        React.createElement("h2", {}, "This is the H2 Tag from child")
        ]), React.createElement("div", { id: "child2" },
            [React.createElement("h1", {}, "This is the H1 Tag from child2"),
            React.createElement("h2", {}, "This is the H2 Tag from child2")
            ])]);

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement);
root.render(heading);


// for single tag we can use
/*
    const heading = React.createElement("h1", {}, "This is the H1 tag"); // this is nothing but object
    const rootElement = document.getElementById("root")
    const root = ReactDOM.createRoot(rootElement);
    root.render(heading);
 */


    

// javaScript code to print h1 tag
/*
const head = document.createElement("h1");
head.innerHTML = "This is the just testing to show h1 tag using js"

const root1 = document.getElementById("root");
root1.appendChild(head)
*/