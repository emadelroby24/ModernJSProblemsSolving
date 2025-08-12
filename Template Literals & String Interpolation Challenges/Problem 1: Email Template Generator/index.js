// function generateMessage() {
/** Convert to arrow function */
const generateMessage = () => {
    const user = {
        name: "Alice Johnson",
        email: "alice@example.com",
        isVIP: true,
        loyaltyPoints: 1250
    };

    const order = {
        id: "ORD-2025-001",
        items: [
            { name: "Laptop", price: 999.99, quantity: 1 },
            { name: "Mouse", price: 25.50, quantity: 2 },
            { name: "Keyboard", price: 75.00, quantity: 1 }
        ],
        shippingAddress: "123 Main St, New York, NY",
        taxRate: 0.08
    };

    const subject = `Subject: Order Confirmation #${order.id}`;
    const welcome = `Dear ${user.name}`;
    const orderId = `Order ID: ${order.id}`;
    const address = `Shipping Address: ${order.shippingAddress}`;

    const items = order.items.map(item => `- ${item.name} x${item.quantity} ........... $${parseFloat(item.price * item.quantity).toFixed(2)}`).join('\n');

    const subTotal = parseFloat(order.items.reduce((sum, item) => (item.price * item.quantity) + sum, 0).toFixed(2));
    const tax = parseFloat((subTotal*order.taxRate).toFixed(2));
    const total = (subTotal + tax).toFixed(2);

    const vip = `${user.isVIP ? `Current Loyalty Points: ${user.loyaltyPoints}` : ''}`;

    const email = `${subject}\n\n${welcome}\n\nThank you for your order! Here are your order details:\n\n${orderId}\n${address}\n\nItems Ordered:\n${items}\n\nSubtotal: $${subTotal}\nTax: $${tax}\nTotal: $${total}\n\n${vip}`;
    document.getElementById('messageOutput').textContent = email;

}

// Output should be

// Subject: Order Confirmation #ORD-2024-001

// Dear Alice Johnson,

// Thank you for your order! Here are your order details:

// Order ID: ORD-2024-001
// Shipping Address: 123 Main St, New York, NY

// Items Ordered:
// - Laptop x1 ........... $999.99
// - Mouse x2 ............ $51.00
// - Keyboard x1 ......... $75.00

// Subtotal: $1125.99
// Tax: $90.08
// Total: $1216.07

// [VIP Message if applicable]
// Current Loyalty Points: 1250