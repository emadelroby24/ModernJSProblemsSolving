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

    const items = order.items.map(item => `- ${item.name} x${item.quantity} ........... $${(item.price * item.quantity).toFixed(2)}`).join('\n');

    const subTotal = order.items.reduce((sum, item) => (item.price * item.quantity) + sum, 0);
    const tax = subTotal*order.taxRate;
    const total = subTotal + tax;

    const email = `Subject: Order Confirmation #${order.id}
    
Dear ${user.name},

Thank you for your order! Here are your order details:

Order ID: ${order.id}
Shipping Address: ${order.shippingAddress}

Items Ordered:
${items}

Subtotal: $${subTotal.toFixed(2)}
Tax: $${tax.toFixed(2)}
Total: $${total.toFixed(2)}

${user.isVIP ? `🌟 VIP Member Benefits Applied! 
Current Loyalty Points: ${user.loyaltyPoints}` : ''}`;

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