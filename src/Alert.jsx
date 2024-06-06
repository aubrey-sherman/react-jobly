/** Shows alerts from forms
 *
 * Props: array of alert messages
 * State: None
 *
 *
 */
function Alert({ messages }) {
  return (
    <div>
      {messages.map(message => {
        return <div>{message}</div>
      })}
    </div>
  );
}

export default Alert;