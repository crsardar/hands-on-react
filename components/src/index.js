import React from "react";
import ReactDOM from "react-dom";

import ComponentDetail from "./ComponentDetail";
import ComponentDetailFunctional from "./ComponentDetailFunctional";
import ApprovalCard from "./ApprovalCard";

// Import Faker lib
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <ComponentDetail
          avatar={faker.image.avatar()}
          author="CR Sardar"
          timeAgo="Today at 5:30 AM"
          content="Good Job!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          avatar={faker.image.avatar()}
          author="Chhattu"
          timeAgo="Yesterday at 6:11 PM"
          content="Great works! Keep it up!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          avatar={faker.image.avatar()}
          author="Akash"
          timeAgo="Nov 11, at 11:30 AM"
          content="Wow! That's good!"
        />
      </ApprovalCard>
      {/*     
      Bellow lines will aso works. Test once.
      <ApprovalCard>
        <h3>Warning!</h3>
        Are you sure?
      </ApprovalCard>

      <ComponentDetailFunctional
        avatar={faker.image.avatar()}
        author="Akash"
        timeAgo="Nov 11, at 11:30 AM"
        content="Wow! That's good!"
      /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
