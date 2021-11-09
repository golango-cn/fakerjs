const faker = require('faker');

let users = [];
const threshold = 100;

for (let i = 1; i <= threshold; i++) {
    users.push({
        id: i,
        name: faker.name.firstName() + faker.name.lastName(),
        job: faker.name.jobTitle(),
        about: faker.lorem.paragraph(),
        phone: faker.phone.phoneNumber(),
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        salary: "$" + faker.finance.amount() + "M",
        // You can also use faker.image.people() for image
        // image: "https://source.unsplash.com/1600x900/?user",
        image: faker.image.people(),
        country: faker.address.country()
    });
}

console.log(JSON.stringify(users));