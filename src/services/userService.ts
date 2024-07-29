import prisma from '../config/prisma';
import bcrypt from 'bcrypt';

export async function createUser(user: User) {
    return await prisma.user.create({
        data: user,
    });
};
// comentario para mostrar funcionamento de branchs

export async function getUserByID(id: number) {
    return await prisma.user.findUnique({ where: { id } })
}

export function authenticateUser(user: User) {
    try{
        const currentUser = await prisma.user.findUnique({
            where: {
                email: user.email,
            },
        });
        if (!currentUser) {
            return false;
        }
        // bcrypt password comparison
        
    }
}
