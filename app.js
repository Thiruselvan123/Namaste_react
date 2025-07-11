const parent = React.createElement("parent", { id: "parent" }, [
  React.createElement("child", { id: "child1" }, [
    React.createElement("h1", {}, "Hi i am an h1 tag"),
    React.createElement("h2", {}, "Hi i am an h2 tag"),
  ]),
  React.createElement("child", { id: "child2" }, [
    React.createElement("h1", {}, "Hi i am an h1 tag"),
    React.createElement("h2", {}, "Hi i am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
