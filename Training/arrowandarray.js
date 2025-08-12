function processNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const original = `Original array is [${numbers.join(',')}]`;
    // Filter = condition inside
    const odd = `Odd numbers [${numbers.filter(num => num % 2 !== 0).join(',')}]`;
    const even = `Even numbers [${numbers.filter(num => num % 2 !== 1).join(',')}]`;
    // Map transform the values or any operation
    const squared = `Squared Numbers is [${numbers.map(num => num * num).join(',')}]`;
    // Reduce = sum the values
    const sum = `Sum of array is ${numbers.reduce((sum, num) => num + sum, 0)}`;
    const max = `Max of array is ${numbers.reduce((max,num) => max > num ? max : num, 0)}`;
    
    const msg = `${original} ${odd} ${even} ${squared} ${sum} ${max}`;

    // Get prime numbers
    const prime = numbers.filter(num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    });
    const primeMsg = `Prime numbers are [${prime.join(',')}]`;
    document.getElementById('arrayOutput').textContent = `${msg} ${primeMsg}`;
}

const sampleUsers = [
    { name: 'Alice', age: 25, email: 'alice@example.com', active: true, role: 'admin' },
    { name: 'Bob', age: 30, email: 'bob@example.com', active: false, role: 'user' },
    { name: 'Charlie', age: 35, email: 'charlie@example.com', active: true, role: 'user' },
    { name: 'Diana', age: 28, email: 'diana@example.com', active: true, role: 'admin' }
];

function processUsers() {
    const activeAdmins = sampleUsers.filter(users => users.role === 'admin')
                                    .filter(users => users.active === true)
                                    .map(users => users.name).join(',');
    const sumOfAges = sampleUsers.reduce((sum, users) => sum + users.age, 0);
    const averageAge = sumOfAges / sampleUsers.length;

    const rolesGroup = sampleUsers.reduce((group, user) => {
        group[user.role] = group[user.role] || [];
        group[user.role].push(user.name);
        return group;
    }, {});

    console.log(rolesGroup);

    const msg = `Original Users: ${JSON.stringify(sampleUsers)}& Active Admins: [${activeAdmins}] & Average Age : ${averageAge.toFixed(1)} & ${JSON.stringify(rolesGroup)}`;
    document.getElementById('arrayOutput').textContent = msg;
}

function chainOperations() {
    const data = [10, 20, 30, 40, 50];

    const result = data.map((num, index) => ({ value:num, index, doubled: num * 2}))
                       .filter(newObj => newObj.doubled > 70)
                       .map(obj => `Item ${obj.index}: ${obj.value} → ${obj.doubled}`)
                       .join('\n');
                       console.log(result);
    
    document.getElementById('arrayOutput').textContent = `Chained Operations Result:\n${result}`;
}
