import db from '../config/userDb.js';

try {
  // Seed roles
  const roles = ['Admin', 'Manager'];
  for (const role of roles) {
    await db.execute('INSERT IGNORE INTO roles (name) VALUES (?)', [role]);
  }

  // Seed permissions
  const permissions = ['create_user', 'view_user', 'delete_user'];
  for (const perm of permissions) {
    await db.execute('INSERT IGNORE INTO permissions (name) VALUES (?)', [perm]);
  }

  // Get role IDs
  const [adminRows] = await db.execute('SELECT role_id FROM roles WHERE name = ?', ['Admin']);
  const [managerRows] = await db.execute('SELECT role_id FROM roles WHERE name = ?', ['Manager']);

  const adminRoleId = adminRows[0]?.role_id;
  const managerRoleId = managerRows[0]?.role_id;

  if (!adminRoleId || !managerRoleId) {
    throw new Error('Role IDs not found');
  }

  // Get all permissions
  const [allPermissions] = await db.execute('SELECT permission_id, name FROM permissions');

  for (const perm of allPermissions) {
    // Assign all permissions to Admin
    await db.execute(
      'INSERT IGNORE INTO role_permissions (role_id, permission_id) VALUES (?, ?)',
      [adminRoleId, perm.permission_id]
    );

    // Assign only 'view_user' to Manager
    if (perm.name === 'view_user') {
      await db.execute(
        'INSERT IGNORE INTO role_permissions (role_id, permission_id) VALUES (?, ?)',
        [managerRoleId, perm.permission_id]
      );
    }
  }

  console.log("✅ Seeding done.");
} catch (err) {
  console.error("❌ Error seeding data:", err.message);
}
