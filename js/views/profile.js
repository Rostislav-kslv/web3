export class Profile {
    constructor({ firstName, lastName, username, email }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        
    }
    
    render(tableBody) {
        const element = document.createElement('tr');

        element.innerHTML = `
            <th scope="row">${this.firstName}</th>
            <td>${this.lastName}</td>
            <td>${this.username}</td>
            <td>${this.email}</td>
        `;

        tableBody.append(element);
    }
}