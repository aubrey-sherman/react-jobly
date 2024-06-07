import { v4 as uuid } from "uuid";

/** Shows alerts from forms
 *
 * Props: array of alert messages
 * State: None
 *
 *
 */
function Alert({ messages }) {
  return (
    <div className="alert alert-danger">
      {messages.map(message => <p key={uuid()}>{message}</p>)}
    </div>
  );
}

export default Alert;