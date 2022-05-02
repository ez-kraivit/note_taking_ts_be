import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('note')
export default class NoteMigration  {
    @PrimaryColumn({ name:'id' , length:30})
    id: string;

    @Column({ length: "255",nullable: true })
    title: string;

    @Column({ type:'text',nullable: true })
    content: string;

    @Column("simple-array", {nullable: true})
    tagsTags: string[];
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

    @Column({ length: 100, nullable: true })
    createdBy: string;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updatedAt: Date;

    @Column({ length: 100, nullable: true })
    updatedBy: string;

    @Column({ type: "timestamp", nullable: true })
    deletedAt: Date;
}
