type User = {
    id: number;
    kind: string;
};

function makeCustomer<T extends User>(u: T): T {
    return Object.assign(u, {
        id: u.id,
        kind: 'customer',
    });
}
