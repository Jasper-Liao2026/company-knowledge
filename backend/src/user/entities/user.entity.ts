import {Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn} from 'typeorm';
import {bigintTransformer} from '../../../common/transformers/bigint.transformer';
@Entity('kh_user')
export class UserEntity {
    @PrimaryColumn({type:'bigint',transformer:bigintTransformer})//js 的number存不了超大bigint，所以要转换为安全的字符串
    id:number;
    // 用户名
    @Column({type:'varchar',length:50})
    username:string|null;
    
    @Column({type:'varchar',length:255})
    // 密码
    password:string|null;
    @Column({type:'varchar',name:'real_name',length:50,nullable:true})
    realName:string|null;
    //头像
    @Column({type:'varchar',length:500,nullable:true})
    avatar:string|null;

    @Column({type:'varchar',length:500,nullable:true})
    email?:string|null;
    //0表示未验证 1表示验证
    @Column({type:'smallint',name:'email_verified',default:0})
    emailVerified:number;
    //0表示禁用，1表示启用
    @Column({type:'smallint',default:1})
    status:number;
    //最后登录时间
    @Column({name:'last_login_at',type:'timestamp',nullable:true})
    lastLoginAt?:Date|null;

    @CreateDateColumn({name:'created_at'})
    createdAt:Date;
    @UpdateDateColumn({name:'updated_at'})
    updatedAt:Date;

    @Column({type:'boolean',default:false})
    deleted:boolean;
}