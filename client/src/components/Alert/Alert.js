import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function Alert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissable>
        <Alert.Heading>Dog successfully added!</Alert.Heading>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>ShowAlert</Button>
}
