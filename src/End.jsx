export function End({ _resetFunction, _score }) {
  let message;
  if (_score === 25) {
    message = (
      <>
        <h4>CONGRATULATIONS!</h4>
        <p>Didn't expect anyone would achieve this, but here you are!</p>
        <p>Thanks for playing</p>
      </>
    );
  } else {
    message = (
      <>
        <h5>You lost</h5>
        <p>You have made a mistake, try again</p>
      </>
    );
  }
  return (
    <div className="end" key="end">
      <div>
        {message}
        <button onClick={_resetFunction}>RESTART</button>
      </div>
    </div>
  );
}
