import { Nullable } from "src/utilities/types";

export interface IRedisService {
    set<T = Record<string, unknown>>(key: string, value: T, expiration?: number): Promise<void>;
    get<T = Record<string, unknown>>(key: string): Promise<Nullable<T>>;
}
