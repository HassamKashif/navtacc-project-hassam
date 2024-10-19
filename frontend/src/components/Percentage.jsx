import React, { useEffect, useState } from "react";
import { useTask } from "../contexts/TaskContext";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Percentage() {
  const { tasks } = useTask();
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const total = tasks.length;
    const completed = habits.filter((tasks) => tasks.isCompleted).length;
    setTotalCount(total);
    setCompletedCount(completed);
  }, [tasks]);

  const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="flex justify-center items-center mb-4">
      {" "}
      {/* Center the circle */}
      <div className="w-20 h-20">
        {" "}
        {/* Set the width and height for the circle */}
        <CircularProgressbar
          value={percentage}
          text={`${Math.round(percentage)}%`}
          strokeWidth={10} // Adjust stroke width if necessary
        />
      </div>
    </div>
  );
}

export default Percentage;
