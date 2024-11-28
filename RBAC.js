document.getElementById('manage-users').addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Manage Users</h2>
        <button onclick="addUser()">Add User</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td><button>Edit</button> <button>Delete</button></td>
                </tr>
            </tbody>
        </table>
    `;
});

document.getElementById('manage-roles').addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Manage Roles</h2>
        <button onclick="addRole()">Add Role</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Role Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Admin</td>
                    <td><button>Edit</button> <button>Delete</button></td>
                </tr>
            </tbody>
        </table>
    `;
});

document.getElementById('manage-permissions').addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Manage Permissions</h2>
        <button onclick="addPermission()">Add Permission</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Permission</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>View Dashboard</td>
                    <td><button>Edit</button> <button>Delete</button></td>
                </tr>
            </tbody>
        </table>
    `;
});

function addUser() {
    alert('Add User functionality not implemented yet!');
}

function addRole() {
    alert('Add Role functionality not implemented yet!');
}

function addPermission() {
    alert('Add Permission functionality not implemented yet!');
}
