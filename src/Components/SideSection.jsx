import React, { useState } from "react";
import NavTask from "./NavTask";
import AddTodo from "./AddTodo";

const SideSection = () => {
  const [homeCount, sethomeCount] = useState(0);
  const [completedCount, setcompletedCount] = useState(0);
  const [deletedCount, setDeletedCount] = useState(0);
  return (
    // fixed top-24 left-0 ml-6
    <section 

    className="sideSection fixed bg-green-100  rounded-2xl p-5 w-80 flex flex-col justify-between"
    >
      <div className="sideSectionWrapper  py-3 ">
        <NavTask
          src="/house-solid.svg"
          name="Home"
          counter={homeCount}
          navLink="/reactTodo/"
        />
     
        <NavTask
          src="/box-archive-solid.svg"
          name="completed"
          counter={completedCount}
          navLink="/reactTodo/completed"
        />
        <NavTask
          src="/trash-solid.svg"
          name="Deleted"
          counter={deletedCount}
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
