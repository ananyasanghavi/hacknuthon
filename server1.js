const jsonData = {
    name: 'John Doe',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };
  
  // Create GraphQL query based on schema
  const gqlQuery = `
    query {
      user(name: "${jsonData.name}") {
        "${jsonData.age}"
        address(city: "${jsonData.address.city}") {
            "${jsonData.address.street}"
            "${jsonData.address.state}"
            "${jsonData.address.zip}"
        }
      }
    }
  `;
  
  console.log(gqlQuery);