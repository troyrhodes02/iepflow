import type { FastifyRequest, FastifyReply } from "fastify";

export type IEPContext = {
    tenantId?: string;
    userId?: string;
    roleKey?: string;
    req: FastifyRequest;
    reply: FastifyReply;
};

export function createContext(opts: { req: FastifyRequest; reply: FastifyReply }): IEPContext {
    return { ...opts };
}