// postgres 的 bigint 太大，超出js安全数字范围，直接读会精度丢失
// 转换器查出来自动转成字符串，存的时候不动，保存雪花id不变
//程序到数据库值的转换
import {ValueTransformer} from 'typeorm';

export const bigintTransformer:ValueTransformer = {
    to:(v)=>v,
    from:(v)=>(v == null ? v:String(v))
}