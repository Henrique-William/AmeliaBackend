import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

export async function createUser(user: User) {
    return await prisma.user.create({
        data: user,
    });
};

export async function getUserByID(id: number) {
    return await prisma.user.findUnique({ where: { id }, select: { email: true, id: true } })
}

export async function authenticateUser(user: User) {
    try {
        const currentUser = await prisma.user.findUnique({
            where: {
                email: user.email,
            },
        });
        if (!currentUser) {
            return false;
        }

        const isUserAuthenticated = currentUser.password === user.password;

        if (isUserAuthenticated) {
            return { id: currentUser.id, email: currentUser.email };
        }
        // bcrypt password comparison
        // return await bcrypt.compare(user.password, currentUser.password);
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
