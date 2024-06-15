import React from "react";
import stories from "./stories.json";

function NewPosts() {
  return (
    <div className="mt-8 w-[90%]">
      <div className="">New stories</div>
      
      <div className="scroll-container space-y-10 border border-green-900">

      
      {stories.map((story) => {
        return (
          <div className="recent-story-card  bg-card-bg w-[80%]">
            <div className="">
              <div className="card-cover">
                <img src={story.coverimg} className="w-full h-full" />
              </div>
              <div className="card-title">{story.title}</div>
            </div>
          </div>
        );
      })}</div>
    </div>
  );
}

export default NewPosts;
