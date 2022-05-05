import { getConnectionManager, Connection, Repository, ObjectLiteral, IsNull, Not, Like } from "typeorm";

import NoteMigration from "../migration/Note.Migration";
import { TNote, TLists } from "../interFace/Note"

export default class NoteRepository {
    private Repository: Repository<NoteMigration> | ObjectLiteral

    private Manager: Connection

    constructor(nameNote: string = `${process.env.POSTGRES__NAME?.toString().trim() || 'postgresNote'}`) {
        this.Manager = getConnectionManager().get(nameNote);
        this.Repository = this.Manager.getRepository(NoteMigration);
    }

    async all(): Promise<NoteMigration[]> {
        return await this.Repository.find({ order: { createdAt: "DESC" } });
    }

    async get(id: string): Promise<NoteMigration[]> {
        return this.Repository.findOne({ id: id, order: { updatedAt: "DESC" } });
    }

    async allLists(page: number = 0, limit: number = 10, tags: string | undefined = undefined): Promise<TLists> {
        const [list, count] = await Promise.all([
            this.Repository.find({ where: { tagsTags: (tags != undefined) ? Like(`%${tags}%`) : Not(IsNull()) }, take: limit, skip: page > 1 ? (page - 1) * limit : 0, order: { updatedAt: "DESC" } }),
            this.Repository.count({ where: { tagsTags: (tags != undefined) ? Like(`%${tags}%`) : Not(IsNull()) }, order: { updatedAt: "DESC" } }),
        ]);
        return { list, count, page, pageSize: limit };
    }

    async insert(request: TNote): Promise<NoteMigration> {
        return this.Repository.insert(request);
    }

    async update(request: TNote): Promise<NoteMigration> {
        return this.Repository.save(request);
    }

    async delete(request: TNote): Promise<NoteMigration> {
        return this.Repository.delete(request);
    }
}
