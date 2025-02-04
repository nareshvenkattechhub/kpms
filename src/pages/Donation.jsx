import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const DonationForm = () => {
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [10, 100, 1000, 10000, 100000, 1000000, 10000000];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
      <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}>
        <Card.Body>
          <h5 className="text-center mb-3">Selected Amount: ₹{custom ? customAmount || "0" : amount}</h5>
          {!custom ? (
            <Form>
              {amounts.map((amt) => (
                <Form.Check
                  key={amt}
                  type="radio"
                  label={`₹${amt}`}
                  name="donation"
                  onChange={() => { setAmount(amt); setCustom(false); }}
                  checked={amount === amt}
                  className="mb-2"
                />
              ))}
              <Form.Check
                type="radio"
                label="Custom Amount"
                name="donation"
                onChange={() => setCustom(true)}
                className="mb-2"
              />
            </Form>
          ) : (
            <Form.Group className="mb-3">
              <Form.Label>Enter Custom Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </Form.Group>
          )}
          <Button variant="primary" className="w-100 mt-3" disabled={!amount && !customAmount}>
            You're Paying ₹{custom ? customAmount || "0" : amount}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DonationForm;
