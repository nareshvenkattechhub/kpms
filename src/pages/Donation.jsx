import { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SubscriptionForm = () => {
  const [amount, setAmount] = useState(null);
  const [custom, setCustom] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const navigate = useNavigate();

  const amounts = [310, 500, 1000, 10000, 100000, 1000000, 5000000];

  useEffect(() => {
    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded!");
    }
  }, []);

  const handleAmountChange = (amt) => {
    setAmount(amt);
    setCustom(false);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };

  const handleSubscribe = async () => {
    const finalAmount = custom ? parseInt(customAmount, 10) : amount;
    if (!finalAmount || finalAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setIsPaying(true);

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id;

      if (!userId) {
        throw new Error("User ID not found in localStorage");
      }

      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        body: JSON.stringify({ amount: finalAmount, userId }),
        headers: { "Content-Type": "application/json" },
      });

      const order = await response.json();
      if (!order?.id) {
        throw new Error("Invalid order response");
      }

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not available");
      }

      const options = {
        key: "rzp_test_lIViua73ZlKVhi",
        amount: order.amount,
        currency: "INR",
        name: "KPMPP",
        description: `Subscription Payment`,
        order_id: order.id,
        notes: { userId },
        handler: function () {
          localStorage.setItem("subscriptionStatus", "active");
          navigate("/complaint");
        },
        prefill: {
          name: user?.name || "User Name",
          email: user?.email || "user@example.com",
          contact: user?.contact || "9999999999",
        },
        theme: { color: "#6a11cb" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "#f5f5f5" }}>
      <Card className="p-4 shadow-lg" style={{
        width: "100%", 
        maxWidth: "500px", 
        borderRadius: "15px",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)", 
        color: "white"
      }}>
        <Card.Header className="text-center fw-bold fs-4" style={{ borderBottom: "2px solid white" }}>
          KPMPP DONATION
        </Card.Header>
        <Card.Body>
          <h5 className="text-center mb-4">You're paying ₹{custom ? customAmount : amount || "0"}</h5>
          <Form>
            <Row className="mb-3">
              {amounts.map((amt) => (
                <Col xs={4} key={amt} className="text-center">
                  <Button 
                    variant={amount === amt ? "light" : "outline-light"} 
                    onClick={() => handleAmountChange(amt)}
                    className="w-100 mb-2"
                    style={{ borderRadius: "10px", fontWeight: "bold" }}
                  >
                    ₹{amt}
                  </Button>
                </Col>
              ))}
            </Row>
            <Form.Check
              type="radio"
              label="Custom Amount"
              name="subscription"
              onChange={() => {
                setCustom(true);
                setAmount(null);
              }}
              checked={custom}
              className="mb-3"
            />
            {custom && (
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount || ""}
                  onChange={handleCustomAmountChange}
                  className="text-center fw-bold"
                  style={{ background: "rgba(255, 255, 255, 0.2)", color: "white", border: "none" }}
                />
              </Form.Group>
            )}
          </Form>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button
            variant="light"
            className="w-100 fw-bold"
            onClick={handleSubscribe}
            disabled={isPaying}
            style={{ borderRadius: "10px", fontSize: "18px" }}
          >
            {isPaying ? "Processing..." : `Pay ₹${custom ? customAmount : amount || "0"}`}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SubscriptionForm;
