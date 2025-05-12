export interface ExampleUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface ExampleUserResponse<T> {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: T[];
    support: {
        url: string,
        text: string
    }
}