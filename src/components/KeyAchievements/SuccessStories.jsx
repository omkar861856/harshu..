import { Steps } from "antd";

const SuccessStories = () => {
  return (
    <div>
      <h1>Success stories</h1>
      <br />
      <Steps
        direction="vertical"
        current={1}
        items={[
          {
            title: "Ideation",
            description: "End to end ideation of commerce",
          },
          {
            title: "Execution",
            description: "Creating designs.",
          },
          {
            title: "Taking Off",
            description: "First Steps...",
          },
        ]}
      />
    </div>
  );
};

export default SuccessStories;
