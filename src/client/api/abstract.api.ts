export enum urlMethods {
    get = 'GET',
    post = 'POST',
    patch = 'PATCH',
    put = 'PUT',
    delete = 'DELETE'
}

export interface requestOpt {
    path: string;
    method: urlMethods;
    body?: BodyInit;
    rawResponse?: boolean;
}

export abstract class AbstractAPI {
    private static headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });
    private static protocol = 'https';
    private static host = 'api.npoint.io';
    private static port = 443;
    protected basePath: string = '';

    protected async request(options: requestOpt) {       
        try {
            const {protocol, headers, host, port} = AbstractAPI;
            const isHttpPort = port === 80 && protocol === 'http';
            const isHttpsPort = port === 443 && protocol === 'https';
            let portStr = `:${port}`
            if(isHttpPort || isHttpsPort) {
                portStr = '';
            }
            const url = new URL(`${protocol}://${host}${portStr}`);
            url.pathname = `${this.basePath}${options.path}`;
            const res = await fetch(url.toString(), {
                method: options.method,
                headers,
                credentials: 'same-origin',
                mode: 'cors',
                body: options.body
            });
            return res.json();
        }
        catch(error) {
            console.error(error);
            throw error;
        }
    }
}