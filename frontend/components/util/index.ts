import qs from "qs";

export const queryParams = (params: any) => {
    return `?${qs.stringify(params)}`;
};

export const requestHandler = async <T = any>(res: Response): Promise<T> => {
    if (!res.ok) throw new Error(`${res.statusText}: ${await res.text()}`);

    return await res.json();
};
