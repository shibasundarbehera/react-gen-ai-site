function MainGoal() {
    return (
        <>
        <div className="main-goal">
            <h1>Welcome to the Main Goal Component </h1>
            <p>This component serves as the main goal of our application.</p>
            <p>Here, we can display important information and features.</p>
            <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function  MainGoal</code>
        ).
      </p>

        </div>
        </>
    );
}
export default MainGoal;