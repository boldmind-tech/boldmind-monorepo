// SERVICES/user-service/scripts/init-super-admin.ts
import { PrismaClient, UserRole } from '../generated/client';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
    const email = process.env.SUPER_ADMIN_EMAIL || 'admin@boldmind.ng';
    const password = process.env.SUPER_ADMIN_PASSWORD || 'changeme123';

    // Check if super admin already exists
    const existing = await prisma.user.findUnique({
        where: { email },
    });

    if (existing) {
        console.log('✅ Super admin already exists');
        console.log(`📧 Email: ${email}`);
        return existing;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create super admin
    const superAdmin = await prisma.user.create({
        data: {
            id: uuidv4(),
            email,
            fullName: 'Super Admin',
            role: UserRole.SUPER_ADMIN,
            isAdmin: true,
            isSuperAdmin: true,
            isVerified: true,
            password: hashedPassword,
            permissions: ['*'],
        },
    });

    console.log('✅ Super admin created successfully');
    console.log(`📧 Email: ${email}`);
    console.log(`🔑 Password: ${password}`);
    console.log('⚠️  Please change the password immediately!');

    return superAdmin;
}

main()
    .catch((error) => {
        console.error('❌ Error creating super admin:', error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });