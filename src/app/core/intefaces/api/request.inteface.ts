export interface ApiRequestInterface {
    url: string;
    params?:
        | {
              param: string;
              value: string | number;
          }[]
        | undefined;
    body?: any | null;
}
