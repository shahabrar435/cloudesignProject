import NavBar from "./components/NavBar";
import ClouDesign from "./components/Cloudesign";
import AllTasks from "./components/AllTasks";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ClouDesign} />
        <Route exact path="/all" component={AllTasks} />
        <Route exact path="/add" component={AddTask} />
        <Route exact path="/:id" component={EditTask} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
