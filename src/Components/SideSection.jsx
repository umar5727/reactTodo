import React, { useState } from "react";
import NavTask from "./NavTask";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";

const SideSection = () => {
  // const [homeCount, sethomeCount] = useState(0);
  // const [completedCount, setcompletedCount] = useState(0);
  // const [deletedCount, setDeletedCount] = useState(0);
  const homeCount = useSelector((state) => state.todos);
  const completedCount=useSelector(state=>state.completedTodos);
  const deletedCount=useSelector(state=>state.deletedTodos);
  return (
    // fixed top-24 left-0 ml-6
    <section 

    className="sideSection fixed bg-green-100  rounded-2xl p-5 w-80 flex flex-col justify-between"
    >
      <div className="sideSectionWrapper  py-3 ">
        <NavTask
          src="house-solid.svg"
          name="Home"
          counter={homeCount.length}
          navLink="/reactTodo/"
        />
     
        <NavTask
          src="box-archive-solid.svg"
          name="completed"
          counter={completedCount.length}
          navLink="/reactTodo/completed"
        />
        <NavTask
          src="trash-solid.svg"
          name="Deleted"
          counter={deletedCount.length}
          navLink="/reactTodo/deleted"
        />
      </div>
      {/* add task starts  */}
      <div>
        <AddTodo />
      </div>
    </section>
  );
};

export default SideSection;
